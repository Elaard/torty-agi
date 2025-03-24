import Link from "next/link";
import PlaceholderImage from "../components/ui/PlaceholderImage";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-beige to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-cake.svg')] opacity-5 bg-repeat"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium inline-block mb-6 transform rotate-1 shadow-sm">
                Z miłością do wypieków
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Torty <span className="heading-fancy text-6xl md:text-8xl block mt-2">AGI</span>
              </h1>
              <p className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Ręcznie robione torty, ciasta i słodkości przygotowane z pasją i najlepszych składników. Idealne na każdą okazję.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/kontakt" className="btn btn-primary text-lg px-8 py-4 shadow-xl">
                  Skontaktuj się
                </Link>
                <Link href="/kontakt" className="btn btn-outline text-lg px-8 py-4 transform -rotate-1">
                  Nasze realizacje
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-beige to-transparent z-10 pointer-events-none"></div>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="h-40 md:h-64 rounded-2xl overflow-hidden transform rotate-2 shadow-xl">
                <PlaceholderImage text="Tort czekoladowy" className="h-full w-full object-cover" />
              </div>
              <div className="h-40 md:h-64 rounded-2xl overflow-hidden transform -rotate-1 shadow-xl translate-y-8">
                <PlaceholderImage text="Tort weselny" className="h-full w-full object-cover" />
              </div>
              <div className="h-40 md:h-64 rounded-2xl overflow-hidden transform rotate-3 shadow-xl">
                <PlaceholderImage text="Babeczki" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O nas Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-50 opacity-50 blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="badge badge-secondary mb-4 inline-block transform -rotate-1">Nasza historia</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tworzymy z <span className="heading-fancy">pasją</span>
            </h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full"></div>
            <p className="text-secondary-600 max-w-2xl mx-auto mt-6 text-lg">
              W Torty AGI każde ciasto tworzymy z miłością, używając najlepszych składników i wieloletniego doświadczenia. Nasza pasja do wypieków
              widoczna jest w każdym kęsie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-primary-300">
              <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform -rotate-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Tworzone z miłością</h3>
              <p className="text-secondary-600 text-lg">
                Każde ciasto przygotowujemy z dbałością o detale, zapewniając wyjątkowe doznania smakowe przy każdym kęsie.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-accent-300 md:translate-y-8">
              <div className="bg-accent-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform rotate-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Najwyższa jakość</h3>
              <p className="text-secondary-600 text-lg">
                Używamy tylko najlepszych składników, pozyskiwanych lokalnie, aby tworzyć nasze pyszne wypieki.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-secondary-300">
              <div className="bg-secondary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform -rotate-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-secondary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Personalizacja</h3>
              <p className="text-secondary-600 text-lg">
                Oferujemy spersonalizowane wypieki na specjalne okazje, dostosowane do Twoich preferencji i wymagań.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nasze Specjalności Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 opacity-50 clip-path-diagonal"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-50 opacity-50 clip-path-diagonal-reverse"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4 inline-block transform rotate-1">Nasze specjalności</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wyjątkowe <span className="heading-fancy">kreacje</span>
            </h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full"></div>
            <p className="text-secondary-600 max-w-2xl mx-auto mt-6 text-lg">
              Odkryj nasze najpopularniejsze i najsmaczniejsze wypieki, które nasi klienci uwielbiają. Każde ciasto tworzymy z dbałością o detale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Specialty 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-primary-100">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <PlaceholderImage text="Tort czekoladowy" className="transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">Tort czekoladowy</h3>
                <p className="text-secondary-600 mb-4">
                  Bogate warstwy czekoladowe z gładkim ganache i wiórkami czekoladowymi. Idealny na specjalne okazje.
                </p>
                <Link href="/kontakt" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Więcej informacji
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Specialty 2 */}
            <div className="group relative md:translate-y-8">
              <div className="absolute inset-0 bg-accent-200 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-accent-100">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <PlaceholderImage text="Makaroniki" className="transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">Makaroniki</h3>
                <p className="text-secondary-600 mb-4">
                  Delikatne ciasteczka migdałowe z różnymi nadzieniami w pięknych kolorach. Doskonały prezent.
                </p>
                <Link href="/kontakt" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Więcej informacji
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Specialty 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-secondary-200 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 border border-secondary-100">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <PlaceholderImage text="Babeczki" className="transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">Babeczki</h3>
                <p className="text-secondary-600 mb-4">Soczyste babeczki z kremem maślanym i dekoracyjnymi dodatkami. Idealne na przyjęcia.</p>
                <Link href="/kontakt" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Więcej informacji
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/kontakt" className="btn btn-primary text-lg px-8 py-4 shadow-xl">
              Zobacz wszystkie nasze wypieki
            </Link>
          </div>
        </div>
      </section>

      {/* Opinie klientów Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-100 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent-100 opacity-30 blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="badge badge-secondary mb-4 inline-block transform rotate-1">Opinie klientów</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Co mówią nasi <span className="heading-fancy">klienci</span>
            </h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full"></div>
            <p className="text-secondary-600 max-w-2xl mx-auto mt-6 text-lg">
              Nie uwierzysz nam na słowo? Oto co nasi zadowoleni klienci mówią o naszych pysznych wypiekach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Testimonial 1 */}
            <div className="md:col-span-5 bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center border-2 border-primary-300 shadow-lg">
                    <span className="text-primary-700 font-serif text-2xl">A</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Anna Kowalska</h4>
                  <div className="flex text-accent-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-secondary-600 italic leading-relaxed text-lg">
                &ldquo;Tort urodzinowy, który zamówiłam, był absolutnie oszałamiający i smakował jeszcze lepiej niż wyglądał! Wszyscy na przyjęciu
                byli pod wrażeniem. Na pewno zamówię ponownie!&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="md:col-span-7 md:translate-y-12 bg-gradient-to-br from-accent-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-accent-100">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center border-2 border-accent-300 shadow-lg">
                    <span className="text-accent-700 font-serif text-2xl">M</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Michał Nowak</h4>
                  <div className="flex text-accent-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-secondary-600 italic leading-relaxed text-lg">
                &ldquo;Czekoladki są po prostu boskie! Bogate, gładkie i o unikalnych smakach. To teraz mój ulubiony prezent dla przyjaciół i rodziny.
                Opakowanie jest również piękne i eleganckie.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="md:col-span-6 md:col-start-4 bg-gradient-to-br from-secondary-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-secondary-100">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center border-2 border-secondary-300 shadow-lg">
                    <span className="text-secondary-700 font-serif text-2xl">E</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Ewa Wiśniewska</h4>
                  <div className="flex text-accent-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-secondary-600 italic leading-relaxed text-lg">
                &ldquo;Zamówiłam babeczki na szkolne wydarzenie mojej córki i odniosły ogromny sukces! Piękne, pyszne i dostarczone dokładnie na czas.
                Obsługa klienta była również wyjątkowa!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-cake.svg')] opacity-5 bg-repeat"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Zamów swoje <span className="heading-fancy text-white">słodkości</span>
            </h2>
            <div className="h-1 w-20 bg-white mx-auto my-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto my-8 leading-relaxed">
              Skontaktuj się z nami już dziś, aby zamówić wypieki na specjalną okazję lub po prostu sprawić sobie słodką przyjemność! Oferujemy
              personalizowane zamówienia, dostawę i odbiór osobisty.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-10 py-5 bg-white text-primary-600 rounded-full text-xl font-bold hover:bg-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              Skontaktuj się teraz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
