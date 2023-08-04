'use client';
import Image from 'next/image'
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');
  return (
    <main className=" min-h-screen w-screen items-center justify-center p-24">
    <div className='bg-primary p-10'>{ t("helo")} </div>
    <div className='bg-secondary p-10'> hi </div>
    <div className='bg-light p-10'> hi </div>
    <div className='bg-gray1 p-10'> hi </div>
    <div className='bg-gray2 p-10'> hi </div>
    <div className='bg-gray3 p-10'> hi </div>
    <div className='bg-gray4 p-10'> hi </div>

    </main>
  )
}
