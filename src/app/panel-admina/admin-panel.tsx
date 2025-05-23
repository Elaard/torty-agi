'use client';

import { useState } from 'react';
import { PageData, Product, ProductCategory } from '@/data/get-page-data';
import { ProductsSection } from './products-section';
import { CategoriesSection } from './categories-section';
import { CreationsSection } from './creations-section';
import { PromotedSection } from './promoted-section';

interface AdminPanelProps {
  initialData: PageData;
}

export const AdminPanel = ({ initialData }: AdminPanelProps) => {
  const [pageData, setPageData] = useState<PageData>(initialData);
  const [activeTab, setActiveTab] = useState<string>('products');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveMessage, setSaveMessage] = useState<string>('');

  // Function to save changes to the server
  const saveChanges = async () => {
    setIsSaving(true);
    setSaveMessage('');

    try {
      const response = await fetch('/api/admin/save-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pageData),
      });

      if (!response.ok) {
        throw new Error('Failed to save changes');
      }

      setSaveMessage('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      setSaveMessage('Error saving changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // Update functions for each section
  const updateProducts = (products: Product[]) => {
    setPageData({
      ...pageData,
      allProducts: products,
      products: products.map((p) => p.id),
    });
  };

  const updateCategories = (categories: ProductCategory[]) => {
    setPageData({
      ...pageData,
      categories,
    });
  };

  const updatePromoted = (promotedObj: { promoted1: string; promoted2: string; promoted3: string; promoted4: string }) => {
    setPageData({
      ...pageData,
      promoted: promotedObj,
    });
  };

  const updateCreations = (creationsObj: { creation1: string; creation2: string; creation3: string }) => {
    setPageData({
      ...pageData,
      creations: creationsObj,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Panel Administracyjny</h1>
        <div className="flex items-center gap-4">
          {saveMessage && <span className={saveMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}>{saveMessage}</span>}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            onClick={saveChanges}
            disabled={isSaving}
          >
            {isSaving ? 'Zapisywanie...' : 'Zapisz zmiany'}
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px">
          <button
            className={`py-4 px-6 font-medium ${
              activeTab === 'products' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('products')}
          >
            Oferta
          </button>
          <button
            className={`py-4 px-6 font-medium ${
              activeTab === 'categories' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('categories')}
          >
            Kategorie
          </button>
          <button
            className={`py-4 px-6 font-medium ${
              activeTab === 'promoted' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('promoted')}
          >
            Promowane
          </button>
          <button
            className={`py-4 px-6 font-medium ${
              activeTab === 'creations' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('creations')}
          >
            Kreacje
          </button>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'products' && (
          <ProductsSection products={pageData.allProducts} categories={pageData.categories} updateProducts={updateProducts} />
        )}
        {activeTab === 'categories' && <CategoriesSection categories={pageData.categories} updateCategories={updateCategories} />}
        {activeTab === 'promoted' && (
          <PromotedSection allProducts={pageData.allProducts} promoted={pageData.promoted} updatePromoted={updatePromoted} />
        )}
        {activeTab === 'creations' && (
          <CreationsSection allProducts={pageData.allProducts} creations={pageData.creations} updateCreations={updateCreations} />
        )}
      </div>
    </div>
  );
};
