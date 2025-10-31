import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LocalBusinessSchema } from '@/components/seo/local-business-schema';
import { FAQSchema } from '@/components/seo/faq-schema';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Torty Tarnów | Torty AGI | Domowe Torty na Zamówienie',
  description: 'Torty na zamówienie w Tarnowie i okolicach. Domowe wypieki z naturalnych składników - torty urodzinowe, weselne, komunijne. Rzuchowa, Pleśna, powiat tarnowski.',
  keywords: 'torty tarnów, cukiernia tarnów, torty na zamówienie tarnów, torty rzuchowa, domowe torty tarnów, tort urodzinowy tarnów, tort weselny tarnów',
  authors: [{ name: 'Torty AGI - Torty Tarnów' }],
  openGraph: {
    title: 'Torty Tarnów | Torty AGI | Domowe Torty na Zamówienie',
    description: 'Torty na zamówienie w Tarnowie i okolicach. Domowe wypieki z naturalnych składników. Dostawa w Tarnowie, Rzuchowa, Pleśna.',
    url: 'https://torty-agi.pl',
    siteName: 'Torty AGI - Torty Tarnów',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Torty Tarnów - Torty AGI',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='pl' className='scroll-smooth'>
      <head>
        <LocalBusinessSchema />
        <FAQSchema />
      </head>
      <body className='bg-white text-gray-900 font-sans'>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
