'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import logo from '../../../public/logo.jpeg';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';
import { ROUTES } from '@/app/routes';
export const Logo = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const router = useRouter()
    
  return (
   <Image
        onClick={() => router.push(ROUTES.home)}
        src={logo}
        alt="logo"
        className={`rounded-full ${isTabletOrMobile ? 'w-10 h-10' : ' w-14 h-14'}`}
      />
  )
}

