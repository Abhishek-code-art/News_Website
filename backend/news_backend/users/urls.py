from django.urls import path
from .views import UserListCreate, UserDetail, RoleListCreate, RoleDetail

urlpatterns = [
    path('users/', UserListCreate.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('roles/', RoleListCreate.as_view(), name='role-list-create'),
    path('roles/<int:pk>/', RoleDetail.as_view(), name='role-detail'),
]
