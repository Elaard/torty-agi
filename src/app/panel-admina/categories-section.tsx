'use client';

import { ChangeEvent, useState } from 'react';
import { ProductCategory } from '@/data/get-page-data';
import { generateId } from '@/utils/generate-url';

interface CategoriesSectionProps {
  categories: ProductCategory[];
  updateCategories: (categories: ProductCategory[]) => void;
}

export const CategoriesSection = ({ categories, updateCategories }: CategoriesSectionProps) => {
  const [editingCategory, setEditingCategory] = useState<ProductCategory | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const startAddingCategory = () => {
    setEditingCategory({ id: '', name: '' });
    setIsAdding(true);
  };

  const startEditingCategory = (category: ProductCategory) => {
    setEditingCategory({ ...category });
    setIsAdding(false);
  };

  const cancelEditing = () => {
    setEditingCategory(null);
  };

  const saveCategory = () => {
    if (!editingCategory?.name?.trim()) return;

    if (isAdding) {
      updateCategories([...categories, editingCategory]);
    } else {
      updateCategories(categories.map((c) => (c.id === editingCategory.id ? editingCategory : c)));
    }

    setIsAdding(false);
    setEditingCategory(null);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!editingCategory) {
      return;
    }

    const value = e.target.value;

    setEditingCategory({
      ...editingCategory,
      id: generateId(value),
      name: value,
    });
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-semibold'>Zarządzanie Kategoriami</h2>
        <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md' onClick={startAddingCategory}>
          Dodaj Kategorię
        </button>
      </div>

      {/* Category Editing Form */}
      {editingCategory && (
        <form className='bg-gray-50 p-6 rounded-lg mb-6 border'>
          <h3 className='text-xl font-semibold mb-4'>{isAdding ? 'Dodaj Nową Kategorię' : 'Edytuj Kategorię'}</h3>
          <div>
            <label className='block mb-2 font-medium' htmlFor='category_id'>
              Id Kategorii
            </label>
            <input
              id='category_id'
              type='text'
              value={editingCategory.id}
              name='id'
              onChange={handleInputChange}
              className='w-full border rounded-md px-4 py-2'
              disabled
            />
          </div>
          <div>
            <label className='block mb-2 font-medium' htmlFor='category_name'>
              Nazwa Kategorii
            </label>
            <input
              id='category_name'
              type='text'
              name='name'
              value={editingCategory.name}
              onChange={handleInputChange}
              className='w-full border rounded-md px-4 py-2'
              required
            />
          </div>
          <div className='flex justify-end gap-4 mt-6'>
            <button className='bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md' onClick={cancelEditing}>
              Anuluj
            </button>
            <button
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:bg-gray-400'
              onClick={saveCategory}
              disabled={!editingCategory.name.trim()}
            >
              Zapisz
            </button>
          </div>
        </form>
      )}

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='py-3 px-4 text-left'>ID</th>
              <th className='py-3 px-4 text-left'>Nazwa</th>
              <th className='py-3 px-4 text-left'>Akcje</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className='py-3 px-4'>{category.id}</td>
                <td className='py-3 px-4'>{category.name}</td>
                <td className='py-3 px-4'>
                  <div className='flex gap-2'>
                    <button className='bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200' onClick={() => startEditingCategory(category)}>
                      Edytuj
                    </button>
                    <button
                      className='bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200'
                      onClick={() => updateCategories(categories.filter((c) => c.id !== category.id))}
                    >
                      Usuń
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!categories.length && (
              <tr>
                <td colSpan={3} className='py-4 text-center text-gray-500'>
                  Brak kategorii
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
