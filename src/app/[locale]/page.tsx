'use client';
import Image from 'next/image'
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');
  return (
    <main className=" min-h-screen w-screen items-center justify-center p-24">
    </main>
  )
}
