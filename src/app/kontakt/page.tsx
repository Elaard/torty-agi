import { Metadata } from 'next';
import { contactDetails } from '@/utils/contact-details';

export const metadata: Metadata = {
  title: 'Kontakt | Torty Tarnów | Zamówienie Tortu | Torty AGI',
  description: 'Zamów tort w Tarnowie i okolicach. Rzuchowa 484 (9 km od Tarnowa). Dostawa tortów w Tarnowie, Rzuchowa, Pleśna. Tel: 668 368 596. Odpisuję tego samego dnia.',
  keywords: 'kontakt torty tarnów, zamówienie tortu tarnów, torty tarnów telefon, cukiernia tarnów kontakt, torty rzuchowa, dostawa tortów tarnów',
  openGraph: {
    title: 'Kontakt | Torty Tarnów | Torty AGI',
    description: 'Zamów tort w Tarnowie. Rzuchowa 484 (9 km od Tarnowa). Dostawa w Tarnowie i okolicach.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://torty-agi.pl/kontakt',
    siteName: 'Torty AGI - Torty Tarnów',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kontakt - Torty Tarnów - Torty AGI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | Torty Tarnów',
    description: 'Zamów tort w Tarnowie i okolicach. Dostawa w Tarnowie, Rzuchowa, Pleśna.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://torty-agi.pl/kontakt',
  },
};

export default function Page() {
  return (
    <div className='py-24 bg-cream min-h-screen'>
      <div className='container-custom'>
        {/* Page Header */}
        <div className='text-center mb-12 max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-chocolate'>Kontakt</h1>
          <div className='h-1 w-20 bg-secondary-500 mx-auto my-6 rounded'></div>
        </div>

        {/* Contact Information Card */}
        <div className='max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md border border-primary-200'>
          <h2 className='text-2xl font-serif font-bold mb-8 text-center text-chocolate'>Dane kontaktowe</h2>

          {/* Contact Info Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
            {/* Location */}
            <div className='flex flex-col items-center text-center'>
              <div className='bg-primary-100 p-4 rounded-full text-primary-700 mb-4 border border-primary-200'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
              <h3 className='font-semibold text-lg mb-2 text-chocolate'>Lokalizacja</h3>
              <p className='text-gray-700 mb-1'>{contactDetails.localization}</p>
              <p className='text-sm text-gray-600'>(9 km od centrum Tarnowa)</p>
            </div>

            {/* Email */}
            <div className='flex flex-col items-center text-center'>
              <div className='bg-primary-100 p-4 rounded-full text-primary-700 mb-4 border border-primary-200'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='font-semibold text-lg mb-2 text-chocolate'>Email</h3>
              <p className='text-gray-700'>
                <a href={`mailto:${contactDetails.email}`} className='hover:text-primary-700 transition-colors'>
                  {contactDetails.email}
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className='flex flex-col items-center text-center'>
              <div className='bg-primary-100 p-4 rounded-full text-primary-700 mb-4 border border-primary-200'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='font-semibold text-lg mb-2 text-chocolate'>Telefon</h3>
              <p className='text-gray-700'>
                <a href={`tel:${contactDetails.phone}`} className='hover:text-primary-700 transition-colors'>
                  {contactDetails.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className='mt-10 pt-8 border-t border-primary-200'>
            <h3 className='font-semibold text-xl mb-6 text-center text-chocolate'>Gdzie mnie znaleźć</h3>
            <iframe
              className='w-full rounded-xl shadow-md'
              src={contactDetails.googleCompanyLink}
              width='600'
              height='450'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          {/* Social Media */}
          <div className='mt-10 pt-8 border-t border-primary-200'>
            <h3 className='font-semibold text-xl mb-6 text-center text-chocolate'>Social media</h3>
            <div className='flex justify-center space-x-6'>
              <a
                href={contactDetails.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary-100 p-4 rounded-full text-primary-700 hover:bg-primary-200 hover:shadow-md transition-all duration-300 border border-primary-200'
                aria-label='Instagram'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
              <a
                href={contactDetails.facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary-100 p-4 rounded-full text-primary-700 hover:bg-primary-200 hover:shadow-md transition-all duration-300 border border-primary-200'
                aria-label='Facebook'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
