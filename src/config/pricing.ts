export interface Service {
  id: string;
  name: string;
  category: 'furniture' | 'it';
  priceMin: number;
  priceMax: number;
  description: string;
  icon: string;
}

export const services: Service[] = [
  // Furniture
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    category: 'furniture',
    priceMin: 80,
    priceMax: 120,
    description: 'Professional wardrobe assembly',
    icon: 'wardrobes' // match ServiceIcon
  },
  {
    id: 'cabinets',
    name: 'Cabinets',
    category: 'furniture',
    priceMin: 60,
    priceMax: 80,
    description: 'Expert cabinet installation',
    icon: 'cabinets'
  },
  {
    id: 'desks',
    name: 'Desks',
    category: 'furniture',
    priceMin: 50,
    priceMax: 75,
    description: 'Office and home desk assembly',
    icon: 'desks'
  },
  {
    id: 'beds',
    name: 'Beds',
    category: 'furniture',
    priceMin: 70,
    priceMax: 100,
    description: 'Bed frame assembly and setup',
    icon: 'beds'
  },
  {
    id: 'ikea',
    name: 'IKEA Furniture',
    category: 'furniture',
    priceMin: 45,
    priceMax: 150,
    description: 'IKEA flat-pack assembly specialist',
    icon: 'ikea'
  },

  // IT
  {
    id: 'pc-setup',
    name: 'PC & Laptop Setup',
    category: 'it',
    priceMin: 50,
    priceMax: 80,
    description: 'Computer setup and configuration',
    icon: 'pc-setup'
  },
  {
    id: 'printer',
    name: 'Printer Installation',
    category: 'it',
    priceMin: 40,
    priceMax: 60,
    description: 'Printer setup and configuration',
    icon: 'printer'
  },
  {
    id: 'wifi',
    name: 'WiFi & Router Setup',
    category: 'it',
    priceMin: 55,
    priceMax: 85,
    description: 'Network setup and optimization',
    icon: 'wifi'
  },
  {
    id: 'smart-tv',
    name: 'Smart TV Setup',
    category: 'it',
    priceMin: 45,
    priceMax: 70,
    description: 'Smart TV installation and setup',
    icon: 'smart-tv'
  },
  {
    id: 'software',
    name: 'Software Installation',
    category: 'it',
    priceMin: 50,
    priceMax: 90,
    description: 'Software setup and troubleshooting',
    icon: 'software'
  }
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Double Top Bunk Bed',
    location: 'London',
    image: '/images/1.DoubleTopBed.jpg'
  },
  {
    id: 2,
    title: 'IKEA Drawer Assembly',
    location: 'London',
    image: '/images/2.IkeaDrawer.jpg'
  },
  {
    id: 3,
    title: 'Kitchen Cabinet Setup',
    location: 'London',
    image: '/images/3.Kitchen_cabinet.jpg'
  },
  {
    id: 4,
    title: 'TV Bench Installation',
    location: 'London',
    image: '/images/4.TV_bench.jpg'
  },
  {
    id: 5,
    title: 'Ottoman Bed Assembly',
    location: 'London',
    image: '/images/5.OthmanBed.jpg'
  }
];