from .views import LogementViewSet, ImageViewSet, CheckAvailabilityAPIView
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'logements', LogementViewSet, basename = 'logement')
router.register(r'images', ImageViewSet, basename = 'image')

urlpatterns = router.urls
urlpatterns+=[
    path("logement/<int:pk>/availability/",CheckAvailabilityAPIView.as_view(), name="logement-availability"),
]