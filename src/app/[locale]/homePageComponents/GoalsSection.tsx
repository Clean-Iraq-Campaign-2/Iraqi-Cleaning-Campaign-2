import Image from "next/image"
import IClean from "../homeAssets/iclen.png";
import IPromise from "../homeAssets/ipromise.png";
import IInspire from "../homeAssets/iinspire.png";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import StatsBgImage from "../../[locale]/homeAssets/potaintal-home.jpeg";

export const GoalsSection = () => {
  const t = useTranslations('Index');
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const VIDEO_URL="https://www.youtube.com/watch?v=opWvTOVqay8"
  const CONTENT=[
    {
    title:"نلهم",
    Icon:IInspire,
    paragraph:"الهدف من حملات التنضيف هو ايصال رسالة لكل شخص  يرمي النفايات في الشارع والانهار والتوعية بهذا الشان"
    },
    {
      title:"نتعهد",
      Icon:IPromise,
      paragraph:"نحن لا نهدف الى عمل حملات ولكن الى زرع عادات فينا ونتعهد بالاستمرار"
    },
    {
    title:"ننضف",
    Icon:IClean,
    paragraph:"نحاول دائما جعل ما حولنا نضيف نبدا من البيت وننتهي ببلد اجمل "
    },
  ]
  return (
    <section className="w-screen py-24">
        <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center bg-primary bg-opacity-5 py-10 rounded-xl">
            {CONTENT.map((item)=>(
            <div key={item.title} className="flex flex-col gap-4  place-items-center">
               <Image src={item.Icon} alt="icon" className="w-20 h-20"/>
               <h2 className="text-3xl font-semibold text-secondary">{item.title}</h2>
               <p className="px-10 md:px-20 text-center text-gray1">{item.paragraph}</p>
            </div>
            ))}
            </div>
        </Container>
    </section>
  )
}


