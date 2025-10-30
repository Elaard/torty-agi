import { contactDetails } from '@/utils/contact-details';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Torty AGI',
    alternateName: 'Torty AGI Cukiernia',
    description: 'Artystyczna cukiernia specjalizująca się w ręcznie robionych tortach, ciastach i słodkościach. Wszystkie wypieki przygotowywane z najlepszych składników.',
    url: 'https://torty-agi.pl',
    telephone: contactDetails.phone,
    email: contactDetails.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rzuchowa 484',
      addressLocality: 'Rzuchowa',
      postalCode: '33-114',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.94750344707502,
      longitude: 20.938618921034944,
    },
    sameAs: [
      contactDetails.instagram,
      contactDetails.facebook,
    ],
    priceRange: '$$',
    servesCuisine: 'Wypieki',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.94750344707502,
        longitude: 20.938618921034944,
      },
      geoRadius: '50000', // 50km radius
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
