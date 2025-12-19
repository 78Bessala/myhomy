from rest_framework import serializers
from accounts.serializers import UserSerializer
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    utilisateur = UserSerializer(read_only=True)

    class Meta:
        model = Contact
        fields = ['id', 'utilisateur', 'nom', 'email', 'message', 'date_envoi']


class CreateContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['nom','email','message']

    