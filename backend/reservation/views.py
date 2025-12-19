from rest_framework import viewsets, permissions
from notifications.models import Notification
from django.core.mail import send_mail
from accounts.models import User
from django.conf import settings
from .models import Reservation
from accounts.models import User
from .serializers import ReservationSerializer, CreateReservationSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', "read"]:
            return CreateReservationSerializer
        return ReservationSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.IsAuthenticated()]
        elif self.action in ['create']:
            return [permissions.IsAuthenticated()]
        return [permissions.IsAdminUser()]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Reservation.objects.all()
        return Reservation.objects.filter(utilisateur = user)
    
    def perform_create(self, serializer):
        user = self.request.user
        reservation = serializer.save(utilisateur = user)
        
        # Notification pour l'admin
        admin_users = User.objects.filter(is_staff = True)
        for admin in admin_users:
            Notification.objects.create(
                utilisateur = admin,
                titre = "Nouvelle réservation créée",
                message = f"{user.username} a reservé {reservation.logement.titre}.",
                lien = f"/admin/reservations/{reservation.id}/change/"
            )
            send_mail(
                subject = "Nouvelle réservation créée",
                message = f"{self.request.user.username} a reservé {reservation.logement.titre}.",
                from_email = settings.DEFAULT_FROM_EMAIL,
                recipient_list = [admin.email],
                fail_silently = True,
            )