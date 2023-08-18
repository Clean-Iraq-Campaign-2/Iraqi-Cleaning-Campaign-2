'use client';
import './globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/global/components/Header';
import Footer from '@/global/components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}];
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Load messages synchronously
  let messages;
  let errorOccurred = false;

  try {
    messages = require(`../../messages/${locale}.json`).default;
  } catch (error) {
    errorOccurred = true;
  }

  if (errorOccurred) {
    // Handle error, e.g., redirect to a 404 page
    return null;
  }

  return (
    <html lang="en">
      {/* Head content... */}
      <body className="bg-light font-ibm-plex-sans-arabic">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
