'use client';

import { useState } from 'react';
import { Product } from '@/data/get-page-data';
import { v4 as uuidv4 } from 'uuid';
import { ImageUploader } from '@/components/ui/image-uploader';
import { Modal } from '../../components/ui/Modal';
import { ImagePicker } from '../../components/ui/image-picker';

interface ProductsSectionProps {
  products: Product[];
  updateProducts: (products: Product[]) => void;
}

interface PendingImage {
  file: File;
  uploaderIndex: number;
}

export const ProductsSection = ({ products, updateProducts }: ProductsSectionProps) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedPendingImage, setSelectedPendingImage] = useState<PendingImage | null>(null);

  // New product template
  const newProductTemplate: Product = {
    id: '',
    name: '',
    category: 'cakes',
    price: 0,
    mainImage: '',
    images: [], // Initialize with empty array
    description: '',
  };

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Start adding a new product
  const startAddingProduct = () => {
    setEditingProduct({ ...newProductTemplate, id: uuidv4() });
    setIsAdding(true);
  };

  // Start editing an existing product
  const startEditingProduct = (product: Product) => {
    // Ensure images array exists and includes mainImage
    let images = product.images || [];

    // If mainImage exists and is not already in images, add it
    if (product.mainImage && !images.includes(product.mainImage)) {
      images = [product.mainImage, ...images];
    }

    const productWithImages = {
      ...product,
      images: images,
    };

    setEditingProduct(productWithImages);
    setIsAdding(false);
  };

  const cancelEditing = () => {
    setEditingProduct(null);
  };

  const saveProduct = async () => {
    if (!editingProduct) return;

    setIsSaving(true);

    let images = [...editingProduct.images];
    let mainImage = editingProduct.mainImage;
    try {
      if (pendingImages.length > 0) {
        for (const pendingImage of pendingImages) {
          const formData = new FormData();
          formData.append('file', pendingImage.file);

          const response = await fetch('/api/admin/upload-image', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Błąd podczas przesyłania pliku');
          }

          const data = await response.json();

          if (data.success && data.imageUrl) {
            images.push(data.imageUrl);

            if (pendingImage.uploaderIndex === selectedPendingImage?.uploaderIndex) {
              mainImage = data.imageUrl;
            }

            if (!mainImage) {
              mainImage = data.imageUrl;
            }
          }
        }

        setPendingImages([]);
      }

      let finalProduct = {
        ...editingProduct,
        mainImage,
        images: images,
      };

      // Save the product
      if (isAdding) {
        updateProducts([...products, finalProduct]);
      } else {
        updateProducts(products.map((p) => (p.id === finalProduct.id ? finalProduct : p)));
      }

      setEditingProduct(null);
      setIsAdding(false);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Wystąpił błąd podczas zapisywania produktu. Spróbuj ponownie.');
    } finally {
      setIsSaving(false);
    }
  };

  console.log(editingProduct);

  // Delete a product
  const deleteProduct = (id: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten produkt?')) {
      updateProducts(products.filter((p) => p.id !== id));
    }
  };

  // Handle input changes for editing product
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingProduct) return;

    const { name, value } = e.target;

    if (name === 'price') {
      setEditingProduct({
        ...editingProduct,
        [name]: parseFloat(value) || 0,
      });
    } else if (name === 'ingredients' || name === 'allergens') {
      setEditingProduct({
        ...editingProduct,
        [name]: value.split(',').map((item) => item.trim()),
      });
    } else {
      setEditingProduct({
        ...editingProduct,
        [name]: value,
      });
    }
  };

  // Handle file selection (not immediate upload)
  const handleFileSelected = (file: File) => {
    if (!editingProduct) return;

    // Add to pending images with a unique index
    const uploaderIndex = pendingImages.length;
    setPendingImages([...pendingImages, { file, uploaderIndex }]);
  };

  // Handle image upload (for direct URL input or after successful upload)
  const handleImageUploaded = (imageUrl: string) => {
    if (!editingProduct) return;

    // Add to images array
    const updatedImages = [...(editingProduct.images || [])];

    return {
      mainImage: editingProduct.mainImage || imageUrl,
      images: updatedImages,
    };
  };

  // Usunięto console.log

  // Remove an image
  const removeImage = (imageUrl: string) => {
    if (!editingProduct || !editingProduct.images) return;

    // Only update if the image exists
    if (editingProduct.images.includes(imageUrl)) {
      const updatedImages = editingProduct.images.filter((img) => img !== imageUrl);

      // Determine the new primary image if needed
      let newPrimaryImage = editingProduct.mainImage;
      if (imageUrl === editingProduct.mainImage) {
        newPrimaryImage = updatedImages.length > 0 ? updatedImages[0] : '';
      }

      setEditingProduct({
        ...editingProduct,
        images: updatedImages,
        mainImage: newPrimaryImage,
      });
    }
  };

  // Set an image as primary
  const setPrimaryImage = (imageUrl: string) => {
    if (!editingProduct) return;

    // Only update if the image exists and is not already the primary
    if (editingProduct.images?.includes(imageUrl) && imageUrl !== editingProduct.mainImage) {
      setEditingProduct({
        ...editingProduct,
        mainImage: imageUrl,
      });
    } else if (!editingProduct.images?.includes(imageUrl) && imageUrl !== editingProduct.mainImage) {
      // If the image is not in the images array, add it and set as primary
      const updatedImages = [...(editingProduct.images || []), imageUrl];
      setEditingProduct({
        ...editingProduct,
        mainImage: imageUrl,
        images: updatedImages,
      });
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingProduct) return;

    const { name, checked } = e.target;
    setEditingProduct({
      ...editingProduct,
      [name]: checked,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Zarządzanie Produktami</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Szukaj produktów..."
            className="border rounded-md px-4 py-2 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md" onClick={startAddingProduct}>
            Dodaj Produkt
          </button>
        </div>
      </div>

      {/* Product Editing Form */}
      {editingProduct && (
        <Modal maxW="max-w-6xl" maxH="max-modal-h">
          <div className="bg-gray-50 p-6 rounded-lg mb-6 border">
            <h3 className="text-xl font-semibold mb-4">{isAdding ? 'Dodaj Nowy Produkt' : 'Edytuj Produkt'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Nazwa</label>
                <input
                  type="text"
                  name="name"
                  value={editingProduct.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Kategoria</label>
                <select
                  name="category"
                  value={editingProduct.category}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                  required
                >
                  <option value="cakes">Torty</option>
                  <option value="chocolates">Czekoladki</option>
                  <option value="pastries">Ciasta</option>
                  <option value="cookies">Ciasteczka</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-medium">Cena (zł)</label>
                <input
                  name="price"
                  value={editingProduct.price}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                  min="0"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">Aktualne Zdjęcia produktu</label>

                {/* Current Images Gallery */}
                {!!editingProduct.images?.length && (
                  <div className="mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {editingProduct.images?.map((imgUrl, index) => (
                        <ImagePicker
                          key={index}
                          imgUrl={imgUrl}
                          pickImage={setPrimaryImage}
                          removeImage={removeImage}
                          isSelected={imgUrl === editingProduct.mainImage}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <p>Dodaj nowe zdjęcia</p>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
                  <ImageUploader onImageUploaded={handleImageUploaded} onFileSelected={handleFileSelected} />
                  <div>
                    <ul className="flex gap-4 mt-2 list-disc list-inside">
                      {pendingImages.map((pendingImage, index) => {
                        // need to release it when not needed
                        let imgUrl = URL.createObjectURL(pendingImage.file);
                        return (
                          <ImagePicker
                            key={index}
                            imgUrl={imgUrl}
                            pickImage={() => setSelectedPendingImage(pendingImage)}
                            removeImage={() => setPendingImages(pendingImages.filter((img) => img.uploaderIndex !== pendingImage.uploaderIndex))}
                            isSelected={selectedPendingImage === pendingImage}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">Opis</label>
                <textarea
                  name="description"
                  value={editingProduct.description}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2 h-24"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Rozmiar</label>
                <input
                  type="text"
                  name="size"
                  value={editingProduct.size || ''}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Składniki (oddzielone przecinkami)</label>
                <input
                  type="text"
                  name="ingredients"
                  value={editingProduct.ingredients?.join(', ') || ''}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Alergeny (oddzielone przecinkami)</label>
                <input
                  type="text"
                  name="allergens"
                  value={editingProduct.allergens?.join(', ') || ''}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Informacje o wartościach odżywczych</label>
                <input
                  type="text"
                  name="nutritionalInfo"
                  value={editingProduct.nutritionalInfo || ''}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={editingProduct.featured || false}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="featured">Wyróżniony</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="bestseller"
                    name="bestseller"
                    checked={editingProduct.bestseller || false}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="bestseller">Bestseller</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="new"
                    name="new"
                    checked={editingProduct.new || false}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="new">Nowość</label>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md" onClick={cancelEditing}>
                Anuluj
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:bg-blue-400"
                onClick={saveProduct}
                disabled={isSaving}
              >
                {isSaving ? 'Zapisywanie...' : 'Zapisz'}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Products List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Obraz</th>
              <th className="py-3 px-4 text-left">Nazwa</th>
              <th className="py-3 px-4 text-left">Kategoria</th>
              <th className="py-3 px-4 text-left">Cena</th>
              <th className="py-3 px-4 text-left">Akcje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-3 px-4">
                  <div className="relative">
                    {product.mainImage ? (
                      <img src={product.mainImage} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">
                  {product.category === 'cakes' && 'Torty'}
                  {product.category === 'chocolates' && 'Czekoladki'}
                  {product.category === 'pastries' && 'Ciasta'}
                  {product.category === 'cookies' && 'Ciasteczka'}
                </td>
                <td className="py-3 px-4">{product.price} zł</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" onClick={() => startEditingProduct(product)}>
                      Edytuj
                    </button>
                    <button className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200" onClick={() => deleteProduct(product.id)}>
                      Usuń
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Nie znaleziono produktów
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
