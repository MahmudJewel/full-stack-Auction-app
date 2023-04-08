from .serializers import RegisterUserSerializer
from bidding.serializers import BiddingSerializer

from bidding.models import Bid
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
	serializer_class = BiddingSerializer
	queryset = Bid.objects.all()
	# queryset = Group.objects.get(name="CUSTOMER").user_set.all()

	def get_permissions(self):
		if self.request.method == 'GET':
			self.permission_classes = [AllowAny, ]
		else:
			self.permission_classes = [IsAdminUser, IsBidOwner]
		return super(BiddingViewset, self).get_permissions()
class IsBidOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.bidder == request.user
