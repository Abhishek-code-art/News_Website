from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import User, Role, Article, Category, Tag, ArticleTag
from .forms import ArticleForm
from django.contrib.auth.models import User as AuthUser
from .serializers import ArticleSerializer, CategorySerializer, TagSerializer, ArticleCategorySerializer, UserSerializer
from django.db.models import OuterRef, Subquery
from django.http import JsonResponse
from django.utils import timezone
from django.views.generic.detail import DetailView

def home(request):
    return JsonResponse({'message': 'Welcome to the home page'})

class RoleListView(ListView):
    model = Role
    template_name = 'role_list.html'

    def render_to_response(self, context, **response_kwargs):
        roles = self.get_queryset()
        data = list(roles.values('roleName', 'description'))
        return JsonResponse(data, safe=False)

class RoleDetailView(DetailView):
    model = Role
    template_name = 'role_detail.html'

    def get(self, request, *args, **kwargs):
        role = self.get_object()
        data = {
            'roleName': role.roleName,
            'description': role.description
        }
        return JsonResponse(data)

class RoleCreateView(CreateView):
    model = Role
    fields = ['roleName', 'description']
    template_name = 'role_form.html'
    success_url = reverse_lazy('role_list')

class RoleUpdateView(UpdateView):
    model = Role
    fields = ['roleName', 'description']
    template_name = 'role_form.html'
    success_url = reverse_lazy('role_list')

class RoleDeleteView(DeleteView):
    model = Role
    template_name = 'role_confirm_delete.html'
    success_url = reverse_lazy('role_list')

class UserListView(ListView):
    model = User
    template_name = 'user_list.html'

    def render_to_response(self, context, **response_kwargs):
        users = self.get_queryset()
        data = list(users.values('username', 'email', 'roleID'))
        return JsonResponse(data, safe=False)

class UserDetailView(DetailView):
    model = User
    template_name = 'user_detail.html'

    def get(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = UserSerializer(user);
        return JsonResponse(serializer.data)

class UserCreateView(CreateView):
    model = User
    fields = ['username', 'password', 'email', 'roleID']
    template_name = 'user_form.html'
    success_url = reverse_lazy('user_list')

class UserUpdateView(UpdateView):
    model = User
    fields = ['username', 'password', 'email', 'roleID']
    template_name = 'user_form.html'
    success_url = reverse_lazy('user_list')

class UserDeleteView(DeleteView):
    model = User
    template_name = 'user_confirm_delete.html'
    success_url = reverse_lazy('user_list')

class CategoryListView(ListView):
    model = Category
    template_name = 'category_list.html'
    serializer_class = CategorySerializer

    def render_to_response(self, context, **response_kwargs):
        categories = self.get_queryset()
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

class CategoryDetailView(DetailView):
    model = Category
    template_name = 'category_detail.html'
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        category = self.get_object()
        serializer = CategorySerializer(category)
        return JsonResponse(serializer.data)

class CategoryCreateView(CreateView):
    model = Category
    fields = ['name', 'description']
    template_name = 'category_form.html'
    serializer_class = CategorySerializer
    success_url = reverse_lazy('category_list')

class CategoryUpdateView(UpdateView):
    model = Category
    fields = ['name', 'description']
    template_name = 'category_form.html'
    success_url = reverse_lazy('category_list')

class CategoryDeleteView(DeleteView):
    model = Category
    template_name = 'category_confirm_delete.html'
    success_url = reverse_lazy('category_list')

class ArticleListView(ListView):
    model = Article
    template_name = 'article_list.html'

    def get_queryset(self):
        # Subquery to get category information for each article
        category_subquery = Category.objects.filter(
            articles__articleID=OuterRef('articleID')
        ).values('categoryID', 'name')[:1]

        # Annotate the articles with category information
        articles = Article.objects.annotate(
            category_id=Subquery(category_subquery.values('categoryID')),
            category_name=Subquery(category_subquery.values('name'))
        ).order_by('-publishDateTime')
        
        return articles

    def render_to_response(self, context, **response_kwargs):
        articles = self.get_queryset()
        serializer = ArticleCategorySerializer(articles, many=True)
        return JsonResponse(serializer.data, safe=False)

class ArticleDetailView(DetailView):
    model = Article
    template_name = 'article_detail.html'

    def get(self, request, *args, **kwargs):
        article = self.get_object()
        
        # Subquery to get category information for the article
        category_subquery = Category.objects.filter(
            articles__articleID=OuterRef('articleID')
        ).values('categoryID', 'name')[:1]

        # Annotate the article with category and user information
        article = Article.objects.filter(articleID=article.articleID).annotate(
            category_id=Subquery(category_subquery.values('categoryID')),
            category_name=Subquery(category_subquery.values('name')),
            user_id=Subquery(User.objects.filter(userID=OuterRef('authorID')).values('userID')[:1]),
            username=Subquery(User.objects.filter(userID=OuterRef('authorID')).values('username')[:1])
        ).first()

        serializer = ArticleSerializer(article)
        return JsonResponse(serializer.data, safe=False)

class ArticleCreateView(CreateView):
    model = Article
    form_class = ArticleForm
    template_name = 'article_form.html'
    serializer_class = ArticleSerializer
    success_url = reverse_lazy('article_list')

    def form_valid(self, form):
        print("Form is valid")
        article = form.save(commit=False)
        article.publishDateTime = timezone.now() 
        article.save()
        form.save_m2m()  # Save the many-to-many relationships
        return super().form_valid(form)

    def form_invalid(self, form):
        print("Form is invalid")
        print(form.errors)
        return super().form_invalid(form)


class ArticleUpdateView(UpdateView):
    model = Article
    form_class = ArticleForm
    template_name = 'article_form.html'
    success_url = reverse_lazy('article_list')

    def form_valid(self, form):
        article = form.save(commit=False)
        article.save()
        form.save_m2m()  # Save the many-to-many relationships
        return super().form_valid(form)
    
class ArticleDeleteView(DeleteView):
    model = Article
    template_name = 'article_confirm_delete.html'
    success_url = reverse_lazy('article_list')

class TagListView(ListView):
    model = Tag
    template_name = 'tag_list.html'
    serializer_class = TagSerializer

    def render_to_response(self, context, **response_kwargs):
        tags = self.get_queryset()
        serializer = TagSerializer(tags, many=True)
        return JsonResponse(serializer.data, safe=False)

class TagDetailView(DetailView):
    model = Tag
    template_name = 'tag_detail.html'
    serializer_class = TagSerializer

    def get(self, request, *args, **kwargs):
        tag = self.get_object()
        serializer = TagSerializer(tag)
        return JsonResponse(serializer.data)

class TagCreateView(CreateView):
    model = Tag
    fields = ['tagName']
    template_name = 'tag_form.html'
    serializer_class = TagSerializer
    success_url = reverse_lazy('tag_list')

class TagUpdateView(UpdateView):
    model = Tag
    fields = ['tagName']
    template_name = 'tag_form.html'
    success_url = reverse_lazy('tag_list')

class TagDeleteView(DeleteView):
    model = Tag
    template_name = 'tag_confirm_delete.html'
    success_url = reverse_lazy('tag_list')

class ArticleTagListView(ListView):
    model = ArticleTag
    template_name = 'articletag_list.html'

    def render_to_response(self, context, **response_kwargs):
        article_tags = self.get_queryset()
        data = list(article_tags.values('articleID', 'tagID'))
        return JsonResponse(data, safe=False)

class ArticleTagDetailView(DetailView):
    model = ArticleTag
    template_name = 'articletag_detail.html'

    def get(self, request, *args, **kwargs):
        article_tag = self.get_object()
        data = {
            'articleID': article_tag.articleID,
            'tagID': article_tag.tagID
        }
        return JsonResponse(data)

class ArticleTagCreateView(CreateView):
    model = ArticleTag
    fields = ['articleID', 'tagID']
    template_name = 'articletag_form.html'
    success_url = reverse_lazy('articletag_list')

class ArticleTagUpdateView(UpdateView):
    model = ArticleTag
    fields = ['articleID', 'tagID']
    template_name = 'articletag_form.html'
    success_url = reverse_lazy('articletag_list')

class ArticleTagDeleteView(DeleteView):
    model = ArticleTag
    template_name = 'articletag_confirm_delete.html'
    success_url = reverse_lazy('articletag_list')


# article and category to fetch the article based on the category.
class CategoryArticleListView(ListView):
    model = Article
    template_name = 'category_article_list.html'
    context_object_name = 'articles'

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        category = get_object_or_404(Category, pk=category_id)

        # Annotate the articles with category information
        articles = category.articles.annotate(
            category_id=Subquery(
                Category.objects.filter(
                    articles__articleID=OuterRef('articleID')
                ).values('categoryID')[:1]
            ),
            category_name=Subquery(
                Category.objects.filter(
                    articles__articleID=OuterRef('articleID')
                ).values('name')[:1]
            )
        ).order_by('-publishDateTime')
        
        return articles
    
    def render_to_response(self, context, **response_kwargs):
        articles = self.get_queryset()
        serializer = ArticleCategorySerializer(articles, many=True)
        return JsonResponse(serializer.data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        category_id = self.kwargs['category_id']
        context['category'] = get_object_or_404(Category, pk=category_id)
        return context

# adding tags to the articles 
class TagArticleListView(ListView):
    model = Article
    template_name = 'tag_article_list.html'
    context_object_name = 'articles'

    def get_queryset(self):
        tag_id = self.kwargs['tag_id']
        tag = get_object_or_404(Tag, pk=tag_id)
        print(f"Fetching articles for tag: {tag.tagName}")
        return tag.articles.all()
    
    def render_to_response(self, context, **response_kwargs):
        articles = self.get_queryset()
        serializer = ArticleSerializer(articles, many=True)
        return JsonResponse(serializer.data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        tag_id = self.kwargs['tag_id']
        context['tag'] = get_object_or_404(Tag, pk=tag_id)
        return context