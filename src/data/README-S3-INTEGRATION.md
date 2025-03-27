# S3 Integration for Product Data

This document explains how to set up and use the S3 integration for dynamic product data.

## Overview

Instead of using static product data from `products.ts`, the application now fetches product data from an AWS S3 bucket. This allows for easier updates to product information without requiring code changes or redeployment.

## How It Works

1. The application fetches product data on the server side using the `getProducts` function
2. This function gets a presigned S3 URL directly using AWS SDK
3. Then it fetches the actual product data from that URL
4. If the S3 fetch fails, it falls back to the static data in `products.ts`
5. The server passes the fetched data to client components for rendering and interactivity

### Benefits of Server-Side Fetching

- **Better Performance**: Data is fetched during server-side rendering
- **Improved SEO**: Search engines see the fully rendered content with product data
- **Reduced Client-Side JavaScript**: Improves page load time
- **Better User Experience**: Content is available immediately without loading states
- **Secure**: AWS credentials are only used on the server, never exposed to the client

## Setup Instructions

### 1. AWS S3 Configuration

1. Create an S3 bucket in your AWS account
2. Set up appropriate CORS configuration for your bucket:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET"],
       "AllowedOrigins": ["*"],
       "ExposeHeaders": []
     }
   ]
   ```
3. Create a user with programmatic access and the following permissions:
   - `s3:GetObject`
   - `s3:PutObject` (only needed for uploading)

### 2. Environment Variables

Update your `.env.local` file with the following variables:

```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
AWS_S3_BUCKET=your_bucket_name
```

### 3. Upload Product Data

1. Create a JSON file with your product data following the structure in `products-sample.json`
2. Upload it to your S3 bucket using the provided script:
   ```
   node src/scripts/upload-products-to-s3.js
   ```
   
   Or manually upload it to the path `products/products.json` in your S3 bucket

## Usage

The `getProducts` function is used in server components to fetch product data. It returns a Promise that resolves to an array of products.

Example usage in a server component:

```tsx
// This is a Server Component
export default async function ProductsPage() {
  // Fetch products on the server
  const products = await getProducts();

  return (
    <div>
      {/* Pass server-fetched products to client components */}
      <ProductsClientWrapper initialProducts={products} />
    </div>
  );
}
```

Then in your client components, you can use the data for interactive features:

```tsx
// This is a Client Component
"use client";

interface ProductsClientWrapperProps {
  initialProducts: Product[];
}

export default function ProductsClientWrapper({ initialProducts }: ProductsClientWrapperProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  
  // Add filtering, sorting, or other interactive features here
  
  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## Updating Products

To update your product data:

1. Modify your JSON file
2. Upload it to S3 using the script or AWS console
3. The changes will be reflected in your application without redeployment

## Troubleshooting

- If you see the fallback data instead of your S3 data, check:
  - AWS credentials are correct
  - S3 bucket name is correct
  - The file exists at the expected path in S3
  - CORS is properly configured
  - Check browser console for any errors