from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, LoginView

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/', include(router.urls)),
    path('api/login/', LoginView.as_view(), name='login'),
]
