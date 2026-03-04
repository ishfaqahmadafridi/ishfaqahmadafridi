// Import all images

// Teen Boys
import mainTeenBoys from './images/kids/teenboy(1).jfif';
import teenBoy1 from './images/kids/teenboy(2).jfif';
import teenBoy2 from './images/kids/teenboy(3).jfif';
import teenBoy3 from './images/kids/teenboy(4).jfif';
import teenBoy4 from './images/kids/teenboy(5).jfif';

// Teen Girls
import mainTeenGirls from './images/kids/teengirl(1).jfif';
import teenGirl1 from './images/kids/teengirls(2).jfif';
import teenGirl2 from './images/kids/teengirl(3).jfif';
import teenGirl3 from './images/kids/teengirls(4).jfif';
import teenGirl4 from './images/kids/teengirls(5).jfif';

// Boys Shirts
import mainBoysShirt from './images/kids/shirtboy (1).webp';
import boyShirt1 from './images/kids/shirtboy (2).webp';
import boyShirt2 from './images/kids/shirtboy (3).webp';
import boyShirt3 from './images/kids/shirtboy (4).webp';
import boyShirt4 from './images/kids/shirtboy (1).webp';

// Boys Shalwar
import mainBoysShalwar from './images/kids/shalwarboy.webp';
import boyShalwar1 from './images/kids/shalwarboy(4).webp';
import boyShalwar2 from './images/kids/shalwarboy(5).webp';
import boyShalwar3 from './images/kids/shalwarboy(6).webp';
import boyShalwar4 from './images/kids/shalwarboy.webp';

// Boys Shoes
import mainBoysShoes from './images/kids/boysshoes.jfif';
import boyShoe1 from './images/kids/boysShoes(1).jfif';
import boyShoe2 from './images/kids/boysShoes(2).jfif';
import boyShoe3 from './images/kids/boysShoes(4).jfif';
import boyShoe4 from './images/kids/boysshoes.jfif';

// Girls Clothes
import mainGirlsClothes from './images/kids/girlclothes.webp';
import girlCloth1 from './images/kids/girlClothes (1).webp';
import girlCloth2 from './images/kids/girlClothes (2).webp';
import girlCloth3 from './images/kids/girlClothes (3).webp';
import girlCloth4 from './images/kids/girlClothes (4).webp';

// Girls Shirts
import mainGirlsShirt from './images/kids/girlsShirt (1).webp';
import girlShirt1 from './images/kids/girlsShirt (2).webp';
import girlShirt2 from './images/kids/girlsShirt (3).webp';
import girlShirt3 from './images/kids/girlsShirt (4).webp';
import girlShirt4 from './images/kids/girlsShirt (1).webp';

// Girls Shoes
import mainGirlsShoes from './images/kids/girlsshoes4 (1).webp';
import girlShoe1 from './images/kids/girlsshoes4 (2).webp';
import girlShoe2 from './images/kids/girlsshoes4 (1).jpeg';
import girlShoe3 from './images/kids/girlsshoes4 (2).jpeg';
import girlShoe4 from './images/kids/girlsshoes4 (1).webp';

export const categories = [
  {
    id: 'teenboysclothes',
    name: 'Teen Boys Clothes',
    heroImage: mainTeenBoys,
    products: [
      {
        id: 1,
        name: "Teen Boys Casual Outfit TBC-001",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        sale: true,
        image: teenBoy1,
        details: {
          fitType: "Regular",
          designDetails: "Stylish casual wear for teenage boys",
          material: "100% Cotton",
          modelInfo: "Ages 13-16, Sizes M-XL"
        },
        careInstructions: "Machine wash cold, gentle cycle. Do not bleach."
      },
      {
        id: 2,
        name: "Teen Boys Sport Set TBC-002",
        price: 3800,
        originalPrice: 4750,
        discount: "20% OFF",
        sale: true,
        image: teenBoy2,
        details: {
          fitType: "Athletic",
          designDetails: "Comfortable sportswear for active teens",
          material: "Polyester Blend",
          modelInfo: "Ages 13-17, Sizes S-XL"
        },
        careInstructions: "Machine wash cold. Tumble dry low."
      },
      {
        id: 3,
        name: "Teen Boys Denim Set TBC-003",
        price: 4200,
        originalPrice: 5250,
        discount: "20% OFF",
        image: teenBoy3,
        details: {
          fitType: "Slim",
          designDetails: "Modern denim outfit with trendy cut",
          material: "Cotton Denim",
          modelInfo: "Ages 14-18, Sizes M-L"
        },
        careInstructions: "Machine wash cold inside out. Hang dry."
      },
      {
        id: 4,
        name: "Teen Boys Party Wear TBC-004",
        price: 4500,
        originalPrice: 5625,
        discount: "20% OFF",
        image: teenBoy4,
        details: {
          fitType: "Regular",
          designDetails: "Stylish party outfit for special occasions",
          material: "Cotton Blend",
          modelInfo: "Ages 13-17, Sizes S-XL"
        },
        careInstructions: "Hand wash recommended. Iron on medium heat."
      }
    ]
  },
  {
    id: 'teenboysshoes',
    name: 'Teen Boys Shoes',
    heroImage: teenBoy1,
    products: [
      {
        id: 5,
        name: "Teen Boys Sneakers TBS-001",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: boyShoe1,
        details: {
          fitType: "Athletic",
          designDetails: "Trendy sneakers for teenage boys",
          material: "Canvas and Rubber",
          modelInfo: "Sizes 7-11 Youth"
        },
        careInstructions: "Wipe clean with damp cloth. Air dry."
      },
      {
        id: 6,
        name: "Teen Boys Sport Shoes TBS-002",
        price: 3500,
        originalPrice: 4375,
        discount: "20% OFF",
        image: boyShoe2,
        details: {
          fitType: "Athletic",
          designDetails: "Performance shoes for active teens",
          material: "Mesh and Synthetic",
          modelInfo: "Sizes 6-11 Youth"
        },
        careInstructions: "Machine wash gentle. Air dry."
      },
      {
        id: 7,
        name: "Teen Boys Casual Shoes TBS-003",
        price: 3000,
        originalPrice: 3750,
        discount: "20% OFF",
        image: boyShoe3,
        details: {
          fitType: "Casual",
          designDetails: "Versatile shoes for everyday wear",
          material: "Canvas and Rubber",
          modelInfo: "Sizes 7-12 Youth"
        },
        careInstructions: "Wipe clean. Avoid soaking."
      },
      {
        id: 8,
        name: "Teen Boys Running Shoes TBS-004",
        price: 3800,
        originalPrice: 4750,
        discount: "20% OFF",
        image: boyShoe4,
        details: {
          fitType: "Performance",
          designDetails: "Lightweight running shoes with cushioning",
          material: "Breathable Mesh",
          modelInfo: "Sizes 6-11 Youth"
        },
        careInstructions: "Hand wash. Air dry only."
      }
    ]
  },
  {
    id: 'teengirlsclothes',
    name: 'Teen Girls Clothes',
    heroImage: mainTeenGirls,
    products: [
      {
        id: 9,
        name: "Teen Girls Casual Dress TGC-001",
        price: 3500,
        originalPrice: 4375,
        discount: "20% OFF",
        image: teenGirl1,
        details: {
          fitType: "Regular",
          designDetails: "Trendy casual dress for teenage girls",
          material: "Cotton Blend",
          modelInfo: "Ages 13-16, Sizes S-L"
        },
        careInstructions: "Machine wash cold. Line dry."
      },
      {
        id: 10,
        name: "Teen Girls Party Outfit TGC-002",
        price: 4200,
        originalPrice: 5250,
        discount: "20% OFF",
        image: teenGirl2,
        details: {
          fitType: "Fitted",
          designDetails: "Elegant party wear with modern design",
          material: "Polyester and Spandex",
          modelInfo: "Ages 13-17, Sizes XS-L"
        },
        careInstructions: "Hand wash recommended. Lay flat to dry."
      },
      {
        id: 11,
        name: "Teen Girls Ethnic Wear TGC-003",
        price: 3900,
        originalPrice: 4875,
        discount: "20% OFF",
        image: teenGirl3,
        details: {
          fitType: "Traditional",
          designDetails: "Beautiful ethnic outfit for festive occasions",
          material: "Cotton Silk",
          modelInfo: "Ages 14-18, Sizes S-XL"
        },
        careInstructions: "Dry clean recommended."
      },
      {
        id: 12,
        name: "Teen Girls Summer Set TGC-004",
        price: 3600,
        originalPrice: 4500,
        discount: "20% OFF",
        image: teenGirl4,
        details: {
          fitType: "Relaxed",
          designDetails: "Cool summer outfit with breathable fabric",
          material: "100% Cotton",
          modelInfo: "Ages 13-17, Sizes M-L"
        },
        careInstructions: "Machine wash cold. Tumble dry low."
      }
    ]
  },
  {
    id: 'teengirlsshoes',
    name: 'Teen Girls Shoes',
    heroImage: teenGirl1,
    products: [
      {
        id: 13,
        name: "Teen Girls Sneakers TGS-001",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: girlShoe1,
        details: {
          fitType: "Trendy",
          designDetails: "Stylish sneakers for teenage girls",
          material: "Canvas and Synthetic",
          modelInfo: "Sizes 5-9 Youth"
        },
        careInstructions: "Wipe with damp cloth. Air dry."
      },
      {
        id: 14,
        name: "Teen Girls Casual Shoes TGS-002",
        price: 2900,
        originalPrice: 3625,
        discount: "20% OFF",
        image: girlShoe2,
        details: {
          fitType: "Casual",
          designDetails: "Comfortable shoes for daily wear",
          material: "Synthetic Leather",
          modelInfo: "Sizes 5-9 Youth"
        },
        careInstructions: "Wipe clean. Keep dry."
      },
      {
        id: 15,
        name: "Teen Girls Party Shoes TGS-003",
        price: 3500,
        originalPrice: 4375,
        discount: "20% OFF",
        image: girlShoe3,
        details: {
          fitType: "Elegant",
          designDetails: "Fancy shoes for special occasions",
          material: "Patent Leather",
          modelInfo: "Sizes 4-8 Youth"
        },
        careInstructions: "Polish regularly. Store properly."
      },
      {
        id: 16,
        name: "Teen Girls Sport Shoes TGS-004",
        price: 3800,
        originalPrice: 4750,
        discount: "20% OFF",
        image: girlShoe4,
        details: {
          fitType: "Athletic",
          designDetails: "Comfortable athletic shoes with support",
          material: "Mesh and Rubber",
          modelInfo: "Sizes 5-9 Youth"
        },
        careInstructions: "Machine wash gentle. Air dry."
      }
    ]
  },
  {
    id: 'boysshirt',
    name: 'Boys Shirts',
    heroImage: mainBoysShirt,
    products: [
      {
        id: 17,
        name: "Boys Casual Shirt BS-001",
        price: 1800,
        originalPrice: 2250,
        discount: "20% OFF",
        image: boyShirt1,
        details: {
          fitType: "Regular",
          designDetails: "Comfortable casual shirt for boys",
          material: "100% Cotton",
          modelInfo: "Ages 6-12, Sizes S-L"
        },
        careInstructions: "Machine wash cold. Iron on medium heat."
      },
      {
        id: 18,
        name: "Boys Formal Shirt BS-002",
        price: 2200,
        originalPrice: 2750,
        discount: "20% OFF",
        image: boyShirt2,
        details: {
          fitType: "Slim",
          designDetails: "Smart formal shirt for special occasions",
          material: "Cotton Blend",
          modelInfo: "Ages 7-13, Sizes M-XL"
        },
        careInstructions: "Machine wash warm. Iron while damp."
      },
      {
        id: 19,
        name: "Boys Printed Shirt BS-003",
        price: 1900,
        originalPrice: 2375,
        discount: "20% OFF",
        image: boyShirt3,
        details: {
          fitType: "Regular",
          designDetails: "Fun printed shirt with vibrant colors",
          material: "Polyester Cotton",
          modelInfo: "Ages 5-11, Sizes S-L"
        },
        careInstructions: "Cold wash. Do not iron on print."
      },
      {
        id: 20,
        name: "Boys Polo Shirt BS-004",
        price: 2000,
        originalPrice: 2500,
        discount: "20% OFF",
        image: boyShirt4,
        details: {
          fitType: "Classic",
          designDetails: "Classic polo shirt for everyday wear",
          material: "Cotton Pique",
          modelInfo: "Ages 6-12, Sizes M-L"
        },
        careInstructions: "Machine wash cold. Tumble dry low."
      }
    ]
  },
  {
    id: 'boysshalwar',
    name: 'Boys Shalwar Kameez',
    heroImage: mainBoysShalwar,
    products: [
      {
        id: 21,
        name: "Boys Shalwar Kameez BSK-001",
        price: 2800,
        originalPrice: 3500,
        discount: "20% OFF",
        image: boyShalwar1,
        details: {
          fitType: "Traditional",
          designDetails: "Traditional shalwar kameez for boys",
          material: "Premium Cotton",
          modelInfo: "Ages 6-14, Sizes S-XL"
        },
        careInstructions: "Machine wash cold. Iron on medium heat."
      },
      {
        id: 22,
        name: "Boys Formal Shalwar Kameez BSK-002",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: boyShalwar2,
        details: {
          fitType: "Formal",
          designDetails: "Elegant shalwar kameez for special occasions",
          material: "Cotton Silk",
          modelInfo: "Ages 7-15, Sizes M-XL"
        },
        careInstructions: "Dry clean recommended."
      },
      {
        id: 23,
        name: "Boys Embroidered Shalwar Kameez BSK-003",
        price: 3500,
        originalPrice: 4375,
        discount: "20% OFF",
        image: boyShalwar3,
        details: {
          fitType: "Designer",
          designDetails: "Beautifully embroidered shalwar kameez",
          material: "Cotton with Embroidery",
          modelInfo: "Ages 6-14, Sizes S-L"
        },
        careInstructions: "Hand wash recommended. Air dry."
      },
      {
        id: 24,
        name: "Boys Casual Shalwar Kameez BSK-004",
        price: 2600,
        originalPrice: 3250,
        discount: "20% OFF",
        image: boyShalwar4,
        details: {
          fitType: "Regular",
          designDetails: "Comfortable daily wear shalwar kameez",
          material: "100% Cotton",
          modelInfo: "Ages 5-13, Sizes S-XL"
        },
        careInstructions: "Machine wash cold. Line dry."
      }
    ]
  },
  {
    id: 'boysshoes',
    name: 'Boys Shoes',
    heroImage: mainBoysShoes,
    products: [
      {
        id: 25,
        name: "Boys Sneakers BSH-001",
        price: 2500,
        originalPrice: 3125,
        discount: "20% OFF",
        image: boyShoe1,
        details: {
          fitType: "Athletic",
          designDetails: "Comfortable sneakers for active boys",
          material: "Canvas and Rubber",
          modelInfo: "Sizes 1-6 Youth"
        },
        careInstructions: "Wipe clean with damp cloth. Air dry."
      },
      {
        id: 26,
        name: "Boys School Shoes BSH-002",
        price: 2800,
        originalPrice: 3500,
        discount: "20% OFF",
        image: boyShoe2,
        details: {
          fitType: "Formal",
          designDetails: "Durable school shoes with lace-up design",
          material: "Synthetic Leather",
          modelInfo: "Sizes 12-5 Youth"
        },
        careInstructions: "Polish regularly. Store in dry place."
      },
      {
        id: 27,
        name: "Boys Sport Shoes BSH-003",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: boyShoe3,
        details: {
          fitType: "Athletic",
          designDetails: "Lightweight sport shoes with cushioning",
          material: "Mesh and Synthetic",
          modelInfo: "Sizes 1-6 Youth"
        },
        careInstructions: "Machine wash on gentle. Air dry."
      },
      {
        id: 28,
        name: "Boys Casual Shoes BSH-004",
        price: 2400,
        originalPrice: 3000,
        discount: "20% OFF",
        image: boyShoe4,
        details: {
          fitType: "Casual",
          designDetails: "Versatile casual shoes for everyday wear",
          material: "Canvas",
          modelInfo: "Sizes 13-5 Youth"
        },
        careInstructions: "Wipe clean. Avoid soaking in water."
      }
    ]
  },
  {
    id: 'girlsclothes',
    name: 'Girls Clothes',
    heroImage: mainGirlsClothes,
    products: [
      {
        id: 29,
        name: "Girls Party Dress GC-001",
        price: 3200,
        originalPrice: 4000,
        discount: "20% OFF",
        image: girlCloth1,
        details: {
          fitType: "Princess",
          designDetails: "Beautiful party dress with layers",
          material: "Polycotton and Net",
          modelInfo: "Ages 4-12, Sizes XS-L"
        },
        careInstructions: "Hand wash recommended. Hang to dry."
      },
      {
        id: 30,
        name: "Girls Fancy Outfit GC-002",
        price: 3800,
        originalPrice: 4750,
        discount: "20% OFF",
        image: girlCloth2,
        details: {
          fitType: "Fancy",
          designDetails: "Elegant fancy dress for special occasions",
          material: "Satin and Lace",
          modelInfo: "Ages 5-13, Sizes S-XL"
        },
        careInstructions: "Dry clean only. Handle with care."
      },
      {
        id: 31,
        name: "Girls Casual Dress GC-003",
        price: 2600,
        originalPrice: 3250,
        discount: "20% OFF",
        image: girlCloth3,
        details: {
          fitType: "Casual",
          designDetails: "Comfortable casual dress for daily wear",
          material: "100% Cotton",
          modelInfo: "Ages 4-11, Sizes S-L"
        },
        careInstructions: "Machine wash cold. Tumble dry low."
      },
      {
        id: 32,
        name: "Girls Frock GC-004",
        price: 2900,
        originalPrice: 3625,
        discount: "20% OFF",
        image: girlCloth4,
        details: {
          fitType: "A-line",
          designDetails: "Pretty frock with floral print",
          material: "Cotton Blend",
          modelInfo: "Ages 3-10, Sizes XS-M"
        },
        careInstructions: "Machine wash cold. Iron on low."
      }
    ]
  },
  {
    id: 'girlsshirt',
    name: 'Girls Shirts',
    heroImage: mainGirlsShirt,
    products: [
      {
        id: 33,
        name: "Girls Casual Shirt GS-001",
        price: 1600,
        originalPrice: 2000,
        discount: "20% OFF",
        image: girlShirt1,
        details: {
          fitType: "Regular",
          designDetails: "Comfortable casual shirt for girls",
          material: "Cotton",
          modelInfo: "Ages 5-12, Sizes S-L"
        },
        careInstructions: "Machine wash cold. Iron as needed."
      },
      {
        id: 34,
        name: "Girls Printed Top GS-002",
        price: 1800,
        originalPrice: 2250,
        discount: "20% OFF",
        image: girlShirt2,
        details: {
          fitType: "Slim",
          designDetails: "Trendy printed top with modern design",
          material: "Jersey Cotton",
          modelInfo: "Ages 6-13, Sizes M-XL"
        },
        careInstructions: "Cold wash. Do not bleach."
      },
      {
        id: 35,
        name: "Girls Summer Shirt GS-003",
        price: 1500,
        originalPrice: 1875,
        discount: "20% OFF",
        image: girlShirt3,
        details: {
          fitType: "Relaxed",
          designDetails: "Breathable summer shirt with fun design",
          material: "100% Cotton",
          modelInfo: "Ages 4-11, Sizes S-L"
        },
        careInstructions: "Machine wash cold. Tumble dry low."
      },
      {
        id: 36,
        name: "Girls Formal Shirt GS-004",
        price: 2000,
        originalPrice: 2500,
        discount: "20% OFF",
        image: girlShirt4,
        details: {
          fitType: "Classic",
          designDetails: "Smart formal shirt for school and events",
          material: "Cotton Blend",
          modelInfo: "Ages 6-14, Sizes M-XL"
        },
        careInstructions: "Machine wash warm. Iron on medium."
      }
    ]
  },
  {
    id: 'girlsshoes',
    name: 'Girls Shoes',
    heroImage: mainGirlsShoes,
    products: [
      {
        id: 37,
        name: "Girls Party Shoes GSH-001",
        price: 2200,
        originalPrice: 2750,
        discount: "20% OFF",
        image: girlShoe1,
        details: {
          fitType: "Fancy",
          designDetails: "Sparkly party shoes with straps",
          material: "Synthetic with Glitter",
          modelInfo: "Sizes 11-3 Youth"
        },
        careInstructions: "Wipe with damp cloth. Avoid water."
      },
      {
        id: 38,
        name: "Girls School Shoes GSH-002",
        price: 2400,
        originalPrice: 3000,
        discount: "20% OFF",
        image: girlShoe2,
        details: {
          fitType: "Formal",
          designDetails: "Classic school shoes with Mary Jane style",
          material: "Patent Leather",
          modelInfo: "Sizes 12-4 Youth"
        },
        careInstructions: "Polish regularly. Keep dry."
      },
      {
        id: 39,
        name: "Girls Casual Shoes GSH-003",
        price: 2000,
        originalPrice: 2500,
        discount: "20% OFF",
        image: girlShoe3,
        details: {
          fitType: "Casual",
          designDetails: "Comfortable casual shoes for daily wear",
          material: "Canvas and Rubber",
          modelInfo: "Sizes 11-3 Youth"
        },
        careInstructions: "Wipe clean. Air dry only."
      },
      {
        id: 40,
        name: "Girls Sneakers GSH-004",
        price: 2600,
        originalPrice: 3250,
        discount: "20% OFF",
        image: girlShoe4,
        details: {
          fitType: "Athletic",
          designDetails: "Trendy sneakers with cushioned sole",
          material: "Mesh and Synthetic",
          modelInfo: "Sizes 12-4 Youth"
        },
        careInstructions: "Machine wash gentle. Air dry."
      }
    ]
  }
];
