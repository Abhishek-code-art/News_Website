# news_backend/urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('NewsApp/', include('NewsApp.urls')),  # Include NewsApp URLs
    path('', include('NewsApp.urls')),  # This includes NewsApp URLs at the root path
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)