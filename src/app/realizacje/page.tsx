import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Realizacje | Torty AGI | Galeria Wypieków',
  description: 'Zobacz galerię moich realizacji - torty, słodkie stoły i słodkości. Każdy wypiek robiony ręcznie z naturalnych składników.',
  keywords: 'realizacje tortów, galeria tortów, torty urodzinowe, torty weselne, słodkie stoły',
  openGraph: {
    title: 'Realizacje | Torty AGI',
    description: 'Zobacz galerię moich realizacji - każdy wypiek robiony ręcznie.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://torty-agi.pl/realizacje',
    siteName: 'Torty AGI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Realizacje Torty AGI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realizacje | Torty AGI',
    description: 'Zobacz galerię moich wypieków.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://torty-agi.pl/realizacje',
  },
};

const mockImageUrl = 'https://wszystkiegoslodkiego.pl/storage/images/202330/ciasto-malinowa-ksiezniczka.webp';


export default function RealizacjePage() {
  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-chocolate">
            Realizacje
          </h1>
          <div className="h-1 w-20 bg-secondary-500 mx-auto my-6 rounded"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
            Galeria moich prac. Tu są zdjęcia tego, co robiłam wcześniej - różne torty, słodkie stoły, desery.
          </p>
        </div>

        {/* Sekcja 1: Torty */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif text-chocolate">Torty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Duże zdjęcie na całą szerokość */}
            <div className="md:col-span-3 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[21/9]">
               <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Tort weselny z kwiatami</h3>
              </div>
            </div>

            {/* Dwa średnie zdjęcia obok siebie */}
            <div className="md:col-span-2 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/9]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Tort urodzinowy dla dzieci</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[9/16]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Tort okolicznościowy</h3>
              </div>
            </div>

            {/* Trzy mniejsze zdjęcia w rzędzie */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Tort czekoladowy</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Tort owocowy</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Tort bezowy</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja 2: Słodkie stoły */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif text-chocolate">Słodkie stoły</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Układ mozaikowy */}
            <div className="md:col-span-8 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/9]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Słodki stół weselny</h3>
              </div>
            </div>

            <div className="md:col-span-4 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[9/16]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Candy bar</h3>
              </div>
            </div>

            <div className="md:col-span-4 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[1/1]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Słodki stół urodzinowy</h3>
              </div>
            </div>

            <div className="md:col-span-8 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/9]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Słodki stół komunijny</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja 3: Słodkości */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif text-chocolate">Słodkości</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Układ galerii z różnymi proporcjami */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Babeczki</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[1/1]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Makaroniki</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Cake pops</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[4/3]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Ciasteczka</h3>
              </div>
            </div>

            <div className="md:col-span-2 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[16/9]">
                 <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny z kwiatami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-primary-100">
                <h3 className="text-xl font-semibold text-chocolate">Desery w pucharkach</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
