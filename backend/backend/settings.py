from pathlib import Path
from os import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = environ.get('DJANGO_SECRET_KEY','default-secret-key')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = environ.get('DEBUG')

ALLOWED_HOSTS = ['localhost']


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    
    # DRF
    "rest_framework",
    "django_filters",
    'rest_framework.authtoken',

    # Cloudinary
    'cloudinary_storage',
    'cloudinary',

    #CORS
    'corsheaders',

    # apps
    'accounts',
    'contacts',
    'reservation',
    'listings',
    'notifications',
    'favoris',

    # Auth
    "django.contrib.sites",
    'dj_rest_auth',
    'dj_rest_auth.registration',

    # Allauth
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.github',

]

SITE_ID = 1

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "allauth.account.middleware.AccountMiddleware",
]

ROOT_URLCONF = "backend.urls"

#CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]



AUTH_USER_MODEL = "accounts.User"

from corsheaders.defaults import default_headers

CORS_ALLOW_HEADERS = list(default_headers) + ["authorization"]

CORS_ALLOWED_METHODS=[
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
]

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR /"{environ.get('DATABASE_NAME')}",
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = "fr-fr"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Static / media (pour dev)
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# Cloudinary config
import cloudinary
import cloudinary.uploader
import cloudinary.api

# Stockage par défaut
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

CLOUDINARY_STORAGE = {
    'CLOUD_NAME' : environ.get('CLOUD_NAME'),
    'API_KEY' : environ.get('CLOUD_API_KEY'),
    'API_SECRET' : environ.get('CLOUD_API_SECRET'),
}

# JWT Settings
from datetime import timedelta

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES':(
        'dj_rest_auth.jwt_auth.JWTCookieAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS':[
        'django_filters.rest_framework.DjangoFilterBackend',
    ],
}

REST_USE_JWT = True

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes = 60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days = 1),
    'AUTH_HEADER_TYPES': ('Bearer'),
}


# EMAILS
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
DEFAULT_FROM_EMAIL = environ.get('DEFAULT_EMAIL')

# ALLAUTH
ACCOUNT_LOGIN_METHOD = {'username', "email"}

SIGNUP_FIELDS = {
    'username': { 
        'required': True,
    },
    'email': { 
        'required': True,
    },
    'password1': { 
        'required': True,
    },
    'password2': { 
        'required': True,
    },
}

ACCOUNT_EMAIL_VERIFICATION = 'optional'