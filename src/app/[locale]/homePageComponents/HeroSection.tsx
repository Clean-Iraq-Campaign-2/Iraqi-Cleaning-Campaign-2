'use client'
import Image from "next/image"
import HeroImage from "../homeAssets/potentail-home2.jpeg";
import MainButton from "@/global/components/MainButton";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes";

export const HeroSection = () => {
  const t = useTranslations('Index');
  const router = useRouter()
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const HERO_CONTENT={
  title:"مستعد تشارك بالحملة الجاية؟",
  subTitle:"سجل ويانة حتى تكدر تشارك  بالحملة القادمة ",
  buttonText:"انضم ويانة"
}
  return (
    <section className=" relative w-screen h-96 bg-gradient-to-b from-black to-transparent text-white text-end">
    <Image src={HeroImage} alt="" className=" absolute w-full h-full object-cover opacity-80"/>
    <div className="flex flex-col gap-2 items-end absolute px-4 md:px-20 my-40 top-0 right-0 text-end">
       <div className="border py-1 md:py-2 px-2 md:px-8 border-white rounded-md rounded-tl-3xl w-fit">
       <h1 className="text-md md:text-3xl ">{HERO_CONTENT.title}</h1>
       </div>
       <p className="text-xs md:text-lg ">{HERO_CONTENT.subTitle}</p>
      <div className="self-center">
         <MainButton text={HERO_CONTENT.buttonText} onClick={()=>{
          router.push(ROUTES.join)}}/>
      </div>
    </div>
    </section>
  )
}