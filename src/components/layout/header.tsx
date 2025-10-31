'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { routes } from '@/utils/routes';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent to solid header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-white py-5'}`}
    >
      <div className='container-custom'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href={routes.home} className='flex items-center group'>
            <div className='relative'>
              <span className='font-serif text-2xl md:text-3xl font-bold text-chocolate group-hover:text-primary-700 transition-colors duration-300'>
                Torty <span className='heading-fancy text-3xl md:text-4xl'>AGI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link href={routes.home} className='font-medium text-gray-700 hover:text-primary-700 transition-colors relative group py-2'>
              <span>Strona główna</span>
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300'></span>
            </Link>
             <Link href={routes.tortyOkolicznosciowe} className='font-medium text-gray-700 hover:text-primary-700 transition-colors relative group py-2'>
              <span>Torty Okolicznościowe</span>
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300'></span>
            </Link>
            <Link href={routes.oferta} className='font-medium text-gray-700 hover:text-primary-700 transition-colors relative group py-2'>
              <span>Pełna oferta</span>
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300'></span>
            </Link>
            {/* <Link href={routes.realizacje} className='font-medium text-gray-700 hover:text-primary-700 transition-colors relative group py-2'>
              <span>Realizacje</span>
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300'></span>
            </Link> */}
            <Link href={routes.contact} className='btn btn-primary ml-4'>
              Zamów
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-3 rounded-lg bg-white shadow-md text-chocolate hover:bg-primary-50 transition-colors'
            onClick={toggleMenu}
            aria-label='Przełącz menu'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden pt-4 pb-2 space-y-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl mt-4'>
            <Link
              href={routes.home}
              className='block py-3 px-6 hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700 rounded-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              Strona główna
            </Link>
            <Link
              href={routes.tortyOkolicznosciowe}
              className='block py-3 px-6 hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700 rounded-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              Torty okolicznościowe
            </Link>
            <Link
              href={routes.oferta}
              className='block py-3 px-6 hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700 rounded-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              Pełna oferta
            </Link>
            {/* <Link
              href={routes.realizacje}
              className='block py-3 px-6 hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700 rounded-lg'
              onClick={() => setIsMenuOpen(false)}
            >
              Realizacje
            </Link> */}
            <div className='px-6 pt-2 pb-3'>
              <Link href={routes.contact} className='block w-full btn btn-primary text-center' onClick={() => setIsMenuOpen(false)}>
                Zamów
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
