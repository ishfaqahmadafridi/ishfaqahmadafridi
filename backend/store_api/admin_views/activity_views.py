"""
Activity Views
User activity logging and newsletter subscription (public endpoints)
"""

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status

from ..models import UserActivity, Subscription


@api_view(['POST'])
@permission_classes([AllowAny])
def log_user_activity(request):
    """
    Log user activity for analytics
    
    Request Body:
        - activity_type: Type of activity (login, logout, view_product, add_to_cart, purchase)
        - metadata: Additional data about the activity (optional, JSON object)
    
    Returns:
        - Confirmation of logged activity
    """
    activity_type = request.data.get('activity_type')
    metadata = request.data.get('metadata', {})
    
    if not activity_type:
        return Response(
            {'error': 'activity_type is required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Validate activity type
    valid_types = ['login', 'logout', 'view_product', 'add_to_cart', 'view_cart', 'purchase', 'search', 'view_category', 'view_home', 'view_landing', 'view_signin', 'view_signup']
    if activity_type not in valid_types:
        return Response(
            {'error': f'Invalid activity_type. Valid options: {", ".join(valid_types)}'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        activity = UserActivity.objects.create(
            user=request.user if request.user.is_authenticated else None,
            activity_type=activity_type,
            ip_address=request.META.get('REMOTE_ADDR'),
            user_agent=request.META.get('HTTP_USER_AGENT', ''),
            metadata=metadata
        )
        
        return Response({'status': 'success'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {'error': f'Failed to log activity: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def subscribe_newsletter(request):
    """
    Subscribe to newsletter (public endpoint)
    
    Request Body:
        - email: Email address for subscription
    
    Returns:
        - Subscription status
        - Whether it's a new subscription or reactivation
    """
    email = request.data.get('email')
    
    if not email:
        return Response(
            {'error': 'Email is required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Validate email format (basic check)
    if '@' not in email or '.' not in email:
        return Response(
            {'error': 'Invalid email format'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        subscription, created = Subscription.objects.get_or_create(
            email=email.lower().strip(),
            defaults={'is_active': True}
        )
        
        # If subscription exists but was inactive, reactivate it
        if not created and not subscription.is_active:
            subscription.is_active = True
            subscription.unsubscribed_at = None
            subscription.save()
            
            return Response({
                'status': 'reactivated',
                'message': 'Your subscription has been reactivated',
                'email': subscription.email
            })
        
        if created:
            return Response({
                'status': 'subscribed',
                'message': 'Successfully subscribed to newsletter',
                'email': subscription.email
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            'status': 'already_subscribed',
            'message': 'This email is already subscribed',
            'email': subscription.email
        })
        
    except Exception as e:
        return Response(
            {'error': f'Subscription failed: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def unsubscribe_newsletter(request):
    """
    Unsubscribe from newsletter (public endpoint)
    
    Request Body:
        - email: Email address to unsubscribe
    
    Returns:
        - Unsubscription confirmation
    """
    email = request.data.get('email')
    
    if not email:
        return Response(
            {'error': 'Email is required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        subscription = Subscription.objects.filter(
            email=email.lower().strip(),
            is_active=True
        ).first()
        
        if subscription:
            subscription.is_active = False
            from django.utils import timezone
            subscription.unsubscribed_at = timezone.now()
            subscription.save()
            
            return Response({
                'status': 'unsubscribed',
                'message': 'Successfully unsubscribed from newsletter'
            })
        
        return Response({
            'status': 'not_found',
            'message': 'No active subscription found for this email'
        }, status=status.HTTP_404_NOT_FOUND)
        
    except Exception as e:
        return Response(
            {'error': f'Unsubscription failed: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
