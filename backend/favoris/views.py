from rest_framework import viewsets, permissions
from .models import Favoris
from .serializers import FavorisSerializer,CreateFavorisSerializer
from rest_framework.exceptions import PermissionDenied


class FavorisViewSets(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Favoris.objects.all() 
        return Favoris.objects.filter(utilisateur = user)
    
    def get_serializer_class(self):
        if self.action in ['create','read']:
            return CreateFavorisSerializer
        return FavorisSerializer
    
    def perform_create(self, serializer):
        user = self.request.user
        if not user:
            return PermissionDenied("Vous ne pouvez pas ajouter ce favori")
        serializer.save(utilisateur = user)

    def perform_destroy(self, instance):
        if instance.utilisateur != self.request.user:
            return PermissionDenied("Vous ne pouvez pas supprimer ce favori")
        instance.delete()