import { contactDetails } from '@/utils/contactDetails';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige border-t border-primary-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-100 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-100 opacity-20 blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Section */}
          <div className="md:pr-8">
            <h3 className="heading-fancy text-4xl mb-4">Torty AGI</h3>
            <div className="h-1 w-20 bg-accent-500 my-6 rounded-full"></div>
            <p className="text-secondary-600 mb-8 leading-relaxed text-lg">
              Ręcznie robione ciasta i słodkości tworzone z miłością i najlepszych składników. Każdy kęs opowiada naszą historię pasji do wypieków.
            </p>
            <div className="flex space-x-5">
              <a
                href={contactDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-2xl text-primary-400 hover:text-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-primary-100"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={contactDetails.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-2xl text-primary-400 hover:text-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-primary-100"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:border-l md:border-r border-primary-100 md:px-12">
            <h3 className="font-serif font-semibold text-2xl mb-4 text-secondary-600">Odnośniki</h3>
            <div className="h-1 w-20 bg-accent-500 my-6 rounded-full"></div>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-secondary-600 hover:text-primary-600 transition-colors flex items-center group text-lg">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Strona główna</span>
                </Link>
              </li>
              <li>
                <Link href="/produkty" className="text-secondary-600 hover:text-primary-600 transition-colors flex items-center group text-lg">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Produkty</span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-secondary-600 hover:text-primary-600 transition-colors flex items-center group text-lg">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:pl-8">
            <h3 className="font-serif font-semibold text-2xl mb-4 text-secondary-600">Kontakt</h3>
            <div className="h-1 w-20 bg-accent-500 my-6 rounded-full"></div>
            <address className="not-italic space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-lg mr-4 border border-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-secondary-700 mb-1 text-lg">Nasza lokalizacja</p>
                  <p className="text-secondary-600 text-lg">{contactDetails.localization}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-lg mr-4 border border-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-secondary-700 mb-1 text-lg">Email</p>
                  <a href="mailto:info@tortyagi.pl" className="text-secondary-600 hover:text-primary-600 transition-colors text-lg">
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-lg mr-4 border border-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-secondary-700 mb-1 text-lg">Telefon</p>
                  <a href="tel:+48123456789" className="text-secondary-600 hover:text-primary-600 transition-colors text-lg">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-100 mt-12 pt-8 text-center">
          <p className="text-secondary-500">
            © {currentYear} <span className="text-primary-600 font-medium">Torty AGI</span>. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
