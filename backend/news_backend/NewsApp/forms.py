# newsapp/forms.py

from django import forms
from .models import Article, Category, Tag

class ArticleForm(forms.ModelForm):
    categories = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(),
        widget=forms.SelectMultiple(attrs={'class': 'select2'})
    )

    tags = forms.ModelMultipleChoiceField(
        queryset=Tag.objects.all(),
        widget=forms.SelectMultiple(attrs={'class': 'select2'}),
        required=False
    )

    class Meta:
        model = Article
        fields = ['title', 'content', 'authorID', 'status', 'categories', 'tags', 'image']
