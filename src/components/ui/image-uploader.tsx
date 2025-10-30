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
  const [uploadError, setUploadError] = useState<string | null>(null);
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
        setUploadError('Tylko pliki graficzne są dozwolone.');
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

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Expose the uploadSelectedFile method to the parent component
  useImperativeHandle(ref, () => ({
    uploadSelectedFile: async () => {
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

      {uploadError && <p className='text-sm text-red-500 mt-1'>{uploadError}</p>}
    </div>
  );
});

// Display name for debugging
ImageUploader.displayName = 'ImageUploader';
