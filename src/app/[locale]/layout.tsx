import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '@/global/components/Header';
import Footer from '@/global/components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}];
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children, params: {locale}
}: {
  children: React.ReactNode,
    params: { locale: string };

}) {

    let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang="en">
      <body className="bg-light">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header/>
        {children}
        <Footer/>
      </NextIntlClientProvider>
        </body>
    </html>
  )
}
