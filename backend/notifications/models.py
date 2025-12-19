from django.db import models
from django.conf import settings
from accounts.models import User

class Notification(models.Model):
    utilisateur = models.ForeignKey(
        User,
        on_delete = models.CASCADE,
        related_name = "notifications"
    )
    titre = models.CharField(max_length = 255)
    message = models.TextField()
    lien = models.URLField(blank = True, null = True)
    lue = models.BooleanField(default = False)
    date_creation = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return f"{self.titre} - {self.utilisateur.username} - {'Lue' if self.lue else 'Non lue'}"
    
    class Meta:
        verbose_name="Notifications"
        verbose_name_plural="Notifications"