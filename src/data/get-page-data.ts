enum CakeVariants {
  DZIECIECE_TORTY = 'dzieciece-torty',
  KOBIECE_TORTY = 'kobiece-torty',
  MESKIE_TORTY = 'meskie-torty',
  NA_CHRZEST = 'na-chrzest',
  KOMUNIJNY_TORT = 'komunijny-tort',
  INNE_TORTY = 'inne-torty',
}

enum ProductCategory {
  CAKES = 'cakes',
  CUPCAKES = 'cupcakes',
  DESSERTS = 'desserts',
  COOKIES = 'cookies',
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  variant?: CakeVariants;
  price: number;
  mainImage: string;
  images: string[];
  description: string;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  size?: string;
  nutritionalInfo?: string;
}

export interface Category<T = string> {
  id: T;
  name: string;
}

export interface PageData {
  // section Ulubione wypieki
  // for elements on the main page
  // IDs of promoted products
  // defined in allProducts
  promoted: {
    promoted1: string;
    promoted2: string;
    promoted3: string;
    promoted4: string;
  };
  // section Domowe wypieki od 2018
  // for elements on the main page
  // IDs of creations products
  // defined in allProducts
  creations: {
    creation1: string;
    creation2: string;
    creation3: string;
  };
  allProducts: Product[];
  categories: Array<Category<ProductCategory>>;
  cakesVariants: Array<Category<CakeVariants>>;
}

const data: PageData = {
  'promoted': {
    'promoted1': 'tort-czekoladowy',
    'promoted2': 'makaroniki',
    'promoted3': 'babeczki',
    'promoted4': 'tort-weselny'
  },
  'creations': {
    'creation1': 'tort-czekoladowy',
    'creation2': 'makaroniki',
    'creation3': 'babeczki'
  },
  'allProducts': [
    {
      'id': 'tort-czekoladowy',
      'name': 'Tort czekoladowy',
      'category': ProductCategory.CAKES,
      'variant': CakeVariants.KOBIECE_TORTY,
      'price': 150,
      'mainImage': '/images/chocolate-cake.jpg',
      'images': ['/images/chocolate-cake.jpg'],
      'description': 'Pyszny tort czekoladowy z bogatymi warstwami czekoladowymi i aksamitnym ganache.',
      'featured': true,
      'bestseller': true,
      'size': '20cm'
    },
    {
      'id': 'makaroniki',
      'name': 'Makaroniki',
      'category': ProductCategory.COOKIES,
      'price': 80,
      'mainImage': '/images/chocolate-cake.jpg',
      'images': ['/images/chocolate-cake.jpg'],
      'description': 'Delikatne ciasteczka migdałowe w różnych smakach i kolorach.',
      'featured': true,
      'new': true
    },
    {
      'id': 'babeczki',
      'name': 'Babeczki',
      'category': ProductCategory.CUPCAKES,
      'price': 60,
      'mainImage': '/images/chocolate-cake.jpg',
      'images': ['/images/chocolate-cake.jpg'],
      'description': 'Soczyste babeczki dekorowane ręcznie robionym kremem maślanym.',
      'bestseller': true
    },
    {
      'id': 'tort-weselny',
      'name': 'Tort weselny',
      'category': ProductCategory.CAKES,
      'variant': CakeVariants.INNE_TORTY,
      'price': 500,
      'mainImage': '/images/chocolate-cake.jpg',
      'images': ['/images/chocolate-cake.jpg'],
      'description': 'Elegancki tort weselny, idealny na Twój wielki dzień.',
      'featured': true,
      'size': '3 piętra'
    }
  ],
  'categories': [
    {
      'id': ProductCategory.CAKES,
      'name': 'Torty'
    },
    {
      'id': ProductCategory.CUPCAKES,
      'name': 'Babeczki'
    },
    {
      'id': ProductCategory.DESSERTS,
      'name': 'Desery'
    },
    {
      'id': ProductCategory.COOKIES,
      'name': 'Ciastka'
    }
  ],
  'cakesVariants': [
    {
      'id': CakeVariants.DZIECIECE_TORTY,
      'name': 'Dziecięce'
    },
    {
      'id': CakeVariants.KOBIECE_TORTY,
      'name': 'Kobiece'
    },
    {
      'id': CakeVariants.MESKIE_TORTY,
      'name': 'Męskie'
    },
    {
      'id': CakeVariants.NA_CHRZEST,
      'name': 'Na chrzest'
    },
    {
      'id': CakeVariants.KOMUNIJNY_TORT,
      'name': 'Komunijne'
    },
    {
      'id': CakeVariants.INNE_TORTY,
      'name': 'Inne'
    }
  ]
}


export function getPageConfig(): PageData {
  return data;
}
