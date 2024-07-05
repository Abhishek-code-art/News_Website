from django.urls import path
from .views import (
    RoleListView, RoleDetailView, RoleCreateView, RoleUpdateView, RoleDeleteView,
    UserListView, UserDetailView, UserCreateView, UserUpdateView, UserDeleteView,
    CategoryListView, CategoryDetailView, CategoryCreateView, CategoryUpdateView, CategoryDeleteView,
    ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView,
    TagListView, TagDetailView, TagCreateView, TagUpdateView, TagDeleteView,
    ArticleTagListView, ArticleTagDetailView, ArticleTagCreateView, ArticleTagUpdateView, ArticleTagDeleteView
)

urlpatterns = [
    path('roles/', RoleListView.as_view(), name='role_list'),
    path('roles/<int:pk>/', RoleDetailView.as_view(), name='role_detail'),
    path('roles/new/', RoleCreateView.as_view(), name='role_create'),
    path('roles/<int:pk>/edit/', RoleUpdateView.as_view(), name='role_edit'),
    path('roles/<int:pk>/delete/', RoleDeleteView.as_view(), name='role_delete'),
    
    path('users/', UserListView.as_view(), name='user_list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user_detail'),
    path('users/new/', UserCreateView.as_view(), name='user_create'),
    path('users/<int:pk>/edit/', UserUpdateView.as_view(), name='user_edit'),
    path('users/<int:pk>/delete/', UserDeleteView.as_view(), name='user_delete'),
    
    path('categories/', CategoryListView.as_view(), name='category_list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category_detail'),
    path('categories/new/', CategoryCreateView.as_view(), name='category_create'),
    path('categories/<int:pk>/edit/', CategoryUpdateView.as_view(), name='category_edit'),
    path('categories/<int:pk>/delete/', CategoryDeleteView.as_view(), name='category_delete'),
    
    path('articles/', ArticleListView.as_view(), name='article_list'),
    path('articles/<int:pk>/', ArticleDetailView.as_view(), name='article_detail'),
    path('articles/new/', ArticleCreateView.as_view(), name='article_create'),
    path('articles/<int:pk>/edit/', ArticleUpdateView.as_view(), name='article_edit'),
    path('articles/<int:pk>/delete/', ArticleDeleteView.as_view(), name='article_delete'),
    
    path('tags/', TagListView.as_view(), name='tag_list'),
    path('tags/<int:pk>/', TagDetailView.as_view(), name='tag_detail'),
    path('tags/new/', TagCreateView.as_view(), name='tag_create'),
    path('tags/<int:pk>/edit/', TagUpdateView.as_view(), name='tag_edit'),
    path('tags/<int:pk>/delete/', TagDeleteView.as_view(), name='tag_delete'),
    
    path('articletags/', ArticleTagListView.as_view(), name='articletag_list'),
    path('articletags/<int:pk>/', ArticleTagDetailView.as_view(), name='articletag_detail'),
    path('articletags/new/', ArticleTagCreateView.as_view(), name='articletag_create'),
    path('articletags/<int:pk>/edit/', ArticleTagUpdateView.as_view(), name='articletag_edit'),
    path('articletags/<int:pk>/delete/', ArticleTagDeleteView.as_view(), name='articletag_delete'),
]
