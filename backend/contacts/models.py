from django.db import models
from django.conf import settings
from accounts.models import User

class Contact(models.Model):
    utilisateur = models.ForeignKey(
        User,
        on_delete = models.SET_NULL,
        blank=True, 
        null=True
    )
    nom = models.CharField(max_length = 100, blank = True)
    email = models.EmailField()
    message = models.TextField()
    date_envoi = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        if self.utilisateur:
            return f"Message de {self.utilisateur.username}"
        return f"Message de {self.nom}"
    
    class Meta:
        verbose_name="Contact"
        verbose_name_plural="Contacts"