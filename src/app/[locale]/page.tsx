'use client';
import Image from 'next/image'
import {useTranslations} from 'next-intl';
import { HeroSection } from './homePageComponents/HeroSection';
import { UpcommingEventsSection } from '@/app/[locale]/homePageComponents/UpcommingEventsSection';

export default function Home() {
    const t = useTranslations('Index');
  return (
    <main className=" min-h-screen w-screen items-center justify-center">
      <HeroSection/>
      <UpcommingEventsSection/>
    </main>
  )
}
