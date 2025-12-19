from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('utilisateur__username','logement__titre', 'date_reservation','statut','montant')
    list_filter = ['utilisateur__username','logement__titre','date_reservation', 'statut']
    search_fields = ['utilisateur__username','logement__titre','date_reservation',]
    list_per_page = 5
