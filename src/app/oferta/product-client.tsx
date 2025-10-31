'use client';
import { useState } from 'react';
import { Product, Category } from '@/data/get-page-data';
import { GalleryCard } from './gallery-card';
import { ProductModal } from './product-modal';

interface ProductClientProps {
  offer: Product[];
  categories: Category[];
  cakesVariants?: Category[];
}

export default function ProductClient({ offer, categories, cakesVariants }: ProductClientProps) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offer.map((product) => (
          <GalleryCard
            key={product.id}
            product={product}
            onClick={() => openModal(product)}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        categories={categories}
        cakesVariants={cakesVariants}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}