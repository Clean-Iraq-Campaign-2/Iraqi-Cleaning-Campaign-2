'use client';
import Link from 'next/link';
import logo from '../../../public/logo.jpeg';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import MainButton from './MainButton';
import {ROUTES} from "../../app/routes"

export default function Header() {
  const t = useTranslations('Index');
  const HEADER_NAV =[
    {link:ROUTES.home,text:t("home")},
    {link:ROUTES.about,text:t("about-us")},
    {link:ROUTES.campaigns,text:t("campaigns")},
    {link:ROUTES.contact,text:t("contact-us")},
    {link:ROUTES.blog,text:t("blog")},

  ]

  return (
 
      <header className='fixed top-0 left-0
      flex bg-gradient-to-b from-gray2 to-transparent bg-opacity-40 backdrop-filter backdrop-blur-3xl shadow-md z-50 justify-between p-3 w-screen px-10' > 
      <MainButton text={t("join-us")}/>
      <div className='flex items-center gap-6'> 
      <nav>
        <ul className='flex gap-6 text-light font-semibold text-lg'>
         {HEADER_NAV.map(item=>(<li key={item.text}><Link href={item.link}>{item.text}</Link></li>))}
        
        </ul>
        </nav>
       <Image
        src={logo}
        alt="logo"
        className='rounded-full w-20 h-20'
      />
      </div>  
      </header>
   
  )
}