from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import User, Role, Article, Category, Tag, ArticleTag
from .forms import ArticleForm

def home(request):
    return render(request, 'home.html')


class RoleListView(ListView):
    model = Role
    template_name = 'role_list.html'

class RoleDetailView(DetailView):
    model = Role
    template_name = 'role_detail.html'

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

class UserDetailView(DetailView):
    model = User
    template_name = 'user_detail.html'

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

class CategoryDetailView(DetailView):
    model = Category
    template_name = 'category_detail.html'

class CategoryCreateView(CreateView):
    model = Category
    fields = ['name', 'description']
    template_name = 'category_form.html'
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

class ArticleDetailView(DetailView):
    model = Article
    template_name = 'article_detail.html'

class ArticleCreateView(CreateView):
    model = Article
    form_class = ArticleForm
    template_name = 'article_form.html'
    success_url = reverse_lazy('article_list')

    def form_valid(self, form):
        article = form.save(commit=False)
        article.save()
        form.save_m2m()  # Save the many-to-many relationships
        return super().form_valid(form)

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

class TagDetailView(DetailView):
    model = Tag
    template_name = 'tag_detail.html'

class TagCreateView(CreateView):
    model = Tag
    fields = ['tagName']
    template_name = 'tag_form.html'
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

class ArticleTagDetailView(DetailView):
    model = ArticleTag
    template_name = 'articletag_detail.html'

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
        return category.articles.all()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        category_id = self.kwargs['category_id']
        context['category'] = get_object_or_404(Category, pk=category_id)
        return context
