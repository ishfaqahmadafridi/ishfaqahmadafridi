"""
Analytics Views
Sales analytics, user activity analytics, and top selling products
"""

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from django.db.models import Count, Sum, F, Avg
from django.utils import timezone
from datetime import timedelta

from ..models import Order, OrderItem, UserActivity


@api_view(['GET'])
@permission_classes([IsAdminUser])
def sales_analytics(request):
    """
    Get sales analytics data over a period
    
    Query Parameters:
        - period: 'week' (7 days), 'month' (30 days), or 'year' (365 days)
        - Default: 'week'
    
    Returns:
        - Daily sales data with date, total sales amount, and order count
        - Average order value
    """
    period = request.query_params.get('period', 'week')
    
    # Determine days based on period
    if period == 'week':
        days = 7
    elif period == 'month':
        days = 30
    elif period == 'year':
        days = 365
    else:
        days = 7  # Default to week
    
    start_date = timezone.now().date() - timedelta(days=days)
    
    # Daily sales data
    daily_sales = []
    for i in range(days):
        date = start_date + timedelta(days=i)
        sales = Order.objects.filter(
            created_at__date=date
        ).aggregate(
            total=Sum('total_amount'),
            count=Count('id')
        )
        
        daily_sales.append({
            'date': date.strftime('%Y-%m-%d'),
            'sales': float(sales['total'] or 0),
            'orders': sales['count']
        })
    
    # Calculate average order value for the period
    avg_order_value = Order.objects.filter(
        created_at__date__gte=start_date
    ).aggregate(avg=Avg('total_amount'))['avg'] or 0
    
    return Response({
        'data': daily_sales,
        'period': period,
        'average_order_value': float(avg_order_value)
    })


@api_view(['GET'])
@permission_classes([IsAdminUser])
def user_analytics(request):
    """
    Get user activity analytics
    
    Query Parameters:
        - period: 'week', 'month', or 'year'
        - Default: 'week'
    
    Returns:
        - Daily login counts
        - Activity breakdown by type
        - Total unique users in period
    """
    period = request.query_params.get('period', 'week')
    
    if period == 'week':
        days = 7
    elif period == 'month':
        days = 30
    elif period == 'year':
        days = 365
    else:
        days = 7
    
    start_date = timezone.now().date() - timedelta(days=days)
    
    # Daily login data
    daily_logins = []
    for i in range(days):
        date = start_date + timedelta(days=i)
        logins = UserActivity.objects.filter(
            timestamp__date=date,
            activity_type='login'
        ).values('user').distinct().count()
        
        daily_logins.append({
            'date': date.strftime('%Y-%m-%d'),
            'logins': logins
        })
    
    # Activity breakdown
    activity_breakdown = UserActivity.objects.filter(
        timestamp__date__gte=start_date
    ).values('activity_type').annotate(
        count=Count('id')
    ).order_by('-count')
    
    # Total unique users in period
    unique_users = UserActivity.objects.filter(
        timestamp__date__gte=start_date
    ).values('user').distinct().count()
    
    return Response({
        'daily_logins': daily_logins,
        'activity_breakdown': list(activity_breakdown),
        'unique_users': unique_users,
        'period': period
    })


@api_view(['GET'])
@permission_classes([IsAdminUser])
def top_selling_products(request):
    """
    Get top selling products by quantity or revenue
    
    Query Parameters:
        - limit: Number of products to return (default: 10)
        - sort_by: 'quantity' or 'revenue' (default: 'quantity')
        - period: 'week', 'month', 'year', or 'all' (default: 'all')
    
    Returns:
        - List of top products with sales metrics
    """
    limit = int(request.query_params.get('limit', 10))
    sort_by = request.query_params.get('sort_by', 'quantity')
    period = request.query_params.get('period', 'all')
    
    # Build base queryset
    queryset = OrderItem.objects.all()
    
    # Filter by period if specified
    if period != 'all':
        if period == 'week':
            days = 7
        elif period == 'month':
            days = 30
        elif period == 'year':
            days = 365
        else:
            days = 7
        
        start_date = timezone.now().date() - timedelta(days=days)
        queryset = queryset.filter(order__created_at__date__gte=start_date)
    
    # Aggregate sales data
    top_products = queryset.values(
        'product__id',
        'product__name',
        'product__price',
        'product__stock'
    ).annotate(
        total_sold=Sum('quantity'),
        total_revenue=Sum(F('quantity') * F('price'))
    )
    
    # Sort by requested metric
    if sort_by == 'revenue':
        top_products = top_products.order_by('-total_revenue')[:limit]
    else:
        top_products = top_products.order_by('-total_sold')[:limit]
    
    return Response({
        'products': list(top_products),
        'limit': limit,
        'sort_by': sort_by,
        'period': period
    })
