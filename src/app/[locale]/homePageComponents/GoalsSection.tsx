import Image from "next/image"
import IClean from "../homeAssets/iclen.png";
import IPromise from "../homeAssets/ipromise.png";
import IInspire from "../homeAssets/iinspire.png";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
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
    paragraph:"كل شيء نسبي في الحياة ، ومهما ساءت الأمور فليست شرا كلها ، ولن تجد الناس جميعا يجمعون على أمر واحد  "
    },
    {
      title:"نتعهد",
      Icon:IPromise,
      paragraph:"كل شيء نسبي في الحياة ، ومهما ساءت الأمور فليست شرا كلها ، ولن تجد الناس جميعا يجمعون على أمر واحد عن قضاياه"
    },
    {
    title:"ننضف",
    Icon:IClean,
    paragraph:"كل شيء نسبي في الحياة ، ومهما ساءت الأمور فليست شرا كلها ، ولن تجد الناس جميعا يجمعون على أمر واحد عن قضاياه"
    },
  ]
  return (
    <section className="w-screen pt-20">
        <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center">
            {CONTENT.map((item)=>(
            <div key={item.title} className="flex flex-col gap-4  place-items-center">
               <Image src={item.Icon} alt="icon" className="w-20 h-20"/>
               <h2 className="text-3xl font-semibold text-secondary">{item.title}</h2>
               <p className="px-10 text-center text-gray1">{item.paragraph}</p>
            </div>
            ))}
            </div>
        </Container>
            <div className=" relative w-full h-96  bg-gray4 mt-32 ">
               <Image
        src={StatsBgImage}
        alt=""
        className="absolute w-full h-full object-cover opacity-5"
      />
              <div className=" absolute top-[-70px] rounded-xl overflow-hidden w-full md:w-1/2 left-0 right-0 mx-auto object-fill">
              <ReactPlayer 
              playing={false}
              url={VIDEO_URL}
              width={500}
              height={270}
              />
              </div>
        </div>
    </section>
  )
}