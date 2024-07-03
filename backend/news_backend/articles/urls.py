from django.urls import path
from .views import ArticleListCreate, ArticleDetail, CommentListCreate, CommentDetail, TagListCreate, TagDetail

urlpatterns = [
    path('articles/', ArticleListCreate.as_view(), name='article-list-create'),
    path('articles/<int:pk>/', ArticleDetail.as_view(), name='article-detail'),
    path('comments/', CommentListCreate.as_view(), name='comment-list-create'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('tags/', TagListCreate.as_view(), name='tag-list-create'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
]
