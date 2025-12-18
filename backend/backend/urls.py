from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("admin/", admin.site.urls),

    #JWT
    path("api/auth/jwt/login", TokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path("api/auth/jwt/refresh", TokenRefreshView.as_view(), name = 'token_refresh'),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration', include('dj_rest_auth.registration.urls')),

    # Social login
    path('api/auth/social/', include('allauth.socialaccount.urls')),

    path("api/accounts/",include('accounts.urls')),
    path("api/contacts/",include('contacts.urls')),
    path("api/listings/",include('listings.urls')),
    path("api/reservation/",include('reservation.urls')),
    path("api/notifications/", include('notifications.urls')),
    path("api/favoris/", include('favoris.urls')),
    
]

if settings.DEBUG:
    urlpatterns +=static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )