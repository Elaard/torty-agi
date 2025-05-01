import { getPresignedUrl } from './get-s3-url';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  mainImage: string; // Kept for backward compatibility
  images: string[]; // New field for multiple images
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

// Interface for the page data structure
export interface PageData {
  promoted: {
    promoted1: string;
    promoted2: string;
    promoted3: string;
    promoted4: string;
  },
  creations: {
    creation1: string;
    creation2: string;
    creation3: string;
  },
  products: string[],
  allProducts: Product[];
  categories: Array<ProductCategory>;
}

// Default/fallback data
export const defaultPageData: PageData = {
  promoted: {
    promoted1: '',
    promoted2: '',
    promoted3: '',
    promoted4: ''
  },
  creations: {
    creation1: '',
    creation2: '',
    creation3: ''
  },
  products: [],
  allProducts: [],
  categories: [],
};


export async function getConfig(log?: string): Promise<PageData> {
  try {
    const bucket = process.env.AWS_S3_BUCKET || '';
    const bucketFile = 'data.json';

    if (!bucket) {
      console.warn('AWS_S3_BUCKET not configured, using default data');
      return defaultPageData;
    }

    try {
      const url = await getPresignedUrl(bucket, bucketFile);

      const response = await fetch(url)

      if (!response.ok) {
        console.error(`Failed to fetch page data: ${response.status}`);
        return defaultPageData;
      }

      console.log('Fetched page data:', new Date().toISOString());

      if (!response.ok) {
        console.error(`Failed to fetch page data: ${response.status}`);
        return defaultPageData;
      }

      const data: PageData = await response.json();
      return data;

    } catch (fetchError) {
      console.error('Error fetching page data from S3:', fetchError);
      return defaultPageData;
    }
  } catch (error) {
    console.error('Error in getPageData:', error);
    // Fall back to default data
    return defaultPageData;
  }
}

export async function getPageConfig(log?: string): Promise<PageData> {
  try {
    // Pass the forceRefresh parameter to ensure we can force a refresh when needed
    const config = await getConfig(log);
    return config;
  } catch (error) {
    console.error('Error getting products from page data:', error);
    return {
      promoted: {
        promoted1: '',
        promoted2: '',
        promoted3: '',
        promoted4: ''
      },
      creations: {
        creation1: '',
        creation2: '',
        creation3: ''
      },
      products: [],
      allProducts: [],
      categories: []
    };
  }
}
