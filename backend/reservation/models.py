from django.db import models
from django.conf import settings
from listings.models import Logement
from accounts.models import User

class Reservation(models.Model):
    STATUT_CHOICES = [
        ("en_attente", "En attente"),
        ("confirmee", "Confirmée"),
        ("rejetee", "Rejetée"),
    ]
    
    utilisateur = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "reservations")
    logement = models.ForeignKey(Logement, on_delete = models.CASCADE, related_name = "reservations")
    montant = models.IntegerField(default=0)
    date_reservation = models.DateTimeField(auto_now_add = True)
    date_debut = models.DateField()
    date_fin = models.DateField()
    statut = models.CharField(max_length = 20, choices = STATUT_CHOICES, default = "en_attente")

    def __str__(self):
        return f"Réservation {self.id} - {self.utilisateur.username} pour {self.logement.titre}"
    
    class Meta:
        verbose_name="Réservation"
        verbose_name_plural="Réservations"