# myapp/admin.py

from django.contrib import admin
from .models import User, Role, Article, Category, Tag, ArticleTag

admin.site.register(User)
admin.site.register(Role)
admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(ArticleTag)
