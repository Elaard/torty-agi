import Image from 'next/image';

export default function RealizacjePage() {
  // Mock image URL for placeholders
  const mockImageUrl = 'https://wszystkiegoslodkiego.pl/storage/images/202330/ciasto-malinowa-ksiezniczka.webp';

  return (
    <div className="py-16 bg-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge badge-primary mb-4 inline-block transform rotate-1">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Realizacje
          </h1>
          <div className="h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full"></div>
          <p className="text-secondary-600 max-w-2xl mx-auto mt-6 text-lg">
            Zapraszam do obejrzenia galerii moich prac. Każda realizacja to unikalne dzieło stworzone z pasją i dbałością o najdrobniejsze detale.
          </p>
        </div>

        {/* Sekcja 1: Torty */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Torty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Duże zdjęcie na całą szerokość */}
            <div className="md:col-span-3 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[21/9]">
                <Image 
                  src={mockImageUrl} 
                  alt="Tort weselny" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Tort weselny z kwiatami</h3>
              </div>
            </div>
            
            {/* Dwa średnie zdjęcia obok siebie */}
            <div className="md:col-span-2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[16/9]">
                <Image 
                  src={mockImageUrl} 
                  alt="Tort urodzinowy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Tort urodzinowy dla dzieci</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[9/16]">
                <Image 
                  src={mockImageUrl} 
                  alt="Tort okolicznościowy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Tort okolicznościowy</h3>
              </div>
            </div>
            
            {/* Trzy mniejsze zdjęcia w rzędzie */}
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-square">
                <Image 
                  src={mockImageUrl} 
                  alt="Tort czekoladowy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Tort czekoladowy</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-square">
                <Image 
                  src={mockImageUrl} 
                  alt="Tort owocowy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Tort owocowy</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-square">
                <Image 
                  src={mockImageUrl} 
                  alt="Tort bezowy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Tort bezowy</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja 2: Słodkie stoły */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Słodkie stoły</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Układ mozaikowy */}
            <div className="md:col-span-8 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[16/9]">
                <Image 
                  src={mockImageUrl} 
                  alt="Słodki stół weselny" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Słodki stół weselny</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[9/16]">
                <Image 
                  src={mockImageUrl} 
                  alt="Candy bar" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Candy bar</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[1/1]">
                <Image 
                  src={mockImageUrl} 
                  alt="Słodki stół urodzinowy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Słodki stół urodzinowy</h3>
              </div>
            </div>
            
            <div className="md:col-span-8 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[16/9]">
                <Image 
                  src={mockImageUrl} 
                  alt="Słodki stół komunijny" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Słodki stół komunijny</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja 3: Słodkości */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Słodkości</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Układ galerii z różnymi proporcjami */}
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[3/4]">
                <Image 
                  src={mockImageUrl} 
                  alt="Babeczki" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Babeczki</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[1/1]">
                <Image 
                  src={mockImageUrl} 
                  alt="Makaroniki" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Makaroniki</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[3/4]">
                <Image 
                  src={mockImageUrl} 
                  alt="Cake pops" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Cake pops</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[4/3]">
                <Image 
                  src={mockImageUrl} 
                  alt="Ciasteczka" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Ciasteczka</h3>
              </div>
            </div>
            
            <div className="md:col-span-2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="relative aspect-[16/9]">
                <Image 
                  src={mockImageUrl} 
                  alt="Desery w pucharkach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">Desery w pucharkach</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}