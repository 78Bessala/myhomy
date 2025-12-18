from django.contrib import admin
from .models import Image, Logement

@admin.register(Logement)
class LogementAdmin(admin.ModelAdmin):
    list_display = ('titre','type_logement','prix','ville')
    list_filter= ['ville','quartier','prix','type_logement']
    search_fields = ['titre', 'ville', 'quartier', 'prix' ,'disponibilite','nombre_pieces']
    list_per_page = 5

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['logement__titre', 'ordre', 'image']
    list_filter = ['logement__titre']
    list_per_page = 5