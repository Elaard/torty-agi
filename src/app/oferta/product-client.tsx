'use client';
import { useState } from 'react';
import { Product, Category } from '@/data/get-page-data';
import { ProductCard } from './product-card';
import { ProductModal } from './product-modal';

interface ProductClientProps {
  offer: Product[];
  categories: Category[];
}

export default function ProductClient({ offer, categories }: ProductClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {offer.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            categories={categories} 
            onClick={() => openModal(product)}
          />
        ))}
      </div>

      <ProductModal 
        product={selectedProduct} 
        categories={categories}
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}