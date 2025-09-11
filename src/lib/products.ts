export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'handbags' | 'ethnic-wear';
  subcategory: string;
  images: string[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export const products: Product[] = [
  // Handbags Collection
  {
    id: "hb-001",
    name: "Elegant Leather Sling Bag",
    description: "Premium quality leather sling bag perfect for daily use. Features adjustable strap and multiple compartments for organized storage.",
    price: 2499,
    originalPrice: 3499,
    category: "handbags",
    subcategory: "leather",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3d2eb1e-5df2-4e60-8f88-a7ce196778dc.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6547c0c5-4470-4da1-ad2b-af18d5708b46.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f8c336d-a010-43d6-b4ac-5a6e6e22bbbb.png"
    ],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["Small", "Medium"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 124,
    tags: ["premium", "leather", "adjustable", "crossbody"]
  },
  {
    id: "hb-002",
    name: "Stylish Canvas Sling Bag",
    description: "Trendy canvas sling bag with modern design. Lightweight and durable, perfect for casual outings and travel.",
    price: 1299,
    originalPrice: 1799,
    category: "handbags",
    subcategory: "canvas",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1c98909-622d-43ce-8597-9caede31d8dc.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc4de68b-ce06-49c6-b3a8-a37d9b1296db.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8fe3a249-7b57-4e31-98f6-89d891a2c07a.png"
    ],
    colors: ["Beige", "Navy", "Olive"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    tags: ["canvas", "lightweight", "casual", "travel"]
  },
  {
    id: "hb-003",
    name: "Designer Chain Sling Bag",
    description: "Luxurious designer sling bag with elegant chain strap. Perfect for evening wear and special occasions.",
    price: 3999,
    originalPrice: 5499,
    category: "handbags",
    subcategory: "designer",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/314bbc3e-57d4-40b9-897a-57a1255ca684.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2965f4ed-46fb-442f-bc77-6cee13f46a69.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a329128-0638-47cd-ae00-15b9adba61fd.png"
    ],
    colors: ["Burgundy", "Black", "Navy"],
    sizes: ["Small"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewCount: 56,
    tags: ["designer", "luxury", "chain", "evening", "quilted"]
  },
  {
    id: "hb-004",
    name: "Casual Denim Sling Bag",
    description: "Trendy denim sling bag with vintage appeal. Features metal studs and distressed finish for a cool, casual look.",
    price: 1599,
    category: "handbags",
    subcategory: "denim",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0bfb004d-ff3b-4ea7-98a5-c89351dc79f3.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ec29f9c-af23-4f3d-a609-84ed68b90ce5.png"
    ],
    colors: ["Blue", "Light Blue", "Black"],
    sizes: ["Medium"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviewCount: 73,
    tags: ["denim", "vintage", "casual", "studs", "distressed"]
  },

  // Ethnic Wear Collection - Salwar Suits
  {
    id: "ss-001",
    name: "Elegant Anarkali Suit Set",
    description: "Beautiful Anarkali suit set with intricate embroidery and flowing silhouette. Perfect for festivals and celebrations.",
    price: 4999,
    originalPrice: 6999,
    category: "ethnic-wear",
    subcategory: "anarkali",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a5731c7-b52f-4150-9b60-e7b068ddf552.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c38f6284-eb3a-4bc9-958b-bd206064a80b.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5bec7db-0d52-4b7e-a503-908138134cbe.png"
    ],
    colors: ["Royal Blue", "Maroon", "Emerald", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 156,
    tags: ["anarkali", "embroidery", "festive", "traditional", "flowing"]
  },
  {
    id: "ss-002",
    name: "Straight Cut Salwar Suit",
    description: "Classic straight cut salwar suit with modern prints. Comfortable and stylish for daily wear and office.",
    price: 2799,
    originalPrice: 3599,
    category: "ethnic-wear",
    subcategory: "straight-cut",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db8a6b48-a294-45e9-814a-196a28bd5e17.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1af58c00-bc1b-4dec-a7b8-a0a3c0561994.png"
    ],
    colors: ["Cream", "Mint", "Peach", "Lavender"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviewCount: 98,
    tags: ["straight-cut", "daily-wear", "office", "comfortable", "modern"]
  },
  {
    id: "ss-003",
    name: "Palazzo Suit Set",
    description: "Trendy palazzo suit set with contemporary design. Features wide-leg pants and stylish kurta with modern cuts.",
    price: 3499,
    originalPrice: 4299,
    category: "ethnic-wear",
    subcategory: "palazzo",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fc3e3de-7662-4987-9951-3f49d723b89b.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3f69827-21ce-4ba2-97b3-501c4feb6da9.png"
    ],
    colors: ["Coral", "Turquoise", "Yellow", "White"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 67,
    tags: ["palazzo", "contemporary", "wide-leg", "trendy", "modern"]
  },

  // Kurties Collection
  {
    id: "kt-001",
    name: "Cotton Block Print Kurta",
    description: "Handcrafted cotton kurta with traditional block prints. Breathable fabric perfect for summer wear.",
    price: 1899,
    originalPrice: 2499,
    category: "ethnic-wear",
    subcategory: "kurta",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f5abee4-0888-480c-ad41-0e0b9e413770.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d2e2279-dea2-4076-9a2a-533fd17ad6b0.png"
    ],
    colors: ["White", "Cream", "Light Blue", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
    rating: 4.4,
    reviewCount: 142,
    tags: ["cotton", "block-print", "handcrafted", "summer", "breathable"]
  },
  {
    id: "kt-002",
    name: "Embroidered Silk Kurta",
    description: "Luxurious silk kurta with delicate embroidery work. Perfect for special occasions and festivals.",
    price: 3799,
    originalPrice: 4799,
    category: "ethnic-wear",
    subcategory: "kurta",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c29f98e-914f-49a0-8e9a-4e297982b3b4.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9cbd89e0-5c02-4429-af5a-839b9056d133.png"
    ],
    colors: ["Purple", "Magenta", "Gold", "Green"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewCount: 84,
    tags: ["silk", "embroidered", "luxury", "festive", "premium"]
  },
  {
    id: "kt-003",
    name: "Casual A-Line Kurta",
    description: "Comfortable A-line kurta perfect for daily wear. Modern cut with traditional appeal.",
    price: 1599,
    category: "ethnic-wear",
    subcategory: "kurta",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af453765-3f34-44d8-bed7-f40f05b260cc.png"
    ],
    colors: ["Mint", "Coral", "Yellow", "White"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviewCount: 95,
    tags: ["a-line", "casual", "daily-wear", "comfortable", "modern"]
  }
];

// Utility functions
export const getProductsByCategory = (category: 'handbags' | 'ethnic-wear') => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterProductsByPrice = (products: Product[], minPrice: number, maxPrice: number) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

export const sortProducts = (products: Product[], sortBy: 'price-low' | 'price-high' | 'rating' | 'newest') => {
  switch (sortBy) {
    case 'price-low':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-high':
      return [...products].sort((a, b) => b.price - a.price);
    case 'rating':
      return [...products].sort((a, b) => b.rating - a.rating);
    case 'newest':
      return [...products].reverse(); // Assuming newer products are at the end
    default:
      return products;
  }
};