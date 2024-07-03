from django.db import models
from users.models import User

class Article(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('archived', 'Archived'),
    ]

    articleID = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, related_name='articles', on_delete=models.CASCADE)
    publishDate = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

    def createArticle(self):
        # Logic for creating article
        pass

    def editArticle(self):
        # Logic for editing article
        pass

    def deleteArticle(self):
        # Logic for deleting article
        pass

    def publishArticle(self):
        # Logic for publishing article
        pass

    def archiveArticle(self):
        # Logic for archiving article
        pass

class Comment(models.Model):
    commentID = models.AutoField(primary_key=True)
    article = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField()
    commentDate = models.DateTimeField(auto_now_add=True)

    def createComment(self):
        # Logic for creating comment
        pass

    def editComment(self):
        # Logic for editing comment
        pass

    def deleteComment(self):
        # Logic for deleting comment
        pass

class Tag(models.Model):
    tagID = models.AutoField(primary_key=True)
    tagName = models.CharField(max_length=100)

    def createTag(self):
        # Logic for creating tag
        pass

    def editTag(self):
        # Logic for editing tag
        pass

    def deleteTag(self):
        # Logic for deleting tag
        pass
