from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Product, Order, OrderItem, UserActivity, Subscription, DailySales

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user

class ProductSerializer(serializers.ModelSerializer):
    stock_status = serializers.ReadOnlyField()
    is_in_stock = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    
    class Meta:
        model = Category
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    total_price = serializers.ReadOnlyField()
    
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    user_name = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = Order
        fields = '__all__'

class UserActivitySerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username', read_only=True, allow_null=True)
    
    class Meta:
        model = UserActivity
        fields = '__all__'

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'

class DailySalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailySales
        fields = '__all__'
