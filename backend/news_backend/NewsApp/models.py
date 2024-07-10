from django.db import models

class Role(models.Model):
    roleID = models.AutoField(primary_key=True)
    roleName = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.roleName

class User(models.Model):
    userID = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    roleID = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return self.username

class Category(models.Model):
    categoryID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class Tag(models.Model):
    tagID = models.AutoField(primary_key=True)
    tagName = models.CharField(max_length=100)

    def __str__(self):
        return self.tagName
    
class Article(models.Model):
    articleID = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    authorID = models.ForeignKey(User, on_delete=models.CASCADE)
    publishDate = models.DateField()
    status = models.CharField(max_length=50)
    categories = models.ManyToManyField(Category, related_name='articles')
    tags = models.ManyToManyField(Tag, through='ArticleTag', related_name='articles')
    image = models.ImageField(upload_to='article_images/', null=True, blank=True)

    def __str__(self):
        return self.title

class ArticleTag(models.Model):
    articleID = models.ForeignKey(Article, on_delete=models.CASCADE)
    tagID = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('articleID', 'tagID')

    def __str__(self):
        return f"{self.articleID} - {self.tagID}"