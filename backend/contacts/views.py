from rest_framework import viewsets, permissions
from django.conf import settings
from .models import Contact
from accounts.models import User
from .serializers import ContactSerializer
from notifications.models import Notification
from django.core.mail import send_mail


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
    
    def perform_create(self, serializer):
        user = self.request.user
        if user.is_authenticated:
            contact = serializer.save(utilisateur=user)
        else:
            contact = serializer.save()

        # Notification et email pour l'admin
        admin_users = User.objects.filter(is_staff = True)
        for admin in admin_users:
            Notification.objects.create(
                utilisateur = admin,
                titre = "Nouveau message de contact",
                message = f"Un nouveau message de {contact.nom} ({contact.email}).",
                lien = f"/admin/contacts/{contact.id}/change/"
            )
            send_mail(
                subject = "Nouveau message de contact",
                message = f"Vous avez reçu un nouveau message de {contact.nom} ({contact.email}):\n\n{contact.message}",
                from_email = settings.DEFAULT_FROM_EMAIL,
                recipient_list = [admin.email],
                fail_silently = True,
            )