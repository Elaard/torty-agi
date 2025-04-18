import Link from 'next/link';
import { getPageConfig } from '../../data/get-page-data';
import { ProductCard } from './product-card';
import { routes } from '@/utils/routes';

interface ProductsPageProps {
  params: Promise<object>;
  searchParams: Promise<{
    kategoria: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { products, allProducts, categories } = await getPageConfig('fetching from produkty page');

  const categoryFilter = (await searchParams).kategoria;

  const filteredProducts = allProducts.filter(
    (product) => products.includes(product.id) && (categoryFilter === 'all' || product.category === categoryFilter)
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Nasze słodkie kreacje</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zapraszam do przejrzenia moich ręcznie tworzonych wypieków, które przygotowuję z miłością i starannie dobieranych składników. Tworzę je na Twoją wyjątkową okazję lub po prostu dla czystej przyjemności.
          </p>
        </div>

        <div className="space-y-8">
          {/* Horizontal Category Filter - Server Component with Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href={routes.products}
              className={`px-4 py-2 rounded-full transition-colors ${
                categoryFilter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              Wszystkie
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/produkty?kategoria=${category.id}`}
                className={`px-4 py-2 rounded-full transition-colors capitalize ${
                  categoryFilter === category.id ? 'bg-primary-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} categories={categories} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
