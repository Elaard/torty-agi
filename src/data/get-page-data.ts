import { getPresignedUrl } from './get-s3-url';
import { Config, Product, productData } from './products';

// Interface for the page data structure
export interface PageData {
  mainPage: {
    products: [

    ]
  },
  products: Product[];
}

// Default/fallback data
export const defaultPageData: PageData = {
  mainPage: {
    products: []
  },
  products: productData // Use the static product data as fallback
};

// Cache for the page data
let config: PageData | null = null;
let lastFetchTime: number = 0;
const CACHE_TTL = 60 * 5000; // 5 minute cache TTL

export async function getConfig(): Promise<PageData> {
  const now = Date.now();

  const isExpired = lastFetchTime && now - lastFetchTime > CACHE_TTL;
  if (config && !isExpired) {
    return config;
  }
  try {
    // Get these values from environment variables
    const bucket = process.env.AWS_S3_BUCKET || '';
    const bucketFile = 'data.json';

    // If bucket is not configured, return default data
    if (!bucket) {
      console.warn('AWS_S3_BUCKET not configured, using default data');
      return defaultPageData;
    }

    try {
      // Get the presigned URL
      const url = await getPresignedUrl(bucket, bucketFile);

      // Fetch the page data from S3 with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(url, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.error(`Failed to fetch page data: ${response.status}`);
        return defaultPageData;
      }

      // Parse the response
      const pageData: PageData = await response.json();

      // Cache the data and update the last fetch time
      config = pageData;
      lastFetchTime = Date.now();

      return pageData;
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

export async function getPageConfig(): Promise<Config> {
  try {
    const config = await getConfig();
    return config;
  } catch (error) {
    console.error('Error getting products from page data:', error);
    return { products: [] };
  }
}