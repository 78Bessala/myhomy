from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('nom', 'email', 'date_envoi','message')
    list_filter = ['nom','email','date_envoi']
    search_fields = ['nom','email']
    list_per_page = 5