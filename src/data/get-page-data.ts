import pageData from './data.json';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  mainImage: string;
  images: string[];
  description: string;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  size?: string;
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface PageData {
  promoted: {
    promoted1: string;
    promoted2: string;
    promoted3: string;
    promoted4: string;
  };
  creations: {
    creation1: string;
    creation2: string;
    creation3: string;
  };
  products: string[];
  allProducts: Product[];
  categories: Array<ProductCategory>;
}

// Direct export of the imported data
export function getPageData(): PageData {
  return pageData as PageData;
}

// Alias for backward compatibility
export function getPageConfig(): PageData {
  return getPageData();
}
