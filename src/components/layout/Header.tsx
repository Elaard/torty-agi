"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-sm ${
        isScrolled ? "bg-white/90 shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="heading-fancy text-3xl md:text-4xl group-hover:scale-105 transition-transform duration-300 inline-block">
                Torty AGI
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary-300 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-secondary-700 hover:text-primary-600 transition-colors relative group py-2">
              <span>Strona główna</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/produkty" className="font-medium text-secondary-700 hover:text-primary-600 transition-colors relative group py-2">
              <span>Produkty</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/kontakt" className="font-medium text-secondary-700 hover:text-primary-600 transition-colors relative group py-2">
              <span>Kontakt</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/kontakt" className="btn btn-primary ml-4 shadow-lg">
              Zamów teraz
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-secondary-600 hover:bg-primary-50 transition-colors"
            onClick={toggleMenu}
            aria-label="Przełącz menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl mt-4 animate-fade-in">
            <Link
              href="/"
              className="block py-3 px-6 hover:bg-primary-50 transition-colors text-secondary-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Strona główna
            </Link>
            <Link
              href="/kontakt"
              className="block py-3 px-6 hover:bg-primary-50 transition-colors text-secondary-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Produkty
            </Link>
            <Link
              href="/kontakt"
              className="block py-3 px-6 hover:bg-primary-50 transition-colors text-secondary-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="px-6 pt-2 pb-3">
              <Link href="/kontakt" className="block w-full btn btn-primary text-center shadow-lg" onClick={() => setIsMenuOpen(false)}>
                Zamów teraz
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
