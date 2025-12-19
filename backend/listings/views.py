from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from datetime import datetime
from .models import Logement, Image
from .serializers import LogementSerializer, ImageSerializer
from .permissions import IsAdminOrReadOnly
from reservation.models import Reservation

class LogementViewSet(viewsets.ModelViewSet):
    queryset = Logement.objects.all()
    serializer_class = LogementSerializer
    permission_classes = [IsAdminOrReadOnly]

    # filtres
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['type_logement', 'ville','quartier', 'prix']
    search_fields = ['titre', 'description', 'ville','quartier']
    ordering_fields = ['prix', 'date_ajout']

    def get_queryset(self):
        queryset = super().get_queryset()
        max_price = self.request.query_params.get("max_price")
        ville = self.request.query_params.get("ville")

        if max_price:
            try:
                max_price = float(max_price)
                queryset = queryset.filter(prix__lte=max_price)
            except ValueError:
                pass
        if ville:
            ville = ville.lower()
            try:
                max_price = float(ville)
                queryset = queryset.filter(ville=ville)
            except ValueError:
                pass


        return queryset

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.IsAdminUser]

class CheckAvailabilityAPIView(APIView):
    def get(self,resquest, pk):
        logement = get_object_or_404(Logement, pk=pk)
        start_str = resquest.query_params.get("start")
        end_str = resquest.query_params.get("end")

        if not start_str or not end_str:
            return Response({'error':"start et end requis"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            start_date = datetime.strptime(start_str, "%Y-%m-%d").date()
            end_date = datetime.strptime(end_str, "%Y-%m-%d").date()
        except ValueError:
            return Response({"error":"Format de date invalide"}, status=status.HTTP_400_BAD_REQUEST)
        
        conflict = Reservation.objects.filter(
            logement = logement,
            status="confirmee",
            date_debut__lte=end_date,
            date_fin__gte =start_date,
        ).exists()

        return Response({"available":not conflict})
