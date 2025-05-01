'use client';
import { useState } from 'react';
import { Product, ProductCategory } from '@/data/get-page-data';
import { RealizacjaCard } from './realizacja-card';
import { RealizacjaModal } from './realizacja-modal';

interface RealizacjeClientProps {
  oferta: Product[];
  categories: ProductCategory[];
}

export default function RealizacjeClient({ oferta, categories }: RealizacjeClientProps) {
  const [selectedRealizacja, setSelectedRealizacja] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (realizacja: Product) => {
    setSelectedRealizacja(realizacja);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {oferta.map((realizacja) => (
          <RealizacjaCard 
            key={realizacja.id} 
            realizacja={realizacja} 
            categories={categories} 
            onClick={() => openModal(realizacja)}
          />
        ))}
      </div>

      <RealizacjaModal 
        realizacja={selectedRealizacja} 
        categories={categories}
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}