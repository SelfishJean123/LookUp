from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/products/', include('base.urls.products_urls')),
    path('api/users/', include('base.urls.users_urls')),
    # path('api/reviews/', include('base.urls.reviews_urls')),
    # path('api/favourites/', include('base.urls.favourites_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
