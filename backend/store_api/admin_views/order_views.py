"""
Order Management Views
Admin operations for order management and status updates
"""

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from django.utils import timezone
from datetime import timedelta

from ..models import Order
from ..serializers import OrderSerializer


class AdminOrderViewSet(viewsets.ModelViewSet):
    """
    Admin order management
    Provides endpoints for viewing and managing customer orders
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAdminUser]

    def get_queryset(self):
        """
        Optionally filter orders by status
        """
        queryset = super().get_queryset()
        status_filter = self.request.query_params.get('status')
        
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        
        return queryset.order_by('-created_at')

    @action(detail=False, methods=['get'])
    def recent_orders(self, request):
        """
        Get recent orders within specified days
        Default: last 7 days
        """
        days = int(request.query_params.get('days', 7))
        start_date = timezone.now() - timedelta(days=days)
        orders = Order.objects.filter(created_at__gte=start_date).order_by('-created_at')
        serializer = self.get_serializer(orders, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def update_status(self, request, pk=None):
        """
        Update order status
        Valid statuses: pending, processing, shipped, delivered, cancelled
        """
        order = self.get_object()
        new_status = request.data.get('status')
        
        if not new_status:
            return Response(
                {'error': 'Status is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if new_status in dict(Order.STATUS_CHOICES):
            order.status = new_status
            order.save()
            serializer = self.get_serializer(order)
            return Response({
                'message': f'Order status updated to {new_status}',
                'order': serializer.data
            })
        
        return Response(
            {'error': f'Invalid status. Valid options: {", ".join([s[0] for s in Order.STATUS_CHOICES])}'},
            status=status.HTTP_400_BAD_REQUEST
        )

    @action(detail=False, methods=['get'])
    def status_summary(self, request):
        """
        Get summary of orders by status
        Returns count for each order status
        """
        from django.db.models import Count
        
        summary = Order.objects.values('status').annotate(count=Count('id'))
        
        return Response({
            'summary': list(summary),
            'total': Order.objects.count()
        })
