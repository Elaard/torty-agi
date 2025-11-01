import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageConfig } from '@/data/get-page-data';
import { routes } from '@/utils/routes';
import { ImageCarousel } from './image-carousel';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';

// Generate static params for all products (SSG)
export async function generateStaticParams() {
  const { allProducts } = getPageConfig();

  return allProducts.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const { allProducts, categories } = getPageConfig();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Produkt nie znaleziony | Torty AGI',
    };
  }

  const category = categories.find((c) => c.id === product.category);
  const categoryName = category ? category.name : '';

  return {
    title: `${product.name} | ${categoryName} | Torty AGI`,
    description: product.description || `${product.name} - ${categoryName}. Ręcznie robiony wypiek z najlepszych składników. Idealne na każdą okazję.`,
    keywords: `${product.name}, ${categoryName}, torty na zamówienie, cukiernia`,
    openGraph: {
      title: `${product.name} | Torty AGI`,
      description: product.description || `${product.name} - ${categoryName}. Ręcznie robiony wypiek z najlepszych składników.`,
      type: 'website',
      locale: 'pl_PL',
      url: `https://torty-agi.pl/oferta/${id}`,
      siteName: 'Torty AGI Cukiernia',
      images: product.mainImage ? [
        {
          url: product.mainImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ] : [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Torty AGI`,
      description: product.description || `${product.name} - ${categoryName}`,
      images: product.mainImage ? [product.mainImage] : ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://torty-agi.pl/oferta/${id}`,
    },
  };
}

export default async function RealizacjaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { allProducts, categories } = getPageConfig();

  // Find the realization by ID
  const realizacja = allProducts.find((p) => p.id === id);

  // If realization not found, return 404
  if (!realizacja) {
    notFound();
  }

  // Get category
  const category = categories.find((c) => c.id === realizacja.category);

  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Strona główna', url: 'https://torty-agi.pl' },
    { name: 'Oferta', url: 'https://torty-agi.pl/oferta' },
    { name: realizacja.name, url: `https://torty-agi.pl/oferta/${id}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="py-24 bg-beige">
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
    </>
  );
}