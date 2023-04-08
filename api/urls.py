from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewset

router = DefaultRouter()
# Account creation, edition, deletions
router.register('auth/user', UserViewset, basename='authuser')

urlpatterns = [
    # router
    path('', include(router.urls)),
]