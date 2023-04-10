# libraries
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
    AllowAny,
    BasePermission
)
# serializers
from .serializers import BiddingSerializer, ProductSerializer
# models
from .models import Bid, Product


# Create your views here.
class ProductViewset(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    # queryset = Group.objects.get(name="CUSTOMER").user_set.all()
    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny, ]
        else:
            self.permission_classes = [IsAdminUser,]
        return super(ProductViewset, self).get_permissions()

# Auction creation, edition, deletion through viewset
class BiddingViewset(viewsets.ModelViewSet):
    serializer_class = BiddingSerializer
    queryset = Bid.objects.all()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny, ]
        else:
            self.permission_classes = [IsAuthenticated, ]
        return super(BiddingViewset, self).get_permissions()


class IsBidOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.bidder == request.user

# listing bids according to user
class UserwiseBids(ListAPIView):
    serializer_class = BiddingSerializer
    def get_queryset(self):
        userid = self.kwargs['uid']
        queryset = Bid.objects.filter(bidder__id=userid)
        return queryset
