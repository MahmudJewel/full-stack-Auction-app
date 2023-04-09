from .serializers import RegisterUserSerializer

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
    AllowAny
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
            self.permission_classes = [IsAdminUser, ]
        return super(UserViewset, self).get_permissions()
