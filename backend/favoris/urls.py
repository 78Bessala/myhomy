from rest_framework.routers import DefaultRouter
from .views import FavorisViewSets

router = DefaultRouter()
router.register(r'', FavorisViewSets, basename='favori')

urlpatterns = router.urls