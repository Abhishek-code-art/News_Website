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
        return obj.category_id

    def get_category_name(self, obj):
        return obj.category_name

    def get_user_id(self, obj):
        return obj.user_id

    def get_username(self, obj):
        return obj.username
    
# Article category wise.
class ArticleCategorySerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField()
    category_name = serializers.CharField()

    class Meta:
        model = Article
        fields = ['articleID', 'title', 'content', 'status', 'image', 'publishDateTime', 'category_id', 'category_name']

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
