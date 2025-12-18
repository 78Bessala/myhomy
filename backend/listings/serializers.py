from rest_framework import serializers
from .models import Logement, Image

class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    class Meta: 
        model = Image
        fields = ['id', 'image', 'ordre', 'logement']
        
class LogementSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Logement
        # fields = [
        #     'id','titre','type_logement','description','prix','localisation','superficie',
        #     'nombre_pieces', 'disponibilite', 'date_ajout', 'images'
        # ]
        fields = '__all__'