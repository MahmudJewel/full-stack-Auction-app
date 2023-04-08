# libraries 
from django.urls import path, include
from rest_framework.routers import DefaultRouter
# views 
from .views import UserViewset
from bidding.views import BiddingViewset

# router 
router = DefaultRouter()
# Account creation, edition, deletions
router.register('auth/user', UserViewset, basename='authuser')
router.register('auction', BiddingViewset, basename='auction')

urlpatterns = [
    # router
    path('', include(router.urls)),
]