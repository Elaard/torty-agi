'use client';

import Image from 'next/image';
import { Product } from '@/data/get-page-data';

interface PromotedSectionProps {
  allProducts: Product[];
  promoted: {
    promoted1: string;
    promoted2: string;
    promoted3: string;
    promoted4: string;
  };
  updatePromoted: (promoted: { promoted1: string; promoted2: string; promoted3: string; promoted4: string }) => void;
}

export const PromotedSection = ({ allProducts, promoted, updatePromoted }: PromotedSectionProps) => {
  // Get product by ID
  const getProductById = (id: string) => {
    return allProducts.find((product) => product.id === id);
  };

  // Update a specific promoted slot
  const updatePromotedSlot = (slot: 'promoted1' | 'promoted2' | 'promoted3' | 'promoted4', productId: string) => {
    updatePromoted({
      ...promoted,
      [slot]: productId,
    });
  };

  // No need for a separate clear function since we can select empty value in dropdown

  // No need for availableProducts anymore since we're using dropdowns

  // Render a promoted slot
  const renderPromotedSlot = (slotNumber: number, slotKey: 'promoted1' | 'promoted2' | 'promoted3' | 'promoted4') => {
    const productId = promoted[slotKey];
    const product = getProductById(productId);

    return (
      <div className='border rounded-lg p-4 mb-4'>
        <div className='flex justify-between items-center mb-3'>
          <h4 className='font-medium'>Promowany produkt {slotNumber}</h4>
          <select className='border rounded px-2 py-1' value={productId} onChange={(e) => updatePromotedSlot(slotKey, e.target.value)}>
            <option value=''>-- Wybierz produkt --</option>
            {allProducts.map((p) => (
              <option
                key={p.id}
                value={p.id}
                disabled={
                  p.id !== productId &&
                  (p.id === promoted.promoted1 || p.id === promoted.promoted2 || p.id === promoted.promoted3 || p.id === promoted.promoted4)
                }
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
              <p className='text-sm text-gray-600'>{product.price} zł</p>
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
        <h2 className='text-2xl font-semibold mb-4'>Produkty Promowane</h2>
        <p className='text-gray-600'>
          Wybierz dokładnie 4 produkty, które będą promowane na stronie głównej i w innych wyróżnionych miejscach. Możesz wybrać produkt z rozwijanej
          listy dla każdego slotu lub zmienić już wybrany produkt.
        </p>
      </div>

      {/* Current Promoted Products */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>Aktualnie Promowane</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {renderPromotedSlot(1, 'promoted1')}
          {renderPromotedSlot(2, 'promoted2')}
          {renderPromotedSlot(3, 'promoted3')}
          {renderPromotedSlot(4, 'promoted4')}
        </div>
      </div>

      {/* Instructions */}
      <div className='mt-4 p-4 bg-blue-50 rounded-lg'>
        <p className='text-blue-700'>Użyj rozwijanych list powyżej, aby wybrać lub zmienić produkty w każdym slocie promocyjnym.</p>
      </div>
    </div>
  );
};
