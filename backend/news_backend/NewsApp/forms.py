# newsapp/forms.py

from django import forms
from .models import Article, Category

class ArticleForm(forms.ModelForm):
    categories = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(),
        widget=forms.SelectMultiple(attrs={'class': 'select2'})
    )

    class Meta:
        model = Article
        fields = ['title', 'content', 'authorID', 'publishDate', 'status', 'categories']
