'use client';

import Image from 'next/image';
import { Product } from '@/data/get-page-data';

interface CreationsSectionProps {
  allProducts: Product[];
  creations: {
    creation1: string;
    creation2: string;
    creation3: string;
  };
  updateCreations: (creations: { creation1: string; creation2: string; creation3: string }) => void;
}

export const CreationsSection = ({ allProducts, creations, updateCreations }: CreationsSectionProps) => {
  // Get product by ID
  const getProductById = (id: string) => {
    return allProducts.find((product) => product.id === id);
  };
  // Update a specific creation slot
  const updateCreationSlot = (slot: 'creation1' | 'creation2' | 'creation3', productId: string) => {
    updateCreations({
      ...creations,
      [slot]: productId,
    });
  };

  // Render a creation slot
  const renderCreationSlot = (slotNumber: number, slotKey: 'creation1' | 'creation2' | 'creation3') => {
    const productId = creations[slotKey];
    const product = getProductById(productId);

    return (
      <div className='border rounded-lg p-4 mb-4'>
        <div className='flex justify-between items-center mb-3'>
          <h4 className='font-medium'>
            {'Kreacja '}
            {slotNumber}
          </h4>
          <select className='border rounded px-2 py-1' value={productId} onChange={(e) => updateCreationSlot(slotKey, e.target.value)}>
            <option value=''>-- Wybierz produkt --</option>
            {allProducts.map((p) => (
              <option
                key={p.id}
                value={p.id}
                disabled={p.id !== productId && (p.id === creations.creation1 || p.id === creations.creation2 || p.id === creations.creation3)}
              >
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {product ? (
          <div className='flex items-center'>
            {product.mainImage && (
              <Image width={500} height={500} src={product.mainImage} alt={product.name} className='w-16 h-16 object-cover rounded mr-3' />
            )}
            <div>
              <h4 className='font-medium'>{product.name}</h4>
              <p className='text-sm text-gray-600'>
                {product.price}
                {' zł'}
              </p>
            </div>
          </div>
        ) : (
          <div className='text-gray-500 italic'>Brak wybranego produktu</div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className='mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>Nasze Kreacje</h2>
        <p className='text-gray-600'>
          {
            'Wybierz maksymalnie 3 produkty, które będą wyświetlane w sekcji "Nasze Kreacje" na stronie głównej. Możesz wybrać produkt z rozwijanej listy\r'
          }
          {'dla każdego slotu lub zmienić już wybrany produkt.\r'}
        </p>
      </div>

      {/* Current Creation Products */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>Aktualne Kreacje</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {renderCreationSlot(1, 'creation1')}
          {renderCreationSlot(2, 'creation2')}
          {renderCreationSlot(3, 'creation3')}
        </div>
      </div>

      {/* Instructions */}
      <div className='mt-4 p-4 bg-blue-50 rounded-lg'>
        <p className='text-blue-700'>Użyj rozwijanych list powyżej, aby wybrać lub zmienić produkty w każdym slocie kreacji.</p>
      </div>
    </div>
  );
};
