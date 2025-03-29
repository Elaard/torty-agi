import Link from 'next/link';
import Image from 'next/image';
import { PlaceholderImage } from '../components/ui/placeholder-image';
import { getPageConfig } from '@/data/get-page-data';
import { routes } from '@/utils/routes';

export default async function Home() {
  // Fetch page data
  const pageData = await getPageConfig();

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
    <div className='bg-beige'>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-20 md:py-28'>
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-cake.svg')] opacity-5 bg-repeat"></div>
        <div className='absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-200 opacity-10 blur-3xl animate-pulse-slow'></div>
        <div className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-200 opacity-10 blur-3xl animate-pulse-slow animation-delay-2000'></div>

        <div className='container-custom relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left content */}
            <div className='animate-fade-in-up'>
              <div className='mb-8'>
                <span className='px-5 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium inline-block mb-6 transform rotate-1 shadow-md border border-primary-200'>
                  Z miłością do wypieków
                </span>
                <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
                  Torty <span className='heading-fancy text-6xl md:text-8xl block mt-3 text-primary-600'>AGI</span>
                </h1>
              </div>

              <p className='text-xl text-secondary-600 mb-10 leading-relaxed max-w-xl'>
                Ręcznie robione torty, ciasta i słodkości przygotowane z pasją i najlepszych składników. Idealne na każdą okazję.
              </p>

              <div className='flex flex-col sm:flex-row gap-6'>
                <Link
                  href={routes.contact}
                  className='btn btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
                >
                  Skontaktuj się
                </Link>
                <Link
                  href={routes.products}
                  className='btn btn-outline text-lg px-8 py-4 transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:bg-primary-50'
                >
                  Nasze realizacje
                </Link>
              </div>
            </div>

            {/* Right content - Featured images */}
            <div className='relative'>
              <div className='absolute -top-10 -left-10 w-40 h-40 bg-accent-100 rounded-full opacity-20 animate-float'></div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-0 animate-float animation-delay-1000'></div>

              <div className='relative grid grid-cols-2 gap-4 md:gap-6'>
                {promoted1 || promoted2 || promoted3 || promoted4 ? (
                  <>
                    <div className='space-y-4 md:space-y-6 pt-10'>
                      {/* First promoted product */}
                      {promoted1 && (
                        <Link
                          href={routes.getProduct(promoted1.id)}
                          key={promoted1.id}
                          className='h-40 md:h-56 rounded-2xl overflow-hidden transform rotate-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-rotate-1 group relative block'
                        >
                          {promoted1.mainImage ? (
                            <Image
                              src={promoted1.mainImage}
                              alt={promoted1.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                              width={500}
                              height={500}
                            />
                          ) : (
                            <PlaceholderImage
                              text={promoted1.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent'>
                            <span className='font-medium'>{promoted1.name}</span>
                          </div>
                        </Link>
                      )}

                      {/* Second promoted product */}
                      {promoted2 && (
                        <Link
                          href={routes.getProduct(promoted2.id)}
                          key={promoted2.id}
                          className='h-32 md:h-44 rounded-2xl overflow-hidden transform -rotate-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:rotate-1 group relative block'
                        >
                          {promoted2.mainImage ? (
                            <Image
                              width={500}
                              height={500}
                              src={promoted2.mainImage}
                              alt={promoted2.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          ) : (
                            <PlaceholderImage
                              text={promoted2.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent'>
                            <span className='font-medium'>{promoted2.name}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                    <div className='space-y-4 md:space-y-6'>
                      {/* Third promoted product */}
                      {promoted3 && (
                        <Link
                          href={routes.getProduct(promoted3.id)}
                          key={promoted3.id}
                          className='h-32 md:h-44 rounded-2xl overflow-hidden transform rotate-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-rotate-1 group relative block'
                        >
                          {promoted3.mainImage ? (
                            <Image
                              width={500}
                              height={500}
                              src={promoted3.mainImage}
                              alt={promoted3.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          ) : (
                            <PlaceholderImage
                              text={promoted3.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent'>
                            <span className='font-medium'>{promoted3.name}</span>
                          </div>
                        </Link>
                      )}

                      {/* Fourth promoted product */}
                      {promoted4 && (
                        <Link
                          href={routes.getProduct(promoted4.id)}
                          key={promoted4.id}
                          className='h-40 md:h-56 rounded-2xl overflow-hidden transform -rotate-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:rotate-1 group relative block'
                        >
                          {promoted4.mainImage ? (
                            <Image
                              width={500}
                              height={500}
                              src={promoted4.mainImage}
                              alt={promoted4.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          ) : (
                            <PlaceholderImage
                              text={promoted4.name}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent'>
                            <span className='font-medium'>{promoted4.name}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className='space-y-4 md:space-y-6 pt-10'>
                      <div className='h-40 md:h-56 rounded-2xl overflow-hidden transform rotate-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-rotate-1 group'>
                        <PlaceholderImage
                          text='Tort czekoladowy'
                          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                      <div className='h-32 md:h-44 rounded-2xl overflow-hidden transform -rotate-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:rotate-1 group'>
                        <PlaceholderImage
                          text='Makaroniki'
                          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </div>
                    <div className='space-y-4 md:space-y-6'>
                      <div className='h-32 md:h-44 rounded-2xl overflow-hidden transform rotate-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-rotate-1 group'>
                        <PlaceholderImage
                          text='Babeczki'
                          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                      <div className='h-40 md:h-56 rounded-2xl overflow-hidden transform -rotate-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:rotate-1 group'>
                        <PlaceholderImage
                          text='Tort weselny'
                          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24 relative'>
        <div className='container-custom relative z-10'>
          <div className='text-center mb-16'>
            <span className='badge badge-primary mb-4 inline-block transform rotate-1'>Nasze specjalności</span>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Wyjątkowe <span className='heading-fancy'>kreacje</span>
            </h2>
            <div className='h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full'></div>
            <p className='text-secondary-600 max-w-2xl mx-auto mt-6 text-lg'>
              Odkryj nasze najpopularniejsze i najsmaczniejsze wypieki, które nasi klienci uwielbiają. Każde ciasto tworzymy z dbałością o detale.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {creation1 || creation2 || creation3 ? (
              <>
                {/* First creation */}
                {creation1 && (
                  <div className='group relative'>
                    <div className='absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300'></div>
                    <Link href={routes.getProduct(creation1.id)} className='block'>
                      <div className='relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-primary-100'>
                        <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                          {creation1.mainImage ? (
                            <Image
                              width={500}
                              height={500}
                              src={creation1.mainImage}
                              alt={creation1.name}
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                          ) : (
                            <PlaceholderImage text={creation1.name} className='transition-transform duration-500 group-hover:scale-105' />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                        <h3 className='font-serif text-2xl font-semibold mb-3'>{creation1.name}</h3>
                        <p className='text-secondary-600 mb-4'>{creation1.description}</p>
                        <span className='text-primary-600 font-medium inline-flex items-center'>
                          Więcej informacji
                          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Second creation */}
                {creation2 && (
                  <div className='group relative md:translate-y-8'>
                    <div className='absolute inset-0 bg-accent-200 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300'></div>
                    <Link href={routes.getProduct(creation2.id)} className='block'>
                      <div className='relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-accent-100'>
                        <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                          {creation2.mainImage ? (
                            <Image
                              width={500}
                              height={500}
                              src={creation2.mainImage}
                              alt={creation2.name}
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                          ) : (
                            <PlaceholderImage text={creation2.name} className='transition-transform duration-500 group-hover:scale-105' />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                        <h3 className='font-serif text-2xl font-semibold mb-3'>{creation2.name}</h3>
                        <p className='text-secondary-600 mb-4'>{creation2.description}</p>
                        <span className='text-primary-600 font-medium inline-flex items-center'>
                          Więcej informacji
                          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Third creation */}
                {creation3 && (
                  <div className='group relative'>
                    <div className='absolute inset-0 bg-secondary-200 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300'></div>
                    <Link href={routes.getProduct(creation3.id)} className='block'>
                      <div className='relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 border border-secondary-100'>
                        <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                          {creation3.mainImage ? (
                            <Image
                              width={500}
                              height={500}
                              src={creation3.mainImage}
                              alt={creation3.name}
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                          ) : (
                            <PlaceholderImage text={creation3.name} className='transition-transform duration-500 group-hover:scale-105' />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                        <h3 className='font-serif text-2xl font-semibold mb-3'>{creation3.name}</h3>
                        <p className='text-secondary-600 mb-4'>{creation3.description}</p>
                        <span className='text-primary-600 font-medium inline-flex items-center'>
                          Więcej informacji
                          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              // Fallback content if no creation products are available
              <>
                <div className='group relative'>
                  <div className='absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300'></div>
                  <div className='relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-primary-100'>
                    <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                      <PlaceholderImage text='Tort czekoladowy' className='transition-transform duration-500 group-hover:scale-105' />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                    <h3 className='font-serif text-2xl font-semibold mb-3'>Tort czekoladowy</h3>
                    <p className='text-secondary-600 mb-4'>
                      Bogate warstwy czekoladowe z gładkim ganache i wiórkami czekoladowymi. Idealny na specjalne okazje.
                    </p>
                    <Link href={routes.contact} className='text-primary-600 font-medium hover:text-primary-700 inline-flex items-center'>
                      Więcej informacji
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className='group relative md:translate-y-8'>
                  <div className='absolute inset-0 bg-accent-200 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300'></div>
                  <div className='relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-accent-100'>
                    <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                      <PlaceholderImage text='Makaroniki' className='transition-transform duration-500 group-hover:scale-105' />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                    <h3 className='font-serif text-2xl font-semibold mb-3'>Makaroniki</h3>
                    <p className='text-secondary-600 mb-4'>
                      Delikatne ciasteczka migdałowe z różnymi nadzieniami w pięknych kolorach. Doskonały prezent.
                    </p>
                    <Link href={routes.contact} className='text-primary-600 font-medium hover:text-primary-700 inline-flex items-center'>
                      Więcej informacji
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className='group relative'>
                  <div className='absolute inset-0 bg-secondary-200 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300'></div>
                  <div className='relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 border border-secondary-100'>
                    <div className='relative h-64 mb-6 overflow-hidden rounded-xl'>
                      <PlaceholderImage text='Babeczki' className='transition-transform duration-500 group-hover:scale-105' />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                    <h3 className='font-serif text-2xl font-semibold mb-3'>Babeczki</h3>
                    <p className='text-secondary-600 mb-4'>Soczyste babeczki z kremem maślanym i dekoracyjnymi dodatkami. Idealne na przyjęcia.</p>
                    <Link href={routes.contact} className='text-primary-600 font-medium hover:text-primary-700 inline-flex items-center'>
                      Więcej informacji
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 ml-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className='text-center mt-16'>
            <Link href={routes.products} className='btn btn-primary text-lg px-8 py-4 shadow-xl'>
              Zobacz wszystkie nasze wypieki
            </Link>
          </div>
        </div>
      </section>

      {/* Opinie klientów Section */}
      <section className='py-24 bg-beige relative overflow-hidden'>
        <div className='absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-100 opacity-10 blur-3xl'></div>
        <div className='absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent-100 opacity-10 blur-3xl'></div>

        <div className='container-custom relative z-10'>
          <div className='text-center mb-16'>
            <span className='badge badge-secondary mb-4 inline-block transform rotate-1'>Opinie klientów</span>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Co mówią nasi <span className='heading-fancy'>klienci</span>
            </h2>
            <div className='h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full'></div>
            <p className='text-secondary-600 max-w-2xl mx-auto mt-6 text-lg'>
              Nie uwierzysz nam na słowo? Oto co nasi zadowoleni klienci mówią o naszych pysznych wypiekach.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
            {/* Testimonial 1 */}
            <div className='md:col-span-5 bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary-100'>
              <div className='flex items-center mb-6'>
                <div className='mr-4'>
                  <div className='w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center border-2 border-primary-300 shadow-lg'>
                    <span className='text-primary-700 font-serif text-2xl'>A</span>
                  </div>
                </div>
                <div>
                  <h4 className='font-medium text-lg'>Anna Kowalska</h4>
                  <div className='flex text-accent-500'>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-secondary-600 italic leading-relaxed text-lg'>
                &ldquo;Tort urodzinowy, który zamówiłam, był absolutnie oszałamiający i smakował jeszcze lepiej niż wyglądał! Wszyscy na przyjęciu
                byli pod wrażeniem. Na pewno zamówię ponownie!&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className='md:col-span-7 md:translate-y-12 bg-gradient-to-br from-accent-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-accent-100'>
              <div className='flex items-center mb-6'>
                <div className='mr-4'>
                  <div className='w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center border-2 border-accent-300 shadow-lg'>
                    <span className='text-accent-700 font-serif text-2xl'>M</span>
                  </div>
                </div>
                <div>
                  <h4 className='font-medium text-lg'>Michał Nowak</h4>
                  <div className='flex text-accent-500'>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-secondary-600 italic leading-relaxed text-lg'>
                &ldquo;Czekoladki są po prostu boskie! Bogate, gładkie i o unikalnych smakach. To teraz mój ulubiony prezent dla przyjaciół i rodziny.
                Opakowanie jest również piękne i eleganckie.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className='md:col-span-6 md:col-start-4 bg-gradient-to-br from-secondary-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-secondary-100'>
              <div className='flex items-center mb-6'>
                <div className='mr-4'>
                  <div className='w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center border-2 border-secondary-300 shadow-lg'>
                    <span className='text-secondary-700 font-serif text-2xl'>E</span>
                  </div>
                </div>
                <div>
                  <h4 className='font-medium text-lg'>Ewa Wiśniewska</h4>
                  <div className='flex text-accent-500'>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-secondary-600 italic leading-relaxed text-lg'>
                &ldquo;Zamówiłam babeczki na szkolne wydarzenie mojej córki i odniosły ogromny sukces! Piękne, pyszne i dostarczone dokładnie na czas.
                Obsługa klienta była również wyjątkowa!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-primary-700'></div>
        <div className="absolute inset-0 bg-[url('/images/hero-cake.svg')] opacity-5 bg-repeat"></div>
        <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-beige to-transparent'></div>

        <div className='container-custom relative z-10'>
          <div className='max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Zamów swoje <span className='heading-fancy text-white'>słodkości</span>
            </h2>
            <div className='h-1 w-20 bg-white mx-auto my-6 rounded-full'></div>
            <p className='text-xl text-white/90 max-w-2xl mx-auto my-8 leading-relaxed'>
              Skontaktuj się z nami już dziś, aby zamówić wypieki na specjalną okazję lub po prostu sprawić sobie słodką przyjemność! Oferujemy
              personalizowane zamówienia, dostawę i odbiór osobisty.
            </p>
            <Link
              href='/kontakt'
              className='inline-block px-10 py-5 bg-white text-primary-600 rounded-full text-xl font-bold hover:bg-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105'
            >
              Skontaktuj się teraz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
