"use client";

import { useState } from "react";
import { ProductCategory } from "@/data/get-page-data";
import { v4 as uuidv4 } from "uuid";

interface CategoriesSectionProps {
  categories: ProductCategory[];
  updateCategories: (categories: ProductCategory[]) => void;
}

export default function CategoriesSection({ categories, updateCategories }: CategoriesSectionProps) {
  const [editingCategory, setEditingCategory] = useState<ProductCategory | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // New category template
  const newCategoryTemplate: ProductCategory = {
    id: "",
    name: "",
  };

  // Start adding a new category
  const startAddingCategory = () => {
    setEditingCategory({ ...newCategoryTemplate, id: uuidv4() });
    setIsAdding(true);
  };

  // Start editing an existing category
  const startEditingCategory = (category: ProductCategory) => {
    setEditingCategory({ ...category });
    setIsAdding(false);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingCategory(null);
  };

  // Save category changes
  const saveCategory = () => {
    if (!editingCategory || !editingCategory.name.trim()) return;

    if (isAdding) {
      updateCategories([...categories, editingCategory]);
    } else {
      updateCategories(categories.map((c) => (c.id === editingCategory.id ? editingCategory : c)));
    }

    setEditingCategory(null);
    setIsAdding(false);
  };

  // Delete a category
  const deleteCategory = (id: string) => {
    if (confirm("Czy na pewno chcesz usunąć tę kategorię?")) {
      updateCategories(categories.filter((c) => c.id !== id));
    }
  };

  // Handle input changes for editing category
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingCategory) return;

    const { name, value } = e.target;
    setEditingCategory({
      ...editingCategory,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Zarządzanie Kategoriami</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md" onClick={startAddingCategory}>
          Dodaj Kategorię
        </button>
      </div>

      {/* Category Editing Form */}
      {editingCategory && (
        <div className="bg-gray-50 p-6 rounded-lg mb-6 border">
          <h3 className="text-xl font-semibold mb-4">{isAdding ? "Dodaj Nową Kategorię" : "Edytuj Kategorię"}</h3>
          <div>
            <label className="block mb-2 font-medium">Nazwa Kategorii</label>
            <input
              type="text"
              name="name"
              value={editingCategory.name}
              onChange={handleInputChange}
              className="w-full border rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md" onClick={cancelEditing}>
              Anuluj
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={saveCategory}
              disabled={!editingCategory.name.trim()}
            >
              Zapisz
            </button>
          </div>
        </div>
      )}

      {/* Categories List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Nazwa</th>
              <th className="py-3 px-4 text-left">Akcje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="py-3 px-4">{category.id}</td>
                <td className="py-3 px-4">{category.name}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" onClick={() => startEditingCategory(category)}>
                      Edytuj
                    </button>
                    <button className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200" onClick={() => deleteCategory(category.id)}>
                      Usuń
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={3} className="py-4 text-center text-gray-500">
                  Brak kategorii
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
