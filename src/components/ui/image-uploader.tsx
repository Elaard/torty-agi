'use client';

import { useState, useRef, forwardRef, useImperativeHandle, ChangeEvent } from 'react';

export interface ImageUploaderHandle {
  uploadSelectedFile: () => Promise<string | null>;
}

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  onFileSelected?: (file: File) => void;
}

export const ImageUploader = forwardRef<ImageUploaderHandle, ImageUploaderProps>(({ onImageUploaded, onFileSelected }, ref) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const maxSize = 5 * 1024 * 1024; // 5MB

    const reader = new FileReader();
    const images = [];
    Array.from(files).forEach((file) => {
      // validate file type
      const fileType = file.type;
      if (!fileType.startsWith('image/')) {
        console.log('Tylko pliki graficzne są dozwolone.');
        return;
      }

      if (file.size > maxSize) {
        setUploadError('Maksymalny rozmiar pliku to 5MB.');
        return;
      }

      reader.readAsDataURL(file);
      images.push(file);
      onFileSelected?.(file);
    });
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setUploadError(null);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

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
        onImageUploaded(data.imageUrl);
        setUploadProgress(100);
      } else {
        throw new Error('Nie udało się uzyskać adresu URL obrazu');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadError(error instanceof Error ? error.message : 'Nieznany błąd podczas przesyłania');
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Expose the uploadSelectedFile method to the parent component
  useImperativeHandle(ref, () => ({
    uploadSelectedFile: async () => {
      if (selectedFile) {
        await uploadFile(selectedFile);
      }
      return null;
    },
  }));

  return (
    <div className='w-full'>
      <div
        className='border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors'
        onClick={triggerFileInput}
      >
        <div className='py-4'>
          <svg className='mx-auto h-12 w-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <p className='mt-1 text-sm text-gray-500'>Kliknij, aby dodać zdjęcie</p>
          <p className='text-xs text-gray-400 mt-1'>PNG, JPG, GIF do 5MB</p>
        </div>

        <input type='file' ref={fileInputRef} onChange={handleFileChange} accept='image/*' className='hidden' />
      </div>

      {isUploading && (
        <div className='mt-2'>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div className='bg-blue-600 h-2.5 rounded-full transition-all duration-300' style={{ width: `${uploadProgress}%` }}></div>
          </div>
          <p className='text-sm text-gray-500 mt-1'>Przesyłanie...</p>
        </div>
      )}

      {uploadError && <p className='text-sm text-red-500 mt-1'>{uploadError}</p>}
    </div>
  );
});

// Display name for debugging
ImageUploader.displayName = 'ImageUploader';
