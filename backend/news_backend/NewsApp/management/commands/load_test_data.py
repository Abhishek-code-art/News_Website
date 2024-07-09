# NewsApp/management/commands/load_test_data.py

import json
from django.core.management.base import BaseCommand
from NewsApp.models import Role, User, Category, Article, Tag, ArticleTag

class Command(BaseCommand):
    help = 'Load test data from JSON files'

    def handle(self, *args, **kwargs):
        with open('test_data/roles.json') as f:
            roles = json.load(f)
            for role in roles:
                Role.objects.create(**role)

        with open('test_data/users.json') as f:
            users = json.load(f)
            for user in users:
                User.objects.create(**user)

        with open('test_data/categories.json') as f:
            categories = json.load(f)
            for category in categories:
                Category.objects.create(**category)

        with open('test_data/articles.json') as f:
            articles = json.load(f)
            for article in articles:
                Article.objects.create(**article)

        with open('test_data/tags.json') as f:
            tags = json.load(f)
            for tag in tags:
                Tag.objects.create(**tag)

        with open('test_data/articletags.json') as f:
            articletags = json.load(f)
            for articletag in articletags:
                ArticleTag.objects.create(**articletag)

        self.stdout.write(self.style.SUCCESS('Test data loaded successfully'))
