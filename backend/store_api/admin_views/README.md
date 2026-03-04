# Admin Views Package

This package contains organized admin-related views for better code structure and maintainability.

## Structure

```
admin_views/
├── __init__.py              # Package initialization and exports
├── product_views.py         # Product CRUD and inventory management
├── order_views.py           # Order management and status updates
├── dashboard_views.py       # Dashboard statistics
├── analytics_views.py       # Sales, user, and product analytics
├── activity_views.py        # User activity logging and subscriptions
└── README.md               # This file
```

## Files Overview

### product_views.py
**AdminProductViewSet**
- Full CRUD operations for products
- Inventory status summary
- Low stock products endpoint
- Out of stock products endpoint
- Stock update functionality

**Endpoints:**
- `GET/POST /api/admin/products/` - List/Create products
- `GET/PUT/PATCH/DELETE /api/admin/products/{id}/` - Retrieve/Update/Delete product
- `GET /api/admin/products/inventory_status/` - Get inventory summary
- `GET /api/admin/products/low_stock_products/` - Get low stock items
- `GET /api/admin/products/out_of_stock_products/` - Get out of stock items
- `POST /api/admin/products/{id}/update_stock/` - Update product stock

### order_views.py
**AdminOrderViewSet**
- Order management and viewing
- Order status updates
- Recent orders filtering
- Status summary

**Endpoints:**
- `GET/POST /api/admin/orders/` - List/Create orders (with status filter)
- `GET/PUT/PATCH/DELETE /api/admin/orders/{id}/` - Retrieve/Update/Delete order
- `GET /api/admin/orders/recent_orders/?days=7` - Get recent orders
- `POST /api/admin/orders/{id}/update_status/` - Update order status
- `GET /api/admin/orders/status_summary/` - Get order status summary

### dashboard_views.py
**dashboard_stats**
- Comprehensive dashboard statistics
- Sales metrics (total, weekly, monthly)
- Order metrics (total, weekly, pending, processing, shipped)
- Product metrics (total, in stock, low stock, out of stock)
- User metrics (total, active, new this week)
- Subscription metrics (total, new this week)

**Endpoints:**
- `GET /api/admin/dashboard/stats/` - Get all dashboard statistics

### analytics_views.py
**sales_analytics**
- Daily sales data over a period
- Average order value
- Period options: week (7 days), month (30 days), year (365 days)

**user_analytics**
- Daily login counts
- Activity breakdown by type
- Total unique users in period
- Period options: week, month, year

**top_selling_products**
- Top products by quantity or revenue
- Filterable by period (week, month, year, all)
- Sortable by quantity or revenue
- Configurable limit

**Endpoints:**
- `GET /api/admin/analytics/sales/?period=week` - Sales analytics
- `GET /api/admin/analytics/users/?period=week` - User analytics
- `GET /api/admin/analytics/top-products/?limit=10&sort_by=quantity&period=all` - Top products

### activity_views.py
**log_user_activity** (Authenticated users)
- Log user activities for analytics
- Activity types: login, logout, view_product, add_to_cart, purchase, search
- Captures IP address and user agent
- Stores metadata JSON

**subscribe_newsletter** (Public)
- Newsletter subscription
- Email validation
- Handles reactivation of inactive subscriptions

**unsubscribe_newsletter** (Public)
- Newsletter unsubscription
- Sets subscription as inactive

**Endpoints:**
- `POST /api/activity/log/` - Log user activity (authenticated)
- `POST /api/subscribe/` - Subscribe to newsletter (public)
- `POST /api/unsubscribe/` - Unsubscribe from newsletter (public)

## Permissions

### Admin Only
- `AdminProductViewSet` - Requires `IsAdminUser`
- `AdminOrderViewSet` - Requires `IsAdminUser`
- `dashboard_stats` - Requires `IsAdminUser`
- `sales_analytics` - Requires `IsAdminUser`
- `user_analytics` - Requires `IsAdminUser`
- `top_selling_products` - Requires `IsAdminUser`

### Authenticated Users
- `log_user_activity` - Requires `IsAuthenticated`

### Public
- `subscribe_newsletter` - No authentication required
- `unsubscribe_newsletter` - No authentication required

## Usage

Import views from the package:

```python
from .admin_views import (
    AdminProductViewSet,
    AdminOrderViewSet,
    dashboard_stats,
    sales_analytics,
    user_analytics,
    top_selling_products,
    log_user_activity,
    subscribe_newsletter
)
```

## Benefits of This Structure

1. **Separation of Concerns**: Each file handles a specific domain
2. **Maintainability**: Easier to locate and modify specific functionality
3. **Scalability**: New features can be added to appropriate files
4. **Readability**: Smaller files are easier to understand
5. **Testing**: Isolated modules are easier to test
6. **Documentation**: Each file is self-documenting with clear purpose

## Future Enhancements

- Add caching for frequently accessed endpoints
- Implement rate limiting for analytics endpoints
- Add export functionality (CSV, Excel)
- Implement real-time notifications
- Add batch operations for products
- Enhance filtering and search capabilities
