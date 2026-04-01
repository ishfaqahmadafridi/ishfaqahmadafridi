/**
 * Women Products Data
 * Contains all women's category products with images and details
 */

// Import all images
// Unstitched imports
import mainUnstitched from './images/women-unstitched/download.jfif';
import imgU1 from './images/women-unstitched/download (1).jfif';
import imgU2 from './images/women-unstitched/download (2).jfif';
import imgU3 from './images/women-unstitched/download (3).jfif';
import imgU4 from './images/women-unstitched/images (1).jfif';
import imgU5 from './images/women-unstitched/images (2).jfif';
import imgU6 from './images/women-unstitched/images (3).jfif';

// Kurti/Shirts imports
import main1 from './images/women-shirts/main1.webp';
import img1 from './images/women-shirts/img1.webp';
import img2 from './images/women-shirts/img2.webp';
import img3 from './images/women-shirts/img3.webp';
import img4 from './images/women-shirts/img4.webp';

// Shoes imports
import mainHeels from './images/women-shoes/heels.jpg';
import imgH1 from './images/women-shoes/HEELS(1).jfif';
import imgH2 from './images/women-shoes/HEELS  (2).jfif';
import imgH3 from './images/women-shoes/HEELS  (3).jfif';
import imgH4 from './images/women-shoes/HEELS  (4).jfif';

import mainFlats from './images/women-shoes/flats.jpg';
import imgF1 from './images/women-shoes/FLATS1).webp';
import imgF2 from './images/women-shoes/FLATS (2).webp';
import imgF3 from './images/women-shoes/FLATS (3).webp';
import imgF4 from './images/women-shoes/flets(2).jfif';

import mainSneakers from './images/women-shoes/sneakers.jpg';
import imgSn1 from './images/women-shoes/SNEAKERS (1).jfif';
import imgSn2 from './images/women-shoes/SNEAKERS (3).jfif';
import imgSn3 from './images/women-shoes/SNEAKERS (5).jfif';
import imgSn4 from './images/women-shoes/SNEAKERS (6).jfif';

import mainSandals from './images/women-shoes/khussa.jpg';
import imgSa1 from './images/women-shoes/khussa(1).jfif';
import imgSa2 from './images/women-shoes/download.jfif';
import imgSa3 from './images/women-shoes/SNEAKERS (7).jfif';
import imgSa4 from './images/women-shoes/SNEAKERS  (1).jfif';

import main4 from './images/women-pants/main4.webp';
import imgP1 from './images/women-pants/imgP1.webp';
import imgP2 from './images/women-pants/imgP2.webp';
import imgP3 from './images/women-pants/imgP3.webp';
import imgP4 from './images/women-pants/imgP4.webp';

import main5 from './images/women-dresses/main5.webp';
import imgD1 from './images/women-dresses/imgD1.webp';
import imgD2 from './images/women-dresses/imgD2.webp';
import imgD3 from './images/women-dresses/imgD3.webp';
import imgD4 from './images/women-dresses/imgD3.webp';

import main6 from './images/glasses/main6.webp';
import imgG1 from './images/glasses/imgG1.webp';
import imgG2 from './images/glasses/imgG2.webp';
import imgG3 from './images/glasses/imgG3.webp';
import imgG4 from './images/glasses/imgG4.webp';

export const womenCategories = [
  {
    id: 'unstitched',
    name: 'Unstitched',
    heroImage: mainUnstitched,
    products: [
      {
        id: 101,
        name: "Unstitched Lawn Suit UNS-001",
        price: 3500,
        originalPrice: 4500,
        discount: "22% OFF",
        sale: true,
        image: imgU1,
        details: {
          fitType: "Unstitched",
          designDetails: "3-piece lawn suit with embroidered neckline",
          material: "100% Cotton Lawn",
          modelInfo: "Unstitched - 3 meters"
        },
        careInstructions: "Machine wash cold. Iron on medium heat."
      },
      {
        id: 102,
        name: "Premium Lawn Collection UNS-002",
        price: 4200,
        originalPrice: 5600,
        discount: "25% OFF",
        sale: true,
        image: imgU2,
        details: {
          fitType: "Unstitched",
          designDetails: "Designer printed lawn with embroidered panels",
          material: "Premium Cotton Lawn",
          modelInfo: "Unstitched - 3 meters"
        },
        careInstructions: "Dry clean recommended for first wash."
      },
      {
        id: 103,
        name: "Floral Print Lawn UNS-003",
        price: 3800,
        originalPrice: 4800,
        discount: "21% OFF",
        image: imgU3,
        details: {
          fitType: "Unstitched",
          designDetails: "Beautiful floral print with contrast dupatta",
          material: "Pure Cotton Lawn",
          modelInfo: "Unstitched - 3 meters"
        },
        careInstructions: "Hand wash recommended. Air dry in shade."
      },
      {
        id: 104,
        name: "Embroidered Lawn Suit UNS-004",
        price: 4500,
        originalPrice: 6000,
        discount: "25% OFF",
        image: imgU4,
        details: {
          fitType: "Unstitched",
          designDetails: "Heavily embroidered front with plain back",
          material: "Premium Lawn",
          modelInfo: "Unstitched - 3 meters"
        },
        careInstructions: "Dry clean only to preserve embroidery."
      },
      {
        id: 105,
        name: "Digital Print Collection UNS-005",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: imgU5,
        details: {
          fitType: "Unstitched",
          designDetails: "Modern digital print with plain trouser",
          material: "Cotton Lawn",
          modelInfo: "Unstitched - 3 meters"
        },
        careInstructions: "Machine wash cold with similar colors."
      },
      {
        id: 106,
        name: "Traditional Lawn Suit UNS-006",
        price: 3900,
        originalPrice: 4900,
        discount: "20% OFF",
        image: imgU6,
        details: {
          fitType: "Unstitched",
          designDetails: "Classic design with traditional motifs",
          material: "Pure Cotton Lawn",
          modelInfo: "Unstitched - 3 meters"
        },
        careInstructions: "Hand wash in cold water. Iron while damp."
      }
    ]
  },
  {
    id: 'shirts',
    name: 'Kurti',
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
    id: 'heels',
    name: 'Heels',
    heroImage: mainHeels,
    products: [
      {
        id: 201,
        name: "Stiletto High Heels HEL-001",
        price: 4500,
        originalPrice: 6000,
        discount: "25% OFF",
        image: imgH1,
        details: {
          fitType: "Regular",
          designDetails: "Classic stiletto heels with pointed toe",
          material: "Faux Leather",
          modelInfo: "EU 36-41 available"
        },
        careInstructions: "Wipe clean with soft cloth. Store in dust bag."
      },
      {
        id: 202,
        name: "Block Heel Pumps HEL-002",
        price: 3800,
        originalPrice: 4800,
        discount: "21% OFF",
        image: imgH2,
        details: {
          fitType: "Comfortable",
          designDetails: "Stable block heels for all-day wear",
          material: "Synthetic Patent",
          modelInfo: "EU 35-40 available"
        },
        careInstructions: "Polish regularly. Avoid water exposure."
      },
      {
        id: 203,
        name: "Strappy Sandal Heels HEL-003",
        price: 5200,
        originalPrice: 6500,
        discount: "20% OFF",
        image: imgH3,
        details: {
          fitType: "Slim",
          designDetails: "Elegant strappy design with ankle support",
          material: "Premium Leather",
          modelInfo: "EU 36-42 available"
        },
        careInstructions: "Use leather conditioner. Store properly."
      },
      {
        id: 204,
        name: "Platform Heels HEL-004",
        price: 4200,
        originalPrice: 5600,
        discount: "25% OFF",
        image: imgH4,
        details: {
          fitType: "Platform",
          designDetails: "Trendy platform heels with extra height",
          material: "Suede Finish",
          modelInfo: "EU 37-41 available"
        },
        careInstructions: "Brush suede regularly. Avoid moisture."
      }
    ]
  },
  {
    id: 'flats',
    name: 'Flats',
    heroImage: mainFlats,
    products: [
      {
        id: 301,
        name: "Ballet Flats FLA-001",
        price: 2500,
        originalPrice: 3200,
        discount: "22% OFF",
        image: imgF1,
        details: {
          fitType: "Comfortable",
          designDetails: "Classic ballet flats with bow detail",
          material: "Soft Faux Leather",
          modelInfo: "EU 36-41 available"
        },
        careInstructions: "Wipe with damp cloth. Air dry."
      },
      {
        id: 302,
        name: "Pointed Toe Flats FLA-002",
        price: 2800,
        originalPrice: 3500,
        discount: "20% OFF",
        image: imgF2,
        details: {
          fitType: "Slim",
          designDetails: "Sleek pointed toe design for formal look",
          material: "Patent Leather",
          modelInfo: "EU 35-40 available"
        },
        careInstructions: "Polish regularly. Store in shoe tree."
      },
      {
        id: 303,
        name: "Embellished Flats FLA-003",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: imgF3,
        details: {
          fitType: "Regular",
          designDetails: "Sparkling embellishments for special occasions",
          material: "Satin with Crystals",
          modelInfo: "EU 36-42 available"
        },
        careInstructions: "Handle with care. Dry clean only."
      },
      {
        id: 304,
        name: "Loafer Flats FLA-004",
        price: 2600,
        originalPrice: 3250,
        discount: "20% OFF",
        image: imgF4,
        details: {
          fitType: "Wide",
          designDetails: "Casual loafers with metallic accent",
          material: "Genuine Leather",
          modelInfo: "EU 37-42 available"
        },
        careInstructions: "Use leather cream. Polish monthly."
      }
    ]
  },
  {
    id: 'sneakers',
    name: 'Sneakers',
    heroImage: mainSneakers,
    products: [
      {
        id: 401,
        name: "Classic White Sneakers SNE-001",
        price: 3500,
        originalPrice: 5000,
        discount: "30% OFF",
        image: imgSn1,
        details: {
          fitType: "Regular",
          designDetails: "Versatile white sneakers for everyday wear",
          material: "Canvas and Rubber",
          modelInfo: "EU 36-43 available"
        },
        careInstructions: "Machine washable. Air dry only."
      },
      {
        id: 402,
        name: "Running Sneakers SNE-002",
        price: 4200,
        originalPrice: 6000,
        discount: "30% OFF",
        image: imgSn2,
        details: {
          fitType: "Athletic",
          designDetails: "Performance sneakers with cushioned sole",
          material: "Mesh and Synthetic",
          modelInfo: "EU 36-44 available"
        },
        careInstructions: "Wipe clean after use. Air dry."
      },
      {
        id: 403,
        name: "Platform Sneakers SNE-003",
        price: 3800,
        originalPrice: 4750,
        discount: "20% OFF",
        image: imgSn3,
        details: {
          fitType: "Platform",
          designDetails: "Trendy platform sneakers with extra height",
          material: "Leather and Suede",
          modelInfo: "EU 35-41 available"
        },
        careInstructions: "Spot clean only. Avoid water."
      },
      {
        id: 404,
        name: "High-Top Sneakers SNE-004",
        price: 4500,
        originalPrice: 5625,
        discount: "20% OFF",
        image: imgSn4,
        details: {
          fitType: "High-Top",
          designDetails: "Stylish high-top design with ankle support",
          material: "Canvas and Rubber",
          modelInfo: "EU 36-42 available"
        },
        careInstructions: "Hand wash recommended. Air dry."
      }
    ]
  },
  {
    id: 'sandals',
    name: 'Sandals',
    heroImage: mainSandals,
    products: [
      {
        id: 501,
        name: "Strappy Sandals SAN-001",
        price: 2800,
        originalPrice: 3500,
        discount: "20% OFF",
        image: imgSa1,
        details: {
          fitType: "Regular",
          designDetails: "Comfortable strappy sandals for summer",
          material: "Faux Leather",
          modelInfo: "EU 36-41 available"
        },
        careInstructions: "Wipe clean. Store in cool place."
      },
      {
        id: 502,
        name: "Wedge Sandals SAN-002",
        price: 3500,
        originalPrice: 4375,
        discount: "20% OFF",
        image: imgSa2,
        details: {
          fitType: "Wedge",
          designDetails: "Elegant wedge sandals with platform",
          material: "Cork and Canvas",
          modelInfo: "EU 35-40 available"
        },
        careInstructions: "Avoid water. Spot clean only."
      },
      {
        id: 503,
        name: "Flat Sandals SAN-003",
        price: 2200,
        originalPrice: 2750,
        discount: "20% OFF",
        image: imgSa3,
        details: {
          fitType: "Flat",
          designDetails: "Casual flat sandals with buckle detail",
          material: "Synthetic Leather",
          modelInfo: "EU 36-42 available"
        },
        careInstructions: "Wipe clean with damp cloth."
      },
      {
        id: 504,
        name: "Gladiator Sandals SAN-004",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: imgSa4,
        details: {
          fitType: "Gladiator",
          designDetails: "Trendy gladiator style with multiple straps",
          material: "Vegan Leather",
          modelInfo: "EU 37-41 available"
        },
        careInstructions: "Keep away from heat. Clean regularly."
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
