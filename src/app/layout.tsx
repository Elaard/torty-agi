import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getConfig } from '../data/get-page-data';

export const metadata: Metadata = {
  title: 'Torty AGI | Artystyczna Cukiernia',
  description: 'Ręcznie robione torty, ciasta i słodkości przygotowane z pasją i najlepszych składników. Idealne na każdą okazję.',
  keywords: 'cukiernia, torty, ciasta, słodkości, domowe wypieki, artystyczne wypieki, desery',
  authors: [{ name: 'Torty AGI Cukiernia' }],
  openGraph: {
    title: 'Torty AGI | Artystyczna Cukiernia',
    description: 'Ręcznie robione torty, ciasta i słodkości przygotowane z pasją i najlepszych składników.',
    url: 'https://tortyagi.pl',
    siteName: 'Torty AGI Cukiernia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Torty AGI Cukiernia',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  getConfig();

  return (
    <html lang="pl" className="scroll-smooth">
      <body className="bg-white text-gray-900 font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
