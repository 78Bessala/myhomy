from rest_framework import serializers
from .models import Reservation
from accounts.serializers import UserSerializer
from listings.serializers import LogementSerializer

class ReservationSerializer(serializers.ModelSerializer):
    utilisateur = UserSerializer(read_only=True)
    logement = LogementSerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'

class CreateReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['logement','montant', 'date_debut', 'date_fin']

    