export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'chocolates' | 'pastries' | 'cookies';
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  size?: string;
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: string;
}

export const productData: Product[] = [
  {
    id: 'chocolate-dream-cake',
    name: 'Tort czekoladowy',
    category: 'cakes',
    price: 159.99,
    image: '/images/chocolate-cake.jpg',
    description: 'Bogate warstwy czekoladowe z gładkim ganache i wiórkami czekoladowymi.',
    featured: true,
    bestseller: true,
    size: 'Średnica 24cm (8-10 porcji)',
    ingredients: ['Mąka pszenna', 'Masło', 'Cukier', 'Jajka', 'Czekolada deserowa', 'Śmietana kremówka', 'Kakao'],
    allergens: ['Gluten', 'Jajka', 'Mleko'],
    nutritionalInfo: 'Wartość energetyczna: 350 kcal/100g'
  },
  {
    id: 'strawberry-delight',
    name: 'Tort truskawkowy',
    category: 'cakes',
    price: 149.99,
    image: '/images/strawberry-cake.jpg',
    description: 'Lekki biszkopt waniliowy ze świeżymi truskawkami i kremem.',
    featured: true,
    size: 'Średnica 22cm (6-8 porcji)',
    ingredients: ['Mąka pszenna', 'Masło', 'Cukier', 'Jajka', 'Świeże truskawki', 'Śmietana kremówka', 'Ekstrakt waniliowy'],
    allergens: ['Gluten', 'Jajka', 'Mleko'],
    nutritionalInfo: 'Wartość energetyczna: 320 kcal/100g'
  },
  {
    id: 'red-velvet',
    name: 'Tort Red Velvet',
    category: 'cakes',
    price: 169.99,
    image: '/images/red-velvet-cake.jpg',
    description: 'Klasyczny tort Red Velvet z kremem serowym.',
    bestseller: true
  },
  {
    id: 'carrot-cake',
    name: 'Ciasto marchewkowe',
    category: 'cakes',
    price: 129.99,
    image: '/images/carrot-cake.jpg',
    description: 'Soczyste ciasto marchewkowe z orzechami włoskimi i kremem serowym.'
  },
  {
    id: 'lemon-drizzle',
    name: 'Ciasto cytrynowe',
    category: 'cakes',
    price: 119.99,
    image: '/images/lemon-cake.jpg',
    description: 'Wyraziste ciasto cytrynowe z polewą cytrynową.'
  },
  {
    id: 'assorted-macarons',
    name: 'Makaroniki',
    category: 'pastries',
    price: 89.99,
    image: '/images/macarons.jpg',
    description: 'Delikatne ciasteczka migdałowe z różnymi nadzieniami w pięknych kolorach.',
    featured: true
  },
  {
    id: 'gourmet-cupcakes',
    name: 'Babeczki',
    category: 'pastries',
    price: 69.99,
    image: '/images/cupcakes.jpg',
    description: 'Soczyste babeczki z kremem maślanym i dekoracyjnymi dodatkami.',
    featured: true
  },
  {
    id: 'chocolate-truffles',
    name: 'Trufle czekoladowe',
    category: 'chocolates',
    price: 79.99,
    image: '/images/chocolate-truffles.jpg',
    description: 'Ręcznie robione trufle czekoladowe z różnymi nadzieniami.',
    bestseller: true,
    size: 'Opakowanie 12 sztuk',
    ingredients: ['Czekolada deserowa', 'Śmietana kremówka', 'Masło', 'Kakao', 'Likier pomarańczowy', 'Orzechy laskowe'],
    allergens: ['Mleko', 'Orzechy'],
    nutritionalInfo: 'Wartość energetyczna: 450 kcal/100g'
  },
  {
    id: 'chocolate-covered-strawberries',
    name: 'Truskawki w czekoladzie',
    category: 'chocolates',
    price: 89.99,
    image: '/images/chocolate-strawberries.jpg',
    description: 'Świeże truskawki zanurzone w wysokiej jakości czekoladzie.',
    new: true
  },
  {
    id: 'chocolate-bark',
    name: 'Tabliczki czekoladowe',
    category: 'chocolates',
    price: 59.99,
    image: '/images/chocolate-bark.jpg',
    description: 'Ręcznie robione tabliczki czekoladowe z orzechami, suszonymi owocami i innymi dodatkami.'
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Ciasteczka z kawałkami czekolady',
    category: 'cookies',
    price: 49.99,
    image: '/images/chocolate-chip-cookies.jpg',
    description: 'Klasyczne ciasteczka z kawałkami czekolady, miękkie w środku i chrupiące na brzegach.',
    bestseller: true
  },
  {
    id: 'shortbread-cookies',
    name: 'Kruche ciasteczka',
    category: 'cookies',
    price: 45.99,
    image: '/images/shortbread-cookies.jpg',
    description: 'Maślane kruche ciasteczka, które rozpływają się w ustach.'
  }
];

export const categories = [
  { id: 'all', name: 'Wszystkie produkty' },
  { id: 'cakes', name: 'Torty i ciasta' },
  { id: 'chocolates', name: 'Czekoladki' },
  { id: 'pastries', name: 'Wypieki' },
  { id: 'cookies', name: 'Ciasteczka' }
];