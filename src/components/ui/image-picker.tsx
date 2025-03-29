interface ImagePickerProps {
  imgUrl: string;
  pickImage?: (imgUrl: string) => void;
  removeImage: (imgUrl: string) => void;
  isSelected: boolean;
}

export const ImagePicker = ({ imgUrl, pickImage, removeImage, isSelected }: ImagePickerProps) => {
  return (
    <div className='relative border rounded p-2 group'>
      <img src={imgUrl} alt='Zdjęcie produktu' className={`w-full h-32 object-contain ${isSelected ? 'ring-2 ring-blue-500' : ''}`} />
      <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100'>
        <div className='flex gap-2'>
          {!isSelected && pickImage && (
            <button
              type='button'
              onClick={() => pickImage(imgUrl)}
              className='bg-blue-500 text-white p-1 rounded-full'
              title='Ustaw jako główne zdjęcie'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          )}
          <button type='button' onClick={() => removeImage(imgUrl)} className='bg-red-500 text-white p-1 rounded-full' title='Usuń zdjęcie'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
      {isSelected && <div className='absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br'>Główne</div>}
    </div>
  );
};
