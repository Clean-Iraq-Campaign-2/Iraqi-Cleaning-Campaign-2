'use client';
import { useMediaQuery } from '@react-hook/media-query';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '../Logo';
import NewsletterSection from './NewsLetterSection';
import { SocialLinks } from './SocialLinks';
import { FooterColumn } from './FooterColumn';
import {useTranslations} from 'next-intl';

export default function Footer() {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const t = useTranslations('Index');

  const FOOTER_CONTENT={
    social:[
     { icon:faFacebook, link:"hliiudfj'j'adsvdfivnv",},
     { icon:faTelegram, link:"hlihhqa'ewfoafoaf",},
     { icon:faInstagram, link:"hliullsidjfsshds;o",},
    ],
    nav:[{
      title:t("about-cleaning-ampassadors"),
      links:[
        {text:t("about-us"),link:"asassdhs;"},
        {text:t("campaigns"),link:"h;uhhlzxzsdsdskj"},
        {text:t("blog"),link:"hliulili"},
      ]
    },
   {
      title:t("contribute"),
       links:[
        {text:t("join-us"),link:"fheufrhie"},
        {text:t("suggest-a-campaign"),link:"dfvdifv"},
        {text:t("contact-us"),link:"hliulili"},
      ]
    }],
  }
  return (
 
  <footer className="bg-gray1 py-10 w-screen px-5 text-gray4" > 
  {!isTabletOrMobile?( <div className="grid grid-cols-6 gap-4">
   <div className='col-span-2'>
    <NewsletterSection/>
    </div>
  {FOOTER_CONTENT.nav.map(item=>(
  <div key={item.title} className='col-span-1 text-end'>
   <FooterColumn item={item} />
  </div>
  ))}
  <div className="col-span-2 flex gap-4 flex-col items-center">
      <Logo/>
      <SocialLinks content={FOOTER_CONTENT.social}/>
  </div>

</div>):(
<div>
      <SocialLinks content={FOOTER_CONTENT.social}/>
     <FooterDivider/>
  <div className="text-center text-lg space-y-2 ">
    <NewsletterSection/>
  </div>

<FooterDivider/>
  <div className='grid grid-cols-2 gap-2'>
      {FOOTER_CONTENT.nav.map(item=>(
  <div key={item.title} className='col-span-1 text-center'>
   <FooterColumn item={item} key={item.title}/>
  </div>
  ))}
  </div>
</div>)}
      </footer>
  )
}
 const FooterDivider = () => {
  return (
     <hr className='borrder border-gray2 my-2'/>
  )
}
