import Image, { StaticImageData } from "next/image"
import CampaignImage from "../assets/yello-cleaning.png";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import OutlinedButton from "@/global/components/OutlinedButton";

interface Campaign {
  year: number;
  title: string;
  image: StaticImageData;
  description: string;
  distance: number;
  volunteers: number;
  trashBag: number;
}
export const PreviousCampaign = () => {
  const t = useTranslations('Index');
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const CONTENT:Campaign[] =[
    {year:2022,
    title:"جسر باب المعضم",
    image:CampaignImage,
    description:' مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق ',
    distance:32,
    volunteers:400,
    trashBag:300,
    },
      {year:2022,
    title:"جسر باب المعضم",
    image:CampaignImage,
    description:' مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق ',
    distance:32,
    volunteers:400,
    trashBag:300,
    },
      {year:2022,
    title:"جسر باب المعضم",
    image:CampaignImage,
    description:' مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق ',
    distance:32,
    volunteers:400,
    trashBag:300,
    }
  ]
  return (
    <section className="w-screen py-10">
    <Container>
        <div className="text-end py-10"><SectionTitle text="الحملات السابقة" /></div>
    <div className="flex flex-col gap-10">
     {CONTENT.map((item,index)=>(
      isTabletOrMobile?(<SectionRowMobile key={index} item={item} index={index}/>):
      (<SectionRow key={index} item={item} index={index}/>)
       
     ))}
    </div>
    </Container>
    </section>
  )
}

const SectionRow=({item,index }:{item:Campaign,index:number})=>{
    const isOdd = index % 2 !== 0;
    return (
    <div className={`flex ${isOdd ? "flex-row" : "flex-row-reverse"} gap-10`}>
      <Image src={item.image} alt="campaign image" className="w-[45%] rounded-lg" />
       <div className="flex flex-col items-end gap-4  h-full py-10 w-[40%]">
        <h2 className="text-5xl text-gray3 font-bold opacity-25">{item.year}</h2>
         <h2 className="text-2xl text-gray2 font-bold">{item.title}</h2>
         <div className="flex gap-14">
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.distance}</span>
                <span className="text-gray2">كيلومتر </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.volunteers}</span>
                <span className="text-gray2">متطوع </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.trashBag}</span>
                <span className="text-gray2">كيس نفايات</span>
            </div>
         </div>
         <p className="text-lg text-gray3 text-end">{item.description}</p>
         <OutlinedButton text="تفاصيل" onClick={()=>{}}/>
        </div>
    </div>
  );
}

const SectionRowMobile=({item,index }:{item:Campaign,index:number})=>{
    return ( 
    <div className=" flex flex-col w-full">
      <Image src={item.image} alt="campaign image" className="w-[90%] mx-auto rounded-md " />
       <div className="flex flex-col items-center gap-2  h-full py-6 w-full px-10 text-center">
        <h2 className="text-4xl text-gray3 font-bold opacity-25">{item.year}</h2>
         <h2 className="text-2xl text-gray2 font-bold">{item.title}</h2>
         <div className="flex gap-14">
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.distance}</span>
                <span className="text-gray2">كيلومتر </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.volunteers}</span>
                <span className="text-gray2">متطوع </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.trashBag}</span>
                <span className="text-gray2">كيس نفايات</span>
            </div>
         </div>
         <p className="text-md text-gray3 py-4">{item.description}</p>
         <OutlinedButton text="تفاصيل" onClick={()=>{}}/>
        </div>
    </div>
  );
}
