from rest_framework import serializers
from .models import User, Role, Article, Category, Tag, ArticleTag

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['roleID', 'roleName', 'description']

class UserSerializer(serializers.ModelSerializer):
    role = RoleSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['userID', 'username', 'password', 'email', 'role']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['categoryID', 'name', 'description']

class ArticleSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Article
        # fields = ['articleID', 'title', 'content', 'author', 'publishDate', 'status', 'category']
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tagID', 'tagName']

class ArticleTagSerializer(serializers.ModelSerializer):
    article = ArticleSerializer(read_only=True)
    tag = TagSerializer(read_only=True)

    class Meta:
        model = ArticleTag
        fields = ['article', 'tag']
