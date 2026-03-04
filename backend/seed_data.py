import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'store_backend.settings')
django.setup()

from store_api.models import Category, Product

def seed():
    # Create Categories
    women_cat, _ = Category.objects.get_or_create(name="Women's Collection", slug="women-category")
    men_cat, _ = Category.objects.get_or_create(name="Men's Collection", slug="men")
    fragrance_cat, _ = Category.objects.get_or_create(name="Fragrances", slug="fragrance")
    skincare_cat, _ = Category.objects.get_or_create(name="Skincare", slug="skincare")
    makeup_cat, _ = Category.objects.get_or_create(name="Makeup", slug="makeup")

    # Women's products
    women_products = [
        {"name": "Floral Summer Dress", "price": 2500, "original_price": 3500, "discount": 28, "description": "Beautiful summer dress"},
        {"name": "Elegant Evening Gown", "price": 4500, "original_price": 6000, "discount": 25, "description": "Perfect for special occasions"},
        {"name": "Casual Denim Jacket", "price": 3200, "description": "Versatile denim jacket"},
        {"name": "Silk Blouse", "price": 2800, "description": "Premium silk fabric"},
    ]
    for p in women_products:
        Product.objects.get_or_create(
            category=women_cat, name=p["name"],
            defaults={"price": p["price"], "original_price": p.get("original_price"), 
                     "discount": p.get("discount", 0), "image": "https://placehold.co/400x600",
                     "description": p["description"]}
        )

    # Men's products
    men_products = [
        {"name": "Cotton Casual Shirt", "price": 1800, "description": "Premium cotton shirt"},
        {"name": "Formal Dress Shirt", "price": 2200, "description": "Perfect for office"},
        {"name": "Denim Jeans", "price": 3500, "description": "Classic fit jeans"},
        {"name": "Leather Jacket", "price": 8500, "description": "Genuine leather"},
    ]
    for p in men_products:
        Product.objects.get_or_create(
            category=men_cat, name=p["name"],
            defaults={"price": p["price"], "image": "https://placehold.co/400x600",
                     "description": p["description"]}
        )

    # Fragrance products
    fragrance_products = [
        {"name": "Rose Parfum", "price": 4500, "description": "Elegant floral scent"},
        {"name": "Oud Intense", "price": 6500, "description": "Rich oriental fragrance"},
        {"name": "Fresh Citrus EDT", "price": 3200, "description": "Light and refreshing"},
    ]
    for p in fragrance_products:
        Product.objects.get_or_create(
            category=fragrance_cat, name=p["name"],
            defaults={"price": p["price"], "image": "https://placehold.co/400x400",
                     "description": p["description"]}
        )

    # Skincare products
    skincare_products = [
        {"name": "Hydrating Face Cream", "price": 1200, "description": "Deep hydration for all skin types"},
        {"name": "Vitamin C Serum", "price": 2500, "description": "Brightening serum"},
        {"name": "Night Repair Cream", "price": 3200, "description": "Repairs while you sleep"},
    ]
    for p in skincare_products:
        Product.objects.get_or_create(
            category=skincare_cat, name=p["name"],
            defaults={"price": p["price"], "image": "https://placehold.co/400x400",
                     "description": p["description"]}
        )

    # Makeup products
    makeup_products = [
        {"name": "Matte Liquid Lipstick", "price": 850, "description": "Long-lasting matte finish"},
        {"name": "HD Foundation", "price": 1800, "description": "Flawless coverage"},
        {"name": "Eyeshadow Palette", "price": 2200, "description": "12 stunning shades"},
    ]
    for p in makeup_products:
        Product.objects.get_or_create(
            category=makeup_cat, name=p["name"],
            defaults={"price": p["price"], "image": "https://placehold.co/400x400",
                     "description": p["description"]}
        )

    print("Database seeded successfully with all categories!")
    print(f"Women: {women_cat.products.count()} products")
    print(f"Men: {men_cat.products.count()} products")
    print(f"Fragrances: {fragrance_cat.products.count()} products")
    print(f"Skincare: {skincare_cat.products.count()} products")
    print(f"Makeup: {makeup_cat.products.count()} products")

if __name__ == '__main__':
    seed()
