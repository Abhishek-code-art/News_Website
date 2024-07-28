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
    author = serializers.SerializerMethodField()
    category_id = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()
    user_id = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['articleID', 'title', 'content', 'author', 'status', 'tags', 'image', 'publishDateTime', 'category_id', 'category_name', 'user_id', 'username']

    def get_author(self, obj):
        return UserSerializer(obj.authorID).data

    def get_category_id(self, obj):
        return getattr(obj, 'category_id', None)

    def get_category_name(self, obj):
        return getattr(obj, 'category_name', None)

    def get_user_id(self, obj):
        return getattr(obj, 'user_id', None)

    def get_username(self, obj):
        return getattr(obj, 'username', None)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tagID', 'tagName']

# Article category wise.
class ArticleCategorySerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = ['articleID', 'title', 'content', 'status', 'image', 'publishDateTime', 'categories', 'author', 'tags']

    def get_author(self, obj):
        return UserSerializer(obj.authorID).data

class ArticleTagSerializer(serializers.ModelSerializer):
    article = ArticleSerializer(read_only=True)
    tag = TagSerializer(read_only=True)

    class Meta:
        model = ArticleTag
        fields = ['article', 'tag']
