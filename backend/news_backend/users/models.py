from django.db import models
from django.contrib.auth.models import AbstractUser

class Role(models.Model):
    roleID = models.AutoField(primary_key=True)
    roleName = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.roleName

class User(AbstractUser):
    roleID = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)

    def register(self):
        # Logic for user registration
        pass

    def login(self):
        # Logic for user login
        pass

    def logout(self):
        # Logic for user logout
        pass

class Admin(User):
    class Meta:
        proxy = True

    def manageUsers(self):
        # Logic for managing users
        pass

    def manageContent(self):
        # Logic for managing content
        pass


