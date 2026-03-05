from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from .serializers import UserSerializer
from .models import UserProfile
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Get or create profile
        profile, _ = UserProfile.objects.get_or_create(user=self.user)
        data['user'] = {
            'id': self.user.id,
            'username': self.user.username,
            'email': self.user.email,
            'is_staff': self.user.is_staff,
            'profile_image': profile.profile_image or '',
        }
        return data


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_profile_image(request):
    """Upload profile image (base64)"""
    image_data = request.data.get('profile_image', '')
    if not image_data:
        return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    profile, _ = UserProfile.objects.get_or_create(user=request.user)
    profile.profile_image = image_data
    profile.save()
    
    return Response({
        'message': 'Image uploaded successfully',
        'image_url': image_data
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    """Change user password"""
    current_password = request.data.get('currentPassword', '')
    new_password = request.data.get('newPassword', '')
    
    if not current_password or not new_password:
        return Response({'error': 'Current and new password are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    if not check_password(current_password, request.user.password):
        return Response({'error': 'Current password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)
    
    request.user.set_password(new_password)
    request.user.save()
    
    return Response({'message': 'Password changed successfully'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    """Get user profile"""
    profile, _ = UserProfile.objects.get_or_create(user=request.user)
    return Response({
        'id': request.user.id,
        'username': request.user.username,
        'email': request.user.email,
        'name': request.user.first_name or request.user.username,
        'is_staff': request.user.is_staff,
        'profile_image': profile.profile_image or '',
    })
