from .serializers import RegisterUserSerializer

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
    AllowAny,
    BasePermission
)
# Create your views here.


# Customer creation, edition, deletion through viewset
class UserViewset(viewsets.ModelViewSet):
    serializer_class = RegisterUserSerializer
    queryset = User.objects.all()
    # queryset = Group.objects.get(name="CUSTOMER").user_set.all()

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [AllowAny, ]
        else:
            self.permission_classes = [IsAuthenticated, IsOwnerOrAdmin]
        return super(UserViewset, self).get_permissions()


class IsOwnerOrAdmin(BasePermission):
    """Custom permission to only allow owners or admin to edit their own user information"""

    def has_object_permission(self, request, view, obj):
        """Check if the user making the request is the owner or an admin"""
        if request.user.is_staff or obj == request.user:
            return True
        return False
