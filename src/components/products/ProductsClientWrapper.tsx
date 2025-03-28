'use client';

import { useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import { Product, ProductCategory } from '@/data/get-page-data';

interface ProductsClientWrapperProps {
  initialProducts: Product[];
  categories: ProductCategory[];
  activeCategory: string;
}

export default function ProductsClientWrapper({ initialProducts, categories, activeCategory }: ProductsClientWrapperProps) {
  const router = useRouter();

  // Function to update the URL when a category is selected
  const handleCategoryChange = (category: string) => {
    const url = category === 'wszystkie' ? '/produkty' : `/produkty?kategoria=${category}`;

    router.push(url);
  };

  const products = initialProducts.filter((product) => activeCategory === 'wszystkie' || product.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Horizontal Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => handleCategoryChange('wszystkie')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === 'wszystkie' ? 'bg-primary-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Wszystkie
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id ? 'bg-primary-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
