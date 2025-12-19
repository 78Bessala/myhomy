from django.db import models
from cloudinary.models import CloudinaryField

class Logement(models.Model):
    TYPE_CHOICES = [
        ("chambre","Chambre"),
        ("studio","Studio"),
        ("appartement","Appartement"),
        ("villa","Villa"),
        ("duplex","Duplex"),
    ]

    titre = models.CharField(max_length = 200, verbose_name="Titre")
    type_logement = models.CharField(max_length = 20, choices = TYPE_CHOICES, verbose_name="Type")
    description = models.TextField()
    
    ville = models.CharField(max_length = 100)
    quartier = models.CharField(max_length = 100)
    
    prix = models.DecimalField(max_digits = 10, decimal_places = 2)
    superficie = models.PositiveIntegerField(null = True, blank = True)
    chambres = models.PositiveIntegerField(default=0)
    salles_bain = models.PositiveIntegerField(default = 0)
    cuisine = models.PositiveIntegerField(default = 0)
    salon = models.PositiveIntegerField(default = 0)
    nombre_pieces = models.PositiveIntegerField(default = 1)
    
    eau_electricite = models.BooleanField(default = False, verbose_name="Eau et électricité")
    parking = models.BooleanField(default= False, verbose_name="Parking")
    internet = models.BooleanField(default= False)
    meuble = models.BooleanField(default= False)

    disponibilite = models.BooleanField(default = True)
    date_ajout = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.titre
    
    class Meta:
        verbose_name="Logement"
        verbose_name_plural="Logements"
    

class Image(models.Model):
    logement = models.ForeignKey(Logement, on_delete = models.CASCADE, related_name = "images")
    image = models.ImageField(upload_to="listings/")
    ordre = models.PositiveIntegerField(default = 1)

    def __str__(self):
        return f"Image {self.ordre} - self.logement.titre"
    
    class Meta:
        verbose_name="Image"
        verbose_name_plural="Images"