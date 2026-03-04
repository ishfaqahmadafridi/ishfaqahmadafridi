from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
