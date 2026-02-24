// Import men's product images
import main1 from './images/imgTmain.webp';
import img1 from './images/imgT1.webp';
import img2 from './images/imgT2.webp';
import img3 from './images/imgT3.webp';
import img4 from './images/imgT4.webp';

import main2 from './images/imgTemain.webp';
import imgS1 from './images/imgTe1.webp';
import imgS2 from './images/imgTe2.webp';
import imgS3 from './images/imgTe3.webp';
import imgS4 from './images/imgTe4.webp';

import main4 from './images/imgCmain.webp';
import imgP1 from './images/imgC1.webp';
import imgP2 from './images/imgC2.webp';
import imgP3 from './images/imgC3.webp';
import imgP4 from './images/imgC4.webp';

import main5 from './images/imgSSmain.webp';
import imgD1 from './images/imgSS1.webp';
import imgD2 from './images/imgSS2.webp';
import imgD3 from './images/imgSS3.webp';
import imgD4 from './images/imgTe3.webp';

import main6 from './images/men.webp';
import imgG1 from './images/imgCos1.webp';
import imgG2 from './images/imgCos2.webp';
import imgG3 from './images/imgWa3.webp';
import imgG4 from './images/imgCh4.webp';

export const menCategories = [
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
  {
    id: 'dresses',
    name: 'Dresses',
    heroImage: main5,
    products: [
      {
        id: 13,
        name: "Floral Summer Dress DRS-001",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: imgD1,
        details: {
          fitType: "A-line",
          designDetails: "Knee-length dress with floral print",
          material: "100% Cotton",
          modelInfo: "Sizes XS-XL available"
        },
        careInstructions: "Machine wash cold. Line dry."
      },
      {
        id: 14,
        name: "Bodycon Party Dress DRS-002",
        price: 3800,
        originalPrice: 4750,
        discount: "20% OFF",
        image: imgD2,
        details: {
          fitType: "Bodycon",
          designDetails: "Sleeveless dress with ruched details",
          material: "95% Polyester, 5% Spandex",
          modelInfo: "Sizes XS-L available"
        },
        careInstructions: "Hand wash recommended. Lay flat to dry."
      },
      {
        id: 15,
        name: "Maxi Evening Dress DRS-003",
        price: 4500,
        originalPrice: 5625,
        discount: "20% OFF",
        image: imgD3,
        details: {
          fitType: "Flow",
          designDetails: "Floor-length dress with slit",
          material: "Chiffon and Polyester",
          modelInfo: "Sizes S-XL available"
        },
        careInstructions: "Dry clean only."
      },
      {
        id: 16,
        name: "Shirt Dress DRS-004",
        price: 2900,
        originalPrice: 3625,
        discount: "20% OFF",
        image: imgD4,
        details: {
          fitType: "Oversized",
          designDetails: "Button-down dress with belt",
          material: "Linen and Cotton",
          modelInfo: "Sizes S-L available"
        },
        careInstructions: "Machine wash cold. Iron on low heat."
      }
    ]
  },
  {
    id: 'glasses',
    name: 'Glasses',
    heroImage: main6,
    products: [
      {
        id: 17,
        name: "Aviator Sunglasses GLS-001",
        price: 1800,
        originalPrice: 2250,
        discount: "20% OFF",
        image: imgG1,
        details: {
          fitType: "Universal",
          designDetails: "Classic metal frame with UV protection",
          material: "Metal and glass lenses",
          modelInfo: "One size fits most"
        },
        careInstructions: "Clean with microfiber cloth. Store in case."
      },
      {
        id: 18,
        name: "Round Frame Glasses GLS-002",
        price: 1600,
        originalPrice: 2000,
        discount: "20% OFF",
        image: imgG2,
        details: {
          fitType: "Narrow",
          designDetails: "Vintage-inspired round frames",
          material: "Acetate",
          modelInfo: "Available in narrow and regular fit"
        },
        careInstructions: "Rinse under water. Dry with soft cloth."
      },
      {
        id: 19,
        name: "Cat-Eye Sunglasses GLS-003",
        price: 2000,
        originalPrice: 2500,
        discount: "20% OFF",
        image: imgG3,
        details: {
          fitType: "Wide",
          designDetails: "Feminine cat-eye shape with gradient lenses",
          material: "Acetate and polycarbonate",
          modelInfo: "Available in two sizes"
        },
        careInstructions: "Avoid leaving in hot cars. Store properly."
      },
      {
        id: 20,
        name: "Rectangular Reading Glasses GLS-004",
        price: 1500,
        originalPrice: 1875,
        discount: "20% OFF",
        image: imgG4,
        details: {
          fitType: "Regular",
          designDetails: "Thin metal frames with blue light filter",
          material: "Stainless steel",
          modelInfo: "Available in various prescriptions"
        },
        careInstructions: "Use both hands to put on/take off."
      }
    ]
  }
];
