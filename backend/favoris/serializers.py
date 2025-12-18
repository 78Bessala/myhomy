from rest_framework import serializers
from .models import Favoris
from accounts.serializers import UserSerializer
from listings.serializers import LogementSerializer

class FavorisSerializer(serializers.ModelSerializer):
    logement = LogementSerializer(read_only=True)
    class Meta:
        model = Favoris
        fields= ['id','logement']

class CreateFavorisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoris
        fields = ['logement']
        