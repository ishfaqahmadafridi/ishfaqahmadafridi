import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'store_backend.settings')
django.setup()

from django.contrib.auth.models import User
from store_api.models import Category, Product, Order, OrderItem

def seed():
    # Clear existing products
    Product.objects.all().delete()
    print("Cleared existing products")
    
    # Create Parent Categories
    men_parent, _ = Category.objects.get_or_create(
        slug="men",
        defaults={"name": "Men", "parent": None}
    )
    women_parent, _ = Category.objects.get_or_create(
        slug="women", 
        defaults={"name": "Women", "parent": None}
    )
    
    # Create/Get Subcategories for Women
    women_subcats = {
        "women-unstitched": "Unstitched",
        "women-kurti": "Kurti",
        "women-heels": "Heels",
        "women-flats": "Flats",
        "women-sneakers": "Sneakers",
        "women-sandals": "Sandals",
        "women-pants": "Pants",
        "women-dresses": "Dresses",
        "women-glasses": "Glasses",
    }
    for slug, name in women_subcats.items():
        Category.objects.get_or_create(
            slug=slug,
            defaults={"name": name, "parent": women_parent}
        )
    
    # Create/Get Subcategories for Men
    men_subcats = {
        "men-shirts": "Shirts",
        "men-peshawari": "Peshawari",
        "men-sandal": "Sandals",
        "men-shoes": "Shoes",
        "men-chapal": "Chapal",
        "men-kurta": "Kurta",
        "men-shalwar": "Shalwar Kameez",
        "men-sherwani": "Sherwani",
        "men-coat": "Coat",
        "men-glasses": "Glasses",
    }
    for slug, name in men_subcats.items():
        Category.objects.get_or_create(
            slug=slug,
            defaults={"name": name, "parent": men_parent}
        )
    
    # Base URL for images (served from public folder)
    BASE_IMG = "/images"
    
    # ==================== WOMEN PRODUCTS ====================
    women_products = [
        # UNSTITCHED (6 products)
        {"slug": "women-unstitched", "name": "Unstitched Lawn Suit UNS-001", "price": 3500, "original_price": 4500, "discount": 22, "stock": 15, "description": "3-piece lawn suit with embroidered neckline. Material: 100% Cotton Lawn", "image": f"{BASE_IMG}/women-unstitched/download (1).jfif"},
        {"slug": "women-unstitched", "name": "Premium Lawn Collection UNS-002", "price": 4200, "original_price": 5600, "discount": 25, "stock": 12, "description": "Designer printed lawn with embroidered panels. Material: Premium Cotton Lawn", "image": f"{BASE_IMG}/women-unstitched/download (2).jfif"},
        {"slug": "women-unstitched", "name": "Floral Print Lawn UNS-003", "price": 3800, "original_price": 4800, "discount": 21, "stock": 18, "description": "Beautiful floral print with contrast dupatta. Material: Pure Cotton Lawn", "image": f"{BASE_IMG}/women-unstitched/download (3).jfif"},
        {"slug": "women-unstitched", "name": "Embroidered Lawn Suit UNS-004", "price": 4500, "original_price": 6000, "discount": 25, "stock": 10, "description": "Heavily embroidered front with plain back. Material: Premium Lawn", "image": f"{BASE_IMG}/women-unstitched/images (1).jfif"},
        {"slug": "women-unstitched", "name": "Digital Print Collection UNS-005", "price": 3200, "original_price": 4000, "discount": 20, "stock": 20, "description": "Modern digital print with plain trouser. Material: Cotton Lawn", "image": f"{BASE_IMG}/women-unstitched/images (2).jfif"},
        {"slug": "women-unstitched", "name": "Traditional Lawn Suit UNS-006", "price": 3900, "original_price": 4900, "discount": 20, "stock": 14, "description": "Classic design with traditional motifs. Material: Pure Cotton Lawn", "image": f"{BASE_IMG}/women-unstitched/images (3).jfif"},
        
        # KURTI (4 products)
        {"slug": "women-kurti", "name": "Poly Combric Printed Shirt USTK-285", "price": 2514, "original_price": 4190, "discount": 40, "stock": 25, "description": "Striped tunic with batwing sleeves. Material: 80% Rayon, 20% Nylon", "image": f"{BASE_IMG}/women-shirts/img1.webp"},
        {"slug": "women-kurti", "name": "Poly Combric Printed Co-Ord Set IPS", "price": 3743, "original_price": 4990, "discount": 25, "stock": 18, "description": "Printed co-ord set with matching top and bottom. Material: 100% Polyester", "image": f"{BASE_IMG}/women-shirts/img2.webp"},
        {"slug": "women-kurti", "name": "Poly Combric Printed Shirt IPS-44500", "price": 2243, "original_price": 2990, "discount": 25, "stock": 22, "description": "Printed shirt with button-down collar. Material: 65% Polyester, 35% Cotton", "image": f"{BASE_IMG}/women-shirts/img3.webp"},
        {"slug": "women-kurti", "name": "Poly Combric Printed Shirt IPS-44400", "price": 2243, "original_price": 2990, "discount": 25, "stock": 20, "description": "Printed shirt with drop shoulders. Material: 70% Polyester, 30% Viscose", "image": f"{BASE_IMG}/women-shirts/img4.webp"},
        
        # HEELS (4 products)
        {"slug": "women-heels", "name": "Stiletto High Heels HEL-001", "price": 4500, "original_price": 6000, "discount": 25, "stock": 15, "description": "Classic stiletto heels with pointed toe. Material: Faux Leather", "image": f"{BASE_IMG}/women-shoes/HEELS(1).jfif"},
        {"slug": "women-heels", "name": "Block Heel Pumps HEL-002", "price": 3800, "original_price": 4800, "discount": 21, "stock": 12, "description": "Stable block heels for all-day wear. Material: Synthetic Patent", "image": f"{BASE_IMG}/women-shoes/HEELS  (2).jfif"},
        {"slug": "women-heels", "name": "Strappy Sandal Heels HEL-003", "price": 5200, "original_price": 6500, "discount": 20, "stock": 8, "description": "Elegant strappy design with ankle support. Material: Premium Leather", "image": f"{BASE_IMG}/women-shoes/HEELS  (3).jfif"},
        {"slug": "women-heels", "name": "Platform Heels HEL-004", "price": 4200, "original_price": 5600, "discount": 25, "stock": 10, "description": "Trendy platform heels with extra height. Material: Suede Finish", "image": f"{BASE_IMG}/women-shoes/HEELS  (4).jfif"},
        
        # FLATS (4 products)
        {"slug": "women-flats", "name": "Ballet Flats FLA-001", "price": 2500, "original_price": 3200, "discount": 22, "stock": 25, "description": "Classic ballet flats with bow detail. Material: Soft Faux Leather", "image": f"{BASE_IMG}/women-shoes/FLATS1).webp"},
        {"slug": "women-flats", "name": "Pointed Toe Flats FLA-002", "price": 2800, "original_price": 3500, "discount": 20, "stock": 20, "description": "Sleek pointed toe design for formal look. Material: Patent Leather", "image": f"{BASE_IMG}/women-shoes/FLATS (2).webp"},
        {"slug": "women-flats", "name": "Embellished Flats FLA-003", "price": 3200, "original_price": 4000, "discount": 20, "stock": 15, "description": "Sparkling embellishments for special occasions. Material: Satin with Crystals", "image": f"{BASE_IMG}/women-shoes/FLATS (3).webp"},
        {"slug": "women-flats", "name": "Loafer Flats FLA-004", "price": 2600, "original_price": 3250, "discount": 20, "stock": 18, "description": "Casual loafers with metallic accent. Material: Genuine Leather", "image": f"{BASE_IMG}/women-shoes/flets(2).jfif"},
        
        # SNEAKERS (4 products)
        {"slug": "women-sneakers", "name": "Classic White Sneakers SNE-001", "price": 3500, "original_price": 5000, "discount": 30, "stock": 22, "description": "Versatile white sneakers for everyday wear. Material: Canvas and Rubber", "image": f"{BASE_IMG}/women-shoes/SNEAKERS (1).jfif"},
        {"slug": "women-sneakers", "name": "Running Sneakers SNE-002", "price": 4200, "original_price": 6000, "discount": 30, "stock": 18, "description": "Performance sneakers with cushioned sole. Material: Mesh and Synthetic", "image": f"{BASE_IMG}/women-shoes/SNEAKERS (3).jfif"},
        {"slug": "women-sneakers", "name": "Platform Sneakers SNE-003", "price": 3800, "original_price": 4750, "discount": 20, "stock": 15, "description": "Trendy platform sneakers with extra height. Material: Leather and Suede", "image": f"{BASE_IMG}/women-shoes/SNEAKERS (5).jfif"},
        {"slug": "women-sneakers", "name": "High-Top Sneakers SNE-004", "price": 4500, "original_price": 5625, "discount": 20, "stock": 12, "description": "Stylish high-top design with ankle support. Material: Canvas and Rubber", "image": f"{BASE_IMG}/women-shoes/SNEAKERS (6).jfif"},
        
        # SANDALS (4 products)
        {"slug": "women-sandals", "name": "Strappy Sandals SAN-001", "price": 2800, "original_price": 3500, "discount": 20, "stock": 20, "description": "Comfortable strappy sandals for summer. Material: Faux Leather", "image": f"{BASE_IMG}/women-shoes/khussa(1).jfif"},
        {"slug": "women-sandals", "name": "Wedge Sandals SAN-002", "price": 3500, "original_price": 4375, "discount": 20, "stock": 15, "description": "Elegant wedge sandals with platform. Material: Cork and Canvas", "image": f"{BASE_IMG}/women-shoes/download.jfif"},
        {"slug": "women-sandals", "name": "Flat Sandals SAN-003", "price": 2200, "original_price": 2750, "discount": 20, "stock": 25, "description": "Casual flat sandals with buckle detail. Material: Synthetic Leather", "image": f"{BASE_IMG}/women-shoes/SNEAKERS (7).jfif"},
        {"slug": "women-sandals", "name": "Gladiator Sandals SAN-004", "price": 3200, "original_price": 4000, "discount": 20, "stock": 18, "description": "Trendy gladiator style with multiple straps. Material: Vegan Leather", "image": f"{BASE_IMG}/women-shoes/SNEAKERS  (1).jfif"},
        
        # PANTS (4 products)
        {"slug": "women-pants", "name": "Slim Fit Chinos PAN-001", "price": 2200, "original_price": 2750, "discount": 20, "stock": 28, "description": "Tailored chinos with front pockets. Material: 98% Cotton, 2% Spandex", "image": f"{BASE_IMG}/women-pants/imgP1.webp"},
        {"slug": "women-pants", "name": "Cargo Pants PAN-002", "price": 2800, "original_price": 3500, "discount": 20, "stock": 22, "description": "Utility pants with multiple pockets. Material: 100% Cotton", "image": f"{BASE_IMG}/women-pants/imgP2.webp"},
        {"slug": "women-pants", "name": "Wide Leg Trousers PAN-003", "price": 2600, "original_price": 3250, "discount": 20, "stock": 18, "description": "Flowy trousers with high waist. Material: Viscose and Polyester", "image": f"{BASE_IMG}/women-pants/imgP3.webp"},
        {"slug": "women-pants", "name": "Denim Jeans PAN-004", "price": 2900, "original_price": 3625, "discount": 20, "stock": 25, "description": "Classic five-pocket jeans. Material: 100% Cotton Denim", "image": f"{BASE_IMG}/women-pants/imgP4.webp"},
        
        # DRESSES (4 products)
        {"slug": "women-dresses", "name": "Floral Summer Dress DRS-001", "price": 3200, "original_price": 4000, "discount": 20, "stock": 20, "description": "Knee-length dress with floral print. Material: 100% Cotton", "image": f"{BASE_IMG}/women-dresses/imgD1.webp"},
        {"slug": "women-dresses", "name": "Bodycon Party Dress DRS-002", "price": 3800, "original_price": 4750, "discount": 20, "stock": 15, "description": "Sleeveless dress with ruched details. Material: 95% Polyester, 5% Spandex", "image": f"{BASE_IMG}/women-dresses/imgD2.webp"},
        {"slug": "women-dresses", "name": "Maxi Evening Dress DRS-003", "price": 4500, "original_price": 5625, "discount": 20, "stock": 10, "description": "Floor-length dress with slit. Material: Chiffon and Polyester", "image": f"{BASE_IMG}/women-dresses/imgD3.webp"},
        {"slug": "women-dresses", "name": "Shirt Dress DRS-004", "price": 2900, "original_price": 3625, "discount": 20, "stock": 18, "description": "Button-down dress with belt. Material: Linen and Cotton", "image": f"{BASE_IMG}/women-dresses/imgD3.webp"},
        
        # GLASSES (4 products)
        {"slug": "women-glasses", "name": "Aviator Sunglasses GLS-001", "price": 1800, "original_price": 2250, "discount": 20, "stock": 30, "description": "Classic metal frame with UV protection. Material: Metal and glass lenses", "image": f"{BASE_IMG}/glasses/imgG1.webp"},
        {"slug": "women-glasses", "name": "Round Frame Glasses GLS-002", "price": 1600, "original_price": 2000, "discount": 20, "stock": 35, "description": "Vintage-inspired round frames. Material: Acetate", "image": f"{BASE_IMG}/glasses/imgG2.webp"},
        {"slug": "women-glasses", "name": "Cat-Eye Sunglasses GLS-003", "price": 2000, "original_price": 2500, "discount": 20, "stock": 25, "description": "Feminine cat-eye shape with gradient lenses. Material: Acetate and polycarbonate", "image": f"{BASE_IMG}/glasses/imgG3.webp"},
        {"slug": "women-glasses", "name": "Rectangular Reading Glasses GLS-004", "price": 1500, "original_price": 1875, "discount": 20, "stock": 40, "description": "Thin metal frames with blue light filter. Material: Stainless steel", "image": f"{BASE_IMG}/glasses/imgG4.webp"},
    ]
    
    # ==================== MEN PRODUCTS ====================
    men_products = [
        # SHIRTS (4 products)
        {"slug": "men-shirts", "name": "Poly Combric Printed Shirt USTK-285", "price": 2514, "original_price": 4190, "discount": 40, "stock": 25, "description": "Striped tunic with batwing sleeves. Material: 80% Rayon, 20% Nylon", "image": f"{BASE_IMG}/men-tshirts/imgT1.webp"},
        {"slug": "men-shirts", "name": "Poly Combric Printed Co-Ord Set IPS", "price": 3743, "original_price": 4990, "discount": 25, "stock": 20, "description": "Printed co-ord set with matching top and bottom. Material: 100% Polyester", "image": f"{BASE_IMG}/men-tshirts/imgT2.webp"},
        {"slug": "men-shirts", "name": "Poly Combric Printed Shirt IPS-44500", "price": 2243, "original_price": 2990, "discount": 25, "stock": 22, "description": "Printed shirt with button-down collar. Material: 65% Polyester, 35% Cotton", "image": f"{BASE_IMG}/men-tshirts/imgT3.webp"},
        {"slug": "men-shirts", "name": "Poly Combric Printed Shirt IPS-44400", "price": 2243, "original_price": 2990, "discount": 25, "stock": 18, "description": "Printed shirt with drop shoulders. Material: 70% Polyester, 30% Viscose", "image": f"{BASE_IMG}/men-tshirts/imgT4.webp"},
        
        # PESHAWARI (4 products)
        {"slug": "men-peshawari", "name": "Traditional Peshawari Chappal PSH-001", "price": 2200, "original_price": 2750, "discount": 20, "stock": 20, "description": "Handcrafted leather chappal with classic design. Material: 100% Genuine Leather", "image": f"{BASE_IMG}/men-shoes/peshawari(1).jfif"},
        {"slug": "men-peshawari", "name": "Premium Peshawari Chappal PSH-002", "price": 2800, "original_price": 3500, "discount": 20, "stock": 15, "description": "Double-strap Peshawari with cushioned sole. Material: Pure Leather", "image": f"{BASE_IMG}/men-shoes/PESHAWARI(2).jfif"},
        {"slug": "men-peshawari", "name": "Designer Peshawari Chappal PSH-003", "price": 3200, "original_price": 4000, "discount": 20, "stock": 12, "description": "Modern Peshawari with decorative stitching. Material: Soft Leather", "image": f"{BASE_IMG}/men-shoes/peshawari(3).jfif"},
        {"slug": "men-peshawari", "name": "Classic Peshawari Chappal PSH-004", "price": 2500, "original_price": 3125, "discount": 20, "stock": 18, "description": "Authentic Peshawari with tire sole. Material: Buffalo Leather", "image": f"{BASE_IMG}/men-shoes/peshawari(4).jfif"},
        
        # SANDALS (4 products)
        {"slug": "men-sandal", "name": "Casual Sandal SND-001", "price": 1800, "original_price": 2250, "discount": 20, "stock": 25, "description": "Open-toe sandal with adjustable straps. Material: Synthetic Leather", "image": f"{BASE_IMG}/men-shoes/scandle(1).jfif"},
        {"slug": "men-sandal", "name": "Sport Sandal SND-002", "price": 2200, "original_price": 2750, "discount": 20, "stock": 22, "description": "Waterproof sport sandal with grip sole. Material: EVA and Rubber", "image": f"{BASE_IMG}/men-shoes/scandle(2).jfif"},
        {"slug": "men-sandal", "name": "Formal Sandal SND-003", "price": 2600, "original_price": 3250, "discount": 20, "stock": 18, "description": "Elegant sandal with buckle closure. Material: Genuine Leather", "image": f"{BASE_IMG}/men-shoes/scandle(3).jfif"},
        {"slug": "men-sandal", "name": "Comfort Sandal SND-004", "price": 1900, "original_price": 2375, "discount": 20, "stock": 28, "description": "Cushioned sandal with arch support. Material: Soft Foam and Fabric", "image": f"{BASE_IMG}/men-shoes/scandle(4).jfif"},
        
        # SHOES (4 products)
        {"slug": "men-shoes", "name": "Formal Shoes FSH-001", "price": 4500, "original_price": 5625, "discount": 20, "stock": 15, "description": "Polished oxford shoes with lace-up design. Material: 100% Genuine Leather", "image": f"{BASE_IMG}/men-shoes/shoes(1).jfif"},
        {"slug": "men-shoes", "name": "Dress Shoes FSH-002", "price": 5200, "original_price": 6500, "discount": 20, "stock": 12, "description": "Premium dress shoes with cap-toe design. Material: Italian Leather", "image": f"{BASE_IMG}/men-shoes/shoes(2).jfif"},
        {"slug": "men-shoes", "name": "Business Shoes FSH-003", "price": 4800, "original_price": 6000, "discount": 20, "stock": 10, "description": "Derby shoes with comfort insole. Material: Premium Leather", "image": f"{BASE_IMG}/men-shoes/shoes(3).jfif"},
        {"slug": "men-shoes", "name": "Office Shoes FSH-004", "price": 4200, "original_price": 5250, "discount": 20, "stock": 14, "description": "Slip-on dress shoes with cushioned sole. Material: Leather Upper", "image": f"{BASE_IMG}/men-shoes/shoes (4).jfif"},
        
        # CHAPAL (4 products)
        {"slug": "men-chapal", "name": "Traditional Chapal CHP-001", "price": 1500, "original_price": 1875, "discount": 20, "stock": 25, "description": "Classic handmade chapal with tire sole. Material: Leather and Rubber", "image": f"{BASE_IMG}/men-shoes/chapple(1).jfif"},
        {"slug": "men-chapal", "name": "Comfort Chapal CHP-002", "price": 1800, "original_price": 2250, "discount": 20, "stock": 22, "description": "Soft leather chapal with padded footbed. Material: Soft Leather", "image": f"{BASE_IMG}/men-shoes/chapple(2).jfif"},
        {"slug": "men-chapal", "name": "Premium Chapal CHP-003", "price": 2200, "original_price": 2750, "discount": 20, "stock": 18, "description": "Designer chapal with decorative stitching. Material: Premium Leather", "image": f"{BASE_IMG}/men-shoes/chapple(3).jfif"},
        {"slug": "men-chapal", "name": "Daily Wear Chapal CHP-004", "price": 1600, "original_price": 2000, "discount": 20, "stock": 30, "description": "Everyday chapal with durable sole. Material: Synthetic Leather", "image": f"{BASE_IMG}/men-shoes/chapple(4).jfif"},
        
        # KURTA (4 products)
        {"slug": "men-kurta", "name": "Traditional Kurta KUR-001", "price": 3200, "original_price": 4000, "discount": 20, "stock": 18, "description": "Classic kurta with embroidered neckline. Material: 100% Cotton", "image": f"{BASE_IMG}/men-ethnic/kurta(1).jfif"},
        {"slug": "men-kurta", "name": "Designer Kurta KUR-002", "price": 3800, "original_price": 4750, "discount": 20, "stock": 15, "description": "Modern cut with side pockets. Material: Cotton Blend", "image": f"{BASE_IMG}/men-ethnic/kurta(2).jfif"},
        {"slug": "men-kurta", "name": "Printed Kurta KUR-003", "price": 2900, "original_price": 3625, "discount": 20, "stock": 20, "description": "Block print design with contrast buttons. Material: Pure Cotton", "image": f"{BASE_IMG}/men-ethnic/kurta(3).jfif"},
        {"slug": "men-kurta", "name": "Embroidered Kurta KUR-004", "price": 4200, "original_price": 5250, "discount": 20, "stock": 12, "description": "Heavy embroidery on front panel. Material: Cotton Silk", "image": f"{BASE_IMG}/men-ethnic/kurta(4).jfif"},
        
        # SHALWAR KAMEEZ (4 products)
        {"slug": "men-shalwar", "name": "Classic Shalwar Kameez SHK-001", "price": 4500, "original_price": 5625, "discount": 20, "stock": 15, "description": "3-piece set with dupatta. Material: Premium Cotton", "image": f"{BASE_IMG}/men-ethnic/shalwar(1).jfif"},
        {"slug": "men-shalwar", "name": "Formal Shalwar Kameez SHK-002", "price": 5200, "original_price": 6500, "discount": 20, "stock": 12, "description": "Embroidered collar and cuffs. Material: Cotton Silk Blend", "image": f"{BASE_IMG}/men-ethnic/shalwar(2).jfif"},
        {"slug": "men-shalwar", "name": "Printed Shalwar Kameez SHK-003", "price": 3800, "original_price": 4750, "discount": 20, "stock": 18, "description": "Contemporary print with solid shalwar. Material: 100% Cotton", "image": f"{BASE_IMG}/men-ethnic/shalwar(3).jfif"},
        {"slug": "men-shalwar", "name": "Premium Shalwar Kameez SHK-004", "price": 6200, "original_price": 7750, "discount": 20, "stock": 10, "description": "Intricate embroidery with mirror work. Material: Silk Cotton", "image": f"{BASE_IMG}/men-ethnic/shalwar(4).jfif"},
        
        # SHERWANI (4 products)
        {"slug": "men-sherwani", "name": "Wedding Sherwani SHW-001", "price": 12000, "original_price": 15000, "discount": 20, "stock": 5, "description": "Heavily embroidered with gold thread work. Material: Silk Brocade", "image": f"{BASE_IMG}/men-ethnic/sherwani(1).jfif"},
        {"slug": "men-sherwani", "name": "Designer Sherwani SHW-002", "price": 9500, "original_price": 11875, "discount": 20, "stock": 7, "description": "Contemporary cut with traditional embroidery. Material: Silk Blend", "image": f"{BASE_IMG}/men-ethnic/sherwani(2).jfif"},
        {"slug": "men-sherwani", "name": "Classic Sherwani SHW-003", "price": 8200, "original_price": 10250, "discount": 20, "stock": 6, "description": "Button-down front with mandarin collar. Material: Raw Silk", "image": f"{BASE_IMG}/men-ethnic/sherwani(3).jfif"},
        {"slug": "men-sherwani", "name": "Premium Sherwani SHW-004", "price": 15000, "original_price": 18750, "discount": 20, "stock": 4, "description": "Hand-embroidered with pearl and stone work. Material: Pure Silk", "image": f"{BASE_IMG}/men-ethnic/sherwani(4).jfif"},
        
        # COAT (4 products)
        {"slug": "men-coat", "name": "Traditional Coat COT-001", "price": 5500, "original_price": 6875, "discount": 20, "stock": 10, "description": "Long ethnic coat with button closure. Material: Wool Blend", "image": f"{BASE_IMG}/men-ethnic/coat(1).jfif"},
        {"slug": "men-coat", "name": "Designer Waistcoat COT-002", "price": 3800, "original_price": 4750, "discount": 20, "stock": 15, "description": "Embroidered waistcoat for formal occasions. Material: Silk Brocade", "image": f"{BASE_IMG}/men-ethnic/coat (2).jfif"},
        {"slug": "men-coat", "name": "Prince Coat COT-003", "price": 7200, "original_price": 9000, "discount": 20, "stock": 8, "description": "Jodhpuri-style coat with embellishments. Material: Premium Silk", "image": f"{BASE_IMG}/men-ethnic/coat (7).jfif"},
        {"slug": "men-coat", "name": "Formal Coat COT-004", "price": 6500, "original_price": 8125, "discount": 20, "stock": 12, "description": "Achkan-style coat with side buttons. Material: Cotton Silk", "image": f"{BASE_IMG}/men-ethnic/coat(3).jfif"},
        
        # GLASSES (4 products)
        {"slug": "men-glasses", "name": "Aviator Sunglasses GLS-001", "price": 1800, "original_price": 2250, "discount": 20, "stock": 30, "description": "Classic metal frame with UV protection. Material: Metal and glass lenses", "image": f"{BASE_IMG}/glasses/imgCos1.webp"},
        {"slug": "men-glasses", "name": "Round Frame Glasses GLS-002", "price": 1600, "original_price": 2000, "discount": 20, "stock": 35, "description": "Vintage-inspired round frames. Material: Acetate", "image": f"{BASE_IMG}/glasses/imgCos2.webp"},
        {"slug": "men-glasses", "name": "Cat-Eye Sunglasses GLS-003", "price": 2000, "original_price": 2500, "discount": 20, "stock": 25, "description": "Stylish frame with gradient lenses. Material: Acetate and polycarbonate", "image": f"{BASE_IMG}/glasses/imgG3.webp"},
        {"slug": "men-glasses", "name": "Rectangular Reading Glasses GLS-004", "price": 1500, "original_price": 1875, "discount": 20, "stock": 40, "description": "Thin metal frames with blue light filter. Material: Stainless steel", "image": f"{BASE_IMG}/glasses/imgCh4.webp"},
    ]
    
    # Add all products to database
    all_products = women_products + men_products
    products_created = 0
    
    for p in all_products:
        try:
            category = Category.objects.get(slug=p["slug"])
            product = Product.objects.create(
                category=category,
                name=p["name"],
                price=p["price"],
                original_price=p.get("original_price"),
                discount=p.get("discount", 0),
                image=p["image"],
                description=p["description"],
                stock=p.get("stock", 10)
            )
            products_created += 1
        except Category.DoesNotExist:
            print(f"Category not found: {p['slug']}")
        except Exception as e:
            print(f"Error creating product {p['name']}: {e}")
    
    print(f"Created {products_created} products from assets data")
    print(f"\nTotal Products in Database: {Product.objects.count()}")
    
    # Create sample orders
    admin_user = User.objects.filter(is_superuser=True).first()
    if admin_user:
        Order.objects.all().delete()
        statuses = ['pending', 'processing', 'shipped', 'delivered']
        products = list(Product.objects.all())
        
        for i in range(15):
            order = Order.objects.create(
                user=admin_user,
                order_number=f"ORD-2026-{1000+i}",
                total_amount=random.randint(2000, 25000),
                status=random.choice(statuses),
                shipping_address="123 Main Street, Islamabad, Pakistan"
            )
            # Add items to order
            if products:
                for _ in range(random.randint(1, 4)):
                    product = random.choice(products)
                    OrderItem.objects.create(
                        order=order,
                        product=product,
                        quantity=random.randint(1, 3),
                        price=product.price,
                        size="M"
                    )
        print(f"Created {Order.objects.count()} sample orders")

if __name__ == '__main__':
    seed()
