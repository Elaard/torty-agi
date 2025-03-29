'use client';
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
  maxW?: string;
  maxH?: string;
  onCancel?: () => void;
}

const cancel = () => null;

export const Modal = ({ children, maxW = 'max-w-2xl', maxH = 'max-h-[90vh]', onCancel = cancel }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onCancel();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onCancel]);

  // Close modal with ESC key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCancel();
      }
    }

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onCancel]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in'>
      <div ref={modalRef} className={`bg-white rounded-lg shadow-xl ${maxW} w-full ${maxH} overflow-y-auto animate-slide-up`}>
        {children}
      </div>
    </div>
  );
};
