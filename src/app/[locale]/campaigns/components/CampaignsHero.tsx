import Image from "next/image"
import HeroImage from "../assets/campigns_hero.jpeg";
import MainButton from "@/global/components/MainButton";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
import { cities } from "@/global/utils/cities";

export const CampaignsHero = () => {
  const t = useTranslations('Index');
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const HERO_CONTENT={
  title:"وين تريد الحملة القادمة؟",
  subTitle:"اقترح مكان تشوفة يحتاج حملة"
}

  return (
    <section className=" relative w-screen h-96 md:h-[40rem] text-light text-end">
    <Image src={HeroImage} alt="" className=" absolute  w-full h-full object-cover"/>
    <div className=" absolute top-0 w-full h-full bg-black bg-opacity-50 "></div>
    <div className="absolute my-20 md:my-32 top-0 w-full">
        <Container>
            <div className="flex  flex-col-reverse gap-10  items-center md:flex-row justify-between">
                <div className="flex flex-col  gap-5 items-end w-full px-10 md:w-[40%]">
                    <select className="w-full  py-2 rounded-lg bg-transparent text-end border border-white focus:outline-none focus:border-secondary">
                        {cities.map(item=>(<option key={item} value={item}>{item}</option>))}
                    </select>
                      <textarea
                        className="w-full px-4 py-2 rounded-lg bg-transparent text-end placeholder:text-light border border-white focus:outline-none focus:border-secondary"
                        rows={3}
                        placeholder="التفاصيل"
                        />
                    <MainButton text="ارسل" onClick={()=>{}}/>
                        
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end  px-4 md:px-20  text-center md:text-end">
                    <h1 className="text-2xl md:text-4xl ">{HERO_CONTENT.title}</h1>
                    <p className="text-xs md:text-xl font-normal ">{HERO_CONTENT.subTitle}</p>
                </div>
            </div>
    </Container>
  </div>
    </section>
  )
}