from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminOrReadOnly(BasePermission):
    """
    Lecture pour tout le monde
    Écriture uniquement pour les administrateurs
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        #return request.user and request.user.is_staff()