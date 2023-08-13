'use client';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import MainButton from './MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {ROUTES} from "../../app/routes";
import { useMediaQuery } from '@react-hook/media-query';
import { useState } from 'react';
import { Logo } from './Logo';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface NavItem {
  text: string;
  link: string;
}
export default function Header() {
  const t = useTranslations('Index');
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const HEADER_NAV =[
    {link:ROUTES.home,text:"الرئيسية"},
    {link:ROUTES.about,text:"من نحن"},
    {link:ROUTES.campaigns,text:"الحملات"},
    {link:ROUTES.contact,text:"تواصل معنا"},
    {link:ROUTES.blog,text:"المدونة"},

  ]
  return (
      <header className='fixed top-0 left-0 bg-gradient-to-b from-gray2 to-transparent bg-opacity-40 backdrop-filter backdrop-blur-sm shadow-md z-50 p-2 w-screen px-10' > 
      {isTabletOrMobile?(
        <div>
        <div className='flex justify-between items-center'>
         <BurgerIcon toggleNav={toggleNav}/>
           <Logo/>
        </div>
        <BoxNav HEADER_NAV={HEADER_NAV} isNavOpen={isNavOpen}/>
        </div>
      ):(
        <div className='flex justify-between items-center'>
          <MainButton text="انضم ويانه" onClick={()=>{router.push(ROUTES.join)}}/>
          <div className='flex items-center gap-6'>
            <InLineNav HEADER_NAV={HEADER_NAV}/>
           <Logo/>
          </div>
        </div>
      )}
      </header>
   
  )
}

const InLineNav = ({ HEADER_NAV }: { HEADER_NAV: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <nav className='flex gap-6'>
      {HEADER_NAV.map((item) => {
         const isActive = pathname === item.link
        return (
          <Link href={item.link} key={item.link} className= {`font-medium text-lg hover:text-secondary ${isActive ? 'text-secondary' : 'text-light'}`} >{item.text}</Link>
      )})}
    </nav>
  );
};


const BoxNav = ({ HEADER_NAV ,isNavOpen}: { HEADER_NAV: NavItem[] ,isNavOpen:boolean}) => {
  return (
  <nav className='absolute mt-10 top-0'>
      
        <div className={`flex flex-col p-6 text-center bg-white shadow-md rounded-lg ${isNavOpen ? 'block' : 'hidden'}`}>
          {HEADER_NAV.map((item) => {
             
            return (
            <Link key={item.text} href={item.link} className="text-gray1 hover:text-primary">
            {item.text}
          </Link>
      )})}  
        </div>
 </nav>
  );
};
const BurgerIcon=({toggleNav}:{toggleNav:()=>void})=>{
  return (<FontAwesomeIcon icon={faBars} size="lg" onClick={toggleNav} color='white'/>)
}



