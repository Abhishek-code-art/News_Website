from django.urls import path
from .views import (
    RoleListView, RoleDetailView, RoleCreateView, RoleUpdateView, RoleDeleteView,
    UserListView, UserDetailView, UserCreateView, UserUpdateView, UserDeleteView,
    CategoryListView, CategoryDetailView, CategoryCreateView, CategoryUpdateView, CategoryDeleteView,
    ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView,
    TagListView, TagDetailView, TagCreateView, TagUpdateView, TagDeleteView,
    ArticleTagListView, ArticleTagDetailView, ArticleTagCreateView, ArticleTagUpdateView, CategoryArticleListView, 
    TagArticleListView, ArticleTagDeleteView,
    home
)

urlpatterns = [
    path('', home, name='home'),
    # Role URLs
    path('roles/', RoleListView.as_view(), name='role_list'),
    path('roles/<int:pk>/', RoleDetailView.as_view(), name='role_detail'),
    path('roles/create/', RoleCreateView.as_view(), name='role_create'),
    path('roles/<int:pk>/update/', RoleUpdateView.as_view(), name='role_update'),
    path('roles/<int:pk>/delete/', RoleDeleteView.as_view(), name='role_delete'),
    
    # User URLs
    path('users/', UserListView.as_view(), name='user_list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user_detail'),
    path('users/create/', UserCreateView.as_view(), name='user_create'),
    path('users/<int:pk>/update/', UserUpdateView.as_view(), name='user_update'),
    path('users/<int:pk>/delete/', UserDeleteView.as_view(), name='user_delete'),

    # Category URLs
    path('categories/', CategoryListView.as_view(), name='category_list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category_detail'),
    path('categories/create/', CategoryCreateView.as_view(), name='category_create'),
    path('categories/<int:pk>/update/', CategoryUpdateView.as_view(), name='category_update'),
    path('categories/<int:pk>/delete/', CategoryDeleteView.as_view(), name='category_delete'),

    # Article URLs
    path('articles/', ArticleListView.as_view(), name='article_list'),
    path('articles/<int:pk>/', ArticleDetailView.as_view(), name='article_detail'),
    path('articles/create/', ArticleCreateView.as_view(), name='article_create'),
    path('articles/<int:pk>/update/', ArticleUpdateView.as_view(), name='article_update'),
    path('articles/<int:pk>/delete/', ArticleDeleteView.as_view(), name='article_delete'),

    # ArticleCategory URLs
    path('categories/<int:category_id>/articles/', CategoryArticleListView.as_view(), name='category_article_list'),

    # Tag URLs
    path('tags/', TagListView.as_view(), name='tag_list'),
    path('tags/<int:pk>/', TagDetailView.as_view(), name='tag_detail'),
    path('tags/create/', TagCreateView.as_view(), name='tag_create'),
    path('tags/<int:pk>/update/', TagUpdateView.as_view(), name='tag_update'),
    path('tags/<int:pk>/delete/', TagDeleteView.as_view(), name='tag_delete'),

    # ArticleTag URLs
    path('articletags/', ArticleTagListView.as_view(), name='articletag_list'),
    path('articletags/<int:pk>/', ArticleTagDetailView.as_view(), name='articletag_detail'),
    path('articletags/create/', ArticleTagCreateView.as_view(), name='articletag_create'),
    path('articletags/<int:pk>/update/', ArticleTagUpdateView.as_view(), name='articletag_update'),
    path('articletags/<int:pk>/delete/', ArticleTagDeleteView.as_view(), name='articletag_delete'),

    path('tags/<int:tag_id>/articles/', TagArticleListView.as_view(), name='tag_article_list'),
]
