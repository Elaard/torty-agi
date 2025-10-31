import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PlaceholderImage } from '../components/ui/placeholder-image';
import { getPageConfig } from '@/data/get-page-data';
import { routes } from '@/utils/routes';

export const metadata: Metadata = {
  title: 'Torty AGI | Domowe Torty i Inne Słodkości | Naturalne Składniki',
  description:
    'Zamów domowe torty i ciasta wypiekane z naturalnych składników. Belgijska Czekolada, śmietana i jajka z wolnego wybiegu. Torty urodzinowe, weselne, okolicznościowe - każdy wypiek tworzony ręcznie z pasją',
  keywords: 'domowe torty, naturalne składniki, torty na zamówienie, ręcznie robione ciasta, tort urodzinowy, tort weselny, naturalne wypieki',
  openGraph: {
    title: 'Torty AGI | Domowe Torty z Naturalnych Składników',
    description: 'Belgijska Czekolada, śmietana, jajka z wolnego wybiegu. Każdy tort robiony ręcznie, bez gotowców i sztucznych dodatków.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://torty-agi.pl',
    siteName: 'Torty AGI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Torty AGI - Domowe Wypieki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torty AGI | Domowe Torty',
    description: 'Prawdziwe składniki, ręczna praca, zero gotowców.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://torty-agi.pl',
  },
};

export default function Home() {
  // Get page data
  const pageData = getPageConfig();

  // Get promoted products as individual variables
  const promoted1 = pageData.promoted.promoted1 ? pageData.allProducts.find((p) => p.id === pageData.promoted.promoted1) || null : null;
  const promoted2 = pageData.promoted.promoted2 ? pageData.allProducts.find((p) => p.id === pageData.promoted.promoted2) || null : null;
  const promoted3 = pageData.promoted.promoted3 ? pageData.allProducts.find((p) => p.id === pageData.promoted.promoted3) || null : null;
  const promoted4 = pageData.promoted.promoted4 ? pageData.allProducts.find((p) => p.id === pageData.promoted.promoted4) || null : null;

  // Get creation products as individual variables
  const creation1 = pageData.creations.creation1 ? pageData.allProducts.find((p) => p.id === pageData.creations.creation1) || null : null;
  const creation2 = pageData.creations.creation2 ? pageData.allProducts.find((p) => p.id === pageData.creations.creation2) || null : null;
  const creation3 = pageData.creations.creation3 ? pageData.allProducts.find((p) => p.id === pageData.creations.creation3) || null : null;

  return (
    <div className='bg-cream'>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-24 md:py-24'>
        {/* Subtle background texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('/images/hero-cake.svg')] bg-repeat"></div>

        <div className='container-custom relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left content */}
            <div className='animate-fade-in'>
              <div className='mb-8'>
                <span className='px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium inline-block mb-6 border border-primary-200'>
                  Domowe wypieki od 2018
                </span>
                <h1 className='text-4xl md:text-6xl font-bold leading-tight text-chocolate'>
                  Domowe Torty i Inne Słodkości <span className='heading-fancy text-5xl md:text-7xl block mt-2'>z Naturalnych Składników</span>
                </h1>
              </div>

              <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-xl'>
                Każdy tort wykonuję z najwyższej jakości składników, dbając o to, by był nie tylko pyszny, ale i estetyczny.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href={routes.contact} className='btn btn-primary text-base text-center px-7 py-3'>
                  Zapytaj o tort na zamówienie
                </Link>
                <Link href={routes.oferta} className='btn btn-outline text-base text-center px-7 py-3'>
                  Przeglądaj katalog wypieków
                </Link>
              </div>
            </div>

            {/* Right content - Featured images */}
            <div className='relative'>
              <div className='relative grid grid-cols-2 gap-4 md:gap-6'>
                <div className='space-y-4 md:space-y-6 pt-10'>
                  {/* First promoted product */}
                  {promoted1 && (
                    <Link
                      href={routes.oferta}
                      key={promoted1.id}
                      className='block aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group'
                    >
                      {promoted1.mainImage ? (
                        <Image
                          src={promoted1.mainImage}
                          alt={promoted1.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                          width={500}
                          height={500}
                        />
                      ) : (
                        <PlaceholderImage
                          text={promoted1.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      )}
                    </Link>
                  )}

                  {/* Second promoted product */}
                  {promoted2 && (
                    <Link
                      href={routes.oferta}
                      key={promoted2.id}
                      className='block aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group'
                    >
                      {promoted2.mainImage ? (
                        <Image
                          width={500}
                          height={500}
                          src={promoted2.mainImage}
                          alt={promoted2.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <PlaceholderImage
                          text={promoted2.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      )}
                    </Link>
                  )}
                </div>
                <div className='space-y-4 md:space-y-6'>
                  {/* Third promoted product */}
                  {promoted3 && (
                    <Link
                      href={routes.oferta}
                      key={promoted3.id}
                      className='block aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group'
                    >
                      {promoted3.mainImage ? (
                        <Image
                          width={500}
                          height={500}
                          src={promoted3.mainImage}
                          alt={promoted3.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <PlaceholderImage
                          text={promoted3.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      )}
                    </Link>
                  )}

                  {/* Fourth promoted product */}
                  {promoted4 && (
                    <Link
                      href={routes.oferta}
                      key={promoted4.id}
                      className='block aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group'
                    >
                      {promoted4.mainImage ? (
                        <Image
                          width={500}
                          height={500}
                          src={promoted4.mainImage}
                          alt={promoted4.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <PlaceholderImage
                          text={promoted4.name}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      )}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className='py-20 relative bg-white'>
        <div className='container-custom relative z-10'>
          <div className='text-center mb-16'>
            <span className='badge badge-primary mb-4 inline-block'>Co robię najchętniej</span>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-chocolate'>
              Najczęściej wybierane <span className='heading-fancy'>wypieki</span>
            </h2>
            <div className='h-1 w-20 bg-secondary-500 mx-auto my-6 rounded'></div>
            <p className='text-gray-700 max-w-2xl mx-auto mt-6 text-lg'>
              Kilka rzeczy, które robię najczęściej i wychodzą mi najlepiej. Ale jak masz inny pomysł, możemy spróbować czegoś nowego.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {creation1 && (
              <div className='group'>
                <Link href={routes.oferta} className='block'>
                  <div className='bg-beige p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary-100'>
                    <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                      <Image
                        width={500}
                        height={500}
                        src={creation1.mainImage}
                        alt={creation1.name}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                    <h3 className='font-serif text-2xl font-bold mb-3 text-chocolate'>{creation1.name}</h3>
                    <p className='text-gray-700 mb-4'>{creation1.description}</p>
                    <span className='text-primary-700 font-medium inline-flex items-center hover:text-primary-800'>
                      Przejdź do oferty
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            )}
            {creation2 && (
              <div className='group'>
                <Link href={routes.oferta} className='block'>
                  <div className='bg-beige p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary-100'>
                    <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                      <Image
                        width={500}
                        height={500}
                        src={creation2.mainImage}
                        alt={creation2.name}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                    <h3 className='font-serif text-2xl font-bold mb-3 text-chocolate'>{creation2.name}</h3>
                    <p className='text-gray-700 mb-4'>{creation2.description}</p>
                    <span className='text-primary-700 font-medium inline-flex items-center hover:text-primary-800'>
                      Zobacz smaki i ceny
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            )}
            {creation3 && (
              <div className='group'>
                <Link href={routes.oferta} className='block'>
                  <div className='bg-beige p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary-100'>
                    <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                      <Image
                        width={500}
                        height={500}
                        src={creation3.mainImage}
                        alt={creation3.name}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                    <h3 className='font-serif text-2xl font-bold mb-3 text-chocolate'>{creation3.name}</h3>
                    <p className='text-gray-700 mb-4'>{creation3.description}</p>
                    <span className='text-primary-700 font-medium inline-flex items-center hover:text-primary-800'>
                      Sprawdź dostępność
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div className='text-center mt-12'>
            <Link href={routes.oferta} className='btn btn-primary text-base px-8 py-3'>
              Zobacz pełną ofertę wypieków
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - USUNIĘTE GENERYCZNE OPINIE */}
      {/* Zamiast fake'owych opinii, dodaję prostą sekcję o składnikach */}
      <section className='py-20 bg-beige relative overflow-hidden'>
        <div className='container-custom relative z-10'>
          <div className='text-center mb-12'>
            <span className='badge badge-secondary mb-4 inline-block'>Jak to robię</span>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-chocolate'>
              Naturalne <span className='heading-fancy'>składniki</span>
            </h2>
            <div className='h-1 w-20 bg-secondary-500 mx-auto my-6 rounded'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            <div className='bg-white p-8 rounded-xl shadow-md text-center'>
              <div className='w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-primary-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <h3 className='font-serif text-xl font-bold mb-3 text-chocolate'>Belgijska Czekolada</h3>
              <p className='text-gray-700'>Belgijska czekolada o głębokim aromacie i aksamitnej konsystencji, która nadaje ciastom wyjątkowy smak.</p>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-md text-center'>
              <div className='w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-primary-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <h3 className='font-serif text-xl font-bold mb-3 text-chocolate'>Jajka z wolnego wybiegu</h3>
              <p className='text-gray-700'>Jajka o intensywnie pomarańczowych żółtkach i pełnym, naturalnym smaku.</p>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-md text-center'>
              <div className='w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-primary-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <h3 className='font-serif text-xl font-bold mb-3 text-chocolate'>Świeże owoce</h3>
              <p className='text-gray-700'>Świeże owoce pełne naturalnej słodyczy i aromatu, idealne do podkreślenia smaku domowych wypieków.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 relative overflow-hidden bg-primary-700'>
        <div className="absolute inset-0 bg-[url('/images/hero-cake.svg')] opacity-[0.05] bg-repeat"></div>

        <div className='container-custom relative z-10'>
          <div className='max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-xl text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-chocolate mb-6'>
              Masz <span className='heading-fancy'>pytanie?</span>
            </h2>
            <div className='h-1 w-20 bg-secondary-500 mx-auto my-6 rounded'></div>
            <p className='text-lg text-gray-700 max-w-2xl mx-auto mb-8'>
              Napisz do mnie, powiedz jaka okazja i dla ilu osób. Ustalimy smak, dekoracje i termin. Zwykle odpowiadam tego samego dnia.
            </p>
            <Link href='/kontakt' className='inline-block btn btn-primary text-lg px-10 py-4'>
              Skontaktuj się w sprawie zamówienia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
