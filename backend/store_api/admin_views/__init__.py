"""
Admin Views Package
Organized admin-related views for better code structure
"""

from .product_views import AdminProductViewSet
from .order_views import AdminOrderViewSet
from .dashboard_views import dashboard_stats
from .analytics_views import sales_analytics, user_analytics, top_selling_products
from .activity_views import log_user_activity, subscribe_newsletter

__all__ = [
    'AdminProductViewSet',
    'AdminOrderViewSet',
    'dashboard_stats',
    'sales_analytics',
    'user_analytics',
    'top_selling_products',
    'log_user_activity',
    'subscribe_newsletter',
]
