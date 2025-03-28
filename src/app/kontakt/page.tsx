import { contactDetails } from '@/utils/contact-details';

export const metadata = {
  title: 'Kontakt | Torty AGI Cukiernia',
  description: 'Skontaktuj się z nami w sprawie zamówień, pytań lub opinii.',
};

export default function Page() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="heading-1 mb-4">Kontakt</h1>
          <p className="text-gray-600 text-lg">Masz pytanie lub chcesz złożyć zamówienie? Jesteśmy tutaj, aby Ci pomóc!</p>
          <div className="mt-6 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Information Card */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md border border-gray-100">
          <h2 className="heading-2 mb-10 text-center">Dane kontaktowe</h2>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-100 p-5 rounded-full text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Nasza lokalizacja</h3>
              <p className="text-gray-600">{contactDetails.localization}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-100 p-5 rounded-full text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <p className="text-gray-600">
                <a href={`mailto:${contactDetails.email}`} className="hover:text-primary-600 transition-colors">
                  {contactDetails.email}
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-100 p-5 rounded-full text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Telefon</h3>
              <p className="text-gray-600">
                <a href={`tel:${contactDetails.phone}`} className="hover:text-primary-600 transition-colors">
                  {contactDetails.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Map or Location Image */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="font-semibold text-xl mb-6 text-center">Znajdź nas</h3>
            <iframe
              className="m-auto"
              src={contactDetails.googleCompanyLink}
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="font-semibold text-xl mb-6 text-center">Obserwuj nas</h3>
            <div className="flex justify-center space-x-8">
              <a
                href={contactDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-100 p-5 rounded-full text-primary-600 hover:bg-primary-200 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={contactDetails.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-100 p-5 rounded-full text-primary-600 hover:bg-primary-200 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 w-24 h-24 bg-primary-100 rounded-full opacity-50 -z-10 hidden lg:block"></div>
        <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-primary-100 rounded-full opacity-50 -z-10 hidden lg:block"></div>
      </div>
    </div>
  );
}
