import { contactDetails } from '@/utils/contact-details';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Torty AGI',
    alternateName: ['Torty AGI Cukiernia', 'Torty Tarnów', 'Torty AGI Tarnów'],
    description: 'Cukiernia specjalizująca się w domowych tortach na zamówienie w Tarnowie i okolicach. Torty urodzinowe, weselne, komunijne z naturalnych składników. Obsługa Tarnowa, Rzuchowa, Pleśna i całego powiatu tarnowskiego.',
    url: 'https://torty-agi.pl',
    telephone: contactDetails.phone,
    email: contactDetails.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rzuchowa 484',
      addressLocality: 'Rzuchowa',
      addressRegion: 'Małopolskie',
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
    // Główny obszar obsługi - Tarnów i okolice
    areaServed: [
      {
        '@type': 'City',
        name: 'Tarnów',
        '@id': 'https://www.wikidata.org/wiki/Q104997',
      },
      {
        '@type': 'City',
        name: 'Rzuchowa',
      },
      {
        '@type': 'City',
        name: 'Pleśna',
      },
      {
        '@type': 'City',
        name: 'Wierzchosławice',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Powiat Tarnowski',
      },
    ],
    // Dodatkowy GeoCircle dla zasięgu
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 50.0121, // Koordynaty centrum Tarnowa
        longitude: 20.9888,
      },
      geoRadius: '25000', // 25km promień wokół Tarnowa
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
