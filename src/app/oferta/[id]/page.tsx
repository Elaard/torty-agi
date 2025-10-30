import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPageConfig } from '@/data/get-page-data';
import { routes } from '@/utils/routes';
import { ImageCarousel } from './image-carousel';


export default function RealizacjaDetailPage({ params }: any) {
  const { id } = params;
  const { allProducts, categories } = getPageConfig();

  // Find the realization by ID
  const realizacja = allProducts.find((p) => p.id === id);

  // If realization not found, return 404
  if (!realizacja) {
    notFound();
  }

  // Get category name
  const category = categories.find((c) => c.id === realizacja.category);

  return (
    <div className="py-16 bg-beige">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href={routes.home} className="hover:text-primary-600 transition-colors">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href={routes.oferta} className="hover:text-primary-600 transition-colors">
              Oferta
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-600">{realizacja.name}</span>
          </div>
        </div>

        {/* Realization Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{realizacja.name}</h1>
            {category && (
              <span className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                {category.name}
              </span>
            )}
          </div>
          <p className="text-xl text-gray-700 max-w-4xl">{realizacja.description}</p>
        </div>

        {/* Image Carousel */}
        <ImageCarousel
          images={realizacja.images && realizacja.images.length > 0 ? realizacja.images : realizacja.mainImage ? [realizacja.mainImage] : []}
          alt={realizacja.name}
        />

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Ingredients */}
          {realizacja.ingredients && realizacja.ingredients.length > 0 && (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Składniki</h2>
              <ul className="list-disc list-inside space-y-2">
                {realizacja.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Allergens */}
          {realizacja.allergens && realizacja.allergens.length > 0 && (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Alergeny</h2>
              <ul className="list-disc list-inside space-y-2">
                {realizacja.allergens.map((allergen, index) => (
                  <li key={index} className="text-gray-700">{allergen}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-50 p-8 md:p-12 rounded-3xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Chcesz zamówić podobną realizację?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Skontaktuj się ze mną, aby omówić szczegóły. Stworzę dla Ciebie wyjątkowy wypiek dostosowany do Twoich potrzeb i okazji.
          </p>
          <Link 
            href={routes.contact} 
            className="btn btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Skontaktuj się
          </Link>
        </div>

        {/* Back to Gallery */}
        <div className="mt-12 text-center">
          <Link 
            href={routes.oferta} 
            className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Wróć do galerii realizacji
          </Link>
        </div>
      </div>
    </div>
  );
}