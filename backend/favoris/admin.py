from django.contrib import admin
from .models import Favoris

@admin.register(Favoris)
class FavorisAdmin(admin.ModelAdmin):
    list_display = ('utilisateur__username','logement__titre')
    search_fields = ['utilisateur__name','logement__titre']
    list_filter = ['utilisateur__username','logement__titre']
    list_per_page=5