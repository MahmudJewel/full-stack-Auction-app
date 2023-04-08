from django.shortcuts import render
from .serializers import BiddingSerializers
from .models import Bid
from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated, 
    IsAdminUser, 
    IsAuthenticatedOrReadOnly, 
    AllowAny
)
# Create your views here.


# Customer creation, edition, deletion through viewset
class BiddingViewset(viewsets.ModelViewSet):
    serializer_class = BiddingSerializers
    queryset = Bid.objects.all()
    permission_classes = [IsAuthenticated,]

