from django.db import models
from accounts.models import User
from listings.models import Logement


class Favoris(models.Model):
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE, related_name="favoris")
    logement = models.ForeignKey(Logement, related_name='favoris', on_delete=models.CASCADE)
    date_creation = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.logement.titre}"
    
    class Meta:
        verbose_name = "Favoris"
        verbose_name_plural = "Favoris"
        unique_together = ("utilisateur","logement")