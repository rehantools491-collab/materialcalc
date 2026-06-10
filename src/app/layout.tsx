import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thematerialcalc.com'),
  title: {
    default: 'MaterialCalc — Free Construction Calculators',
    template: '%s | MaterialCalc',
  },
  description:
    'Free construction calculators for homeowners, DIYers, and contractors. Calculate concrete volume, cost, and materials instantly.',
  authors: [{ name: 'Rehan Ilahi' }],
  creator: 'MaterialCalc',
  publisher: 'MaterialCalc',
  openGraph: {
    siteName: 'MaterialCalc',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MaterialCalc — Free Construction Calculators',
      },
    ],
  },
  twitter: { card: 'summary_large_image', creator: '@materialcalc' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
