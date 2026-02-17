import React from 'react';
import '../styles/ProductGrid.css';

// Import all images
import main1 from '../assets/images/imgmainMk.webp';
import img1 from '../assets/images/imgMk1.webp';
import img2 from '../assets/images/imgMk2.webp';
import img3 from '../assets/images/imgMk3.webp';
import img4 from '../assets/images/imgMk4.webp';

import main2 from '../assets/images/imgmainMk2.webp';
import imgS1 from '../assets/images/imgMk5.webp';
import imgS2 from '../assets/images/imgMk6.webp';
import imgS3 from '../assets/images/imgMk7.webp';
import imgS4 from '../assets/images/imgMk8.webp';

import main4 from '../assets/images/imgmainMk3.webp';
import imgP1 from '../assets/images/imgMK9.webp';
import imgP2 from '../assets/images/imgMk10.webp';
import imgP3 from '../assets/images/imgMk11.webp';
import imgP4 from '../assets/images/imgMk12.webp';



function CatMakeup({ setPage, setSelectedProduct }) {
  // Define all products data grouped by category
  const categories = [
    {
      id: 'shirts',
      name: 'Shirts',
      heroImage: main1,
      products: [
        {
          id: 1,
          name: "Poly Combric Printed Shirt USTK-285",
          price: 2514,
          originalPrice: 4190,
          discount: "40% OFF",
          image: img1,
          details: {
            fitType: "Relaxed",
            designDetails: "Striped tunic with batwing sleeves",
            material: "80% Rayon, 20% Nylon",
            modelInfo: "165.1 cm/5'5\" wears size SMALL"
          },
          careInstructions: "Machine wash cold, gentle cycle. Do not bleach. Lay flat to dry."
        },
        {
          id: 2,
          name: "Poly Combric Printed Co-Ord Set IPS",
          price: 3743,
          originalPrice: 4990,
          discount: "25% OFF",
          image: img2,
          details: {
            fitType: "Regular",
            designDetails: "Printed co-ord set with matching top and bottom",
            material: "100% Polyester",
            modelInfo: "170 cm/5'7\" wears size MEDIUM"
          },
          careInstructions: "Machine wash cold. Tumble dry low."
        },
        {
          id: 3,
          name: "Poly Combric Printed Shirt IPS-44500",
          price: 2243,
          originalPrice: 2990,
          discount: "25% OFF",
          image: img3,
          details: {
            fitType: "Slim",
            designDetails: "Printed shirt with button-down collar",
            material: "65% Polyester, 35% Cotton",
            modelInfo: "168 cm/5'6\" wears size SMALL"
          },
          careInstructions: "Machine wash warm. Do not iron print directly."
        },
        {
          id: 4,
          name: "Poly Combric Printed Shirt IPS-44400",
          price: 2243,
          originalPrice: 2990,
          discount: "25% OFF",
          image: img4,
          details: {
            fitType: "Oversized",
            designDetails: "Printed shirt with drop shoulders",
            material: "70% Polyester, 30% Viscose",
            modelInfo: "172 cm/5'8\" wears size MEDIUM"
          },
          careInstructions: "Hand wash recommended. Lay flat to dry."
        }
      ]
    },
    {
      id: 'shoes',
      name: 'Shoes',
      heroImage: main2,
      products: [
        {
          id: 5,
          name: "Casual Sneakers SHO-001",
          price: 3500,
          originalPrice: 5000,
          discount: "30% OFF",
          image: imgS1,
          details: {
            fitType: "Regular",
            designDetails: "Lace-up sneakers with cushioned soles",
            material: "100% Cotton Canvas",
            modelInfo: "EU 38-43 available"
          },
          careInstructions: "Wipe clean with damp cloth. Air dry."
        },
        {
          id: 6,
          name: "Running Shoes SHO-002",
          price: 4200,
          originalPrice: 6000,
          discount: "30% OFF",
          image: imgS2,
          details: {
            fitType: "Athletic",
            designDetails: "Lightweight running shoes with breathable mesh",
            material: "Mesh and synthetic leather",
            modelInfo: "EU 36-44 available"
          },
          careInstructions: "Machine wash cold. Air dry."
        },
        {
          id: 7,
          name: "Formal Loafers SHO-003",
          price: 3800,
          originalPrice: 4750,
          discount: "20% OFF",
          image: imgS3,
          details: {
            fitType: "Slim",
            designDetails: "Slip-on loafers with polished finish",
            material: "Genuine leather",
            modelInfo: "EU 37-42 available"
          },
          careInstructions: "Use leather conditioner. Polish regularly."
        },
        {
          id: 8,
          name: "Hiking Boots SHO-004",
          price: 5200,
          originalPrice: 6500,
          discount: "20% OFF",
          image: imgS4,
          details: {
            fitType: "Wide",
            designDetails: "Waterproof hiking boots with ankle support",
            material: "Suede and rubber",
            modelInfo: "EU 38-45 available"
          },
          careInstructions: "Brush off dirt. Use waterproofing spray."
        }
      ]
    },
    {
      id: 'pants',
      name: 'Pants',
      heroImage: main4,
      products: [
        {
          id: 9,
          name: "Slim Fit Chinos PAN-001",
          price: 2200,
          originalPrice: 2750,
          discount: "20% OFF",
          image: imgP1,
          details: {
            fitType: "Slim",
            designDetails: "Tailored chinos with front pockets",
            material: "98% Cotton, 2% Spandex",
            modelInfo: "Waist 28-38 available"
          },
          careInstructions: "Machine wash cold. Tumble dry low."
        },
        {
          id: 10,
          name: "Cargo Pants PAN-002",
          price: 2800,
          originalPrice: 3500,
          discount: "20% OFF",
          image: imgP2,
          details: {
            fitType: "Relaxed",
            designDetails: "Utility pants with multiple pockets",
            material: "100% Cotton",
            modelInfo: "Waist 30-40 available"
          },
          careInstructions: "Machine wash warm. Do not bleach."
        },
        {
          id: 11,
          name: "Wide Leg Trousers PAN-003",
          price: 2600,
          originalPrice: 3250,
          discount: "20% OFF",
          image: imgP3,
          details: {
            fitType: "Wide",
            designDetails: "Flowy trousers with high waist",
            material: "Viscose and Polyester",
            modelInfo: "Waist 26-36 available"
          },
          careInstructions: "Dry clean recommended."
        },
        {
          id: 12,
          name: "Denim Jeans PAN-004",
          price: 2900,
          originalPrice: 3625,
          discount: "20% OFF",
          image: imgP4,
          details: {
            fitType: "Regular",
            designDetails: "Classic five-pocket jeans",
            material: "100% Cotton Denim",
            modelInfo: "Waist 28-38 available"
          },
          careInstructions: "Machine wash cold inside out. Hang dry."
        }
      ]
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  const formatPrice = (price) => `PKR ${price.toLocaleString('en-IN')}`;

  return (
    <div className="product-grid">
      {categories.map((category) => (
        <section key={category.id} className="category-section">
          <div className="hero-section">
            <img 
              src={category.heroImage} 
              alt={`${category.name} Collection`} 
              className="hero-image" 
              loading="lazy"
            />
            <h2 className="category-title">{category.name}</h2>
          </div>

          <div className="products-container">
            {category.products.map((product) => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image" 
                  onClick={() => handleProductClick(product)}
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>
                    <button onClick={() => handleProductClick(product)} className="product-link">
                      {product.name}
                    </button>
                  </h3>
                  <div className="price-container">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <>
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                        <span className="discount">{product.discount}</span>
                      </>
                    )}
                  </div>
                  <p className="stock">FEW ITEMS LEFT</p>
                  <button className="add-to-cart">Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default CatMakeup;