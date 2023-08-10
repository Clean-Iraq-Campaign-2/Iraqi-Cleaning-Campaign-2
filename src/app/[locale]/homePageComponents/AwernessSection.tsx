import Image, { StaticImageData } from "next/image"
import HeroImage from "../homeAssets/potentail-home2.jpeg";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "../../../global/components/Container";

interface AwernessItem {
  title: string;
  image: StaticImageData;
  description:string;
}
export const AwernessSection = () => {
  const t = useTranslations('Index');
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const CONTENT=[
    {title:'نضافة بلدك تبلش من يمك',
    image:HeroImage,
    description:'  مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق '},
    {title:'خطوة خطوة ...سوا سوا',
    image:HeroImage,
    description:'  مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق '},
  ]
  return (
    <section className="w-screen py-10">
    <Container>
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

const SectionRow=({item,index }:{item:AwernessItem,index:number})=>{
    const isOdd = index % 2 !== 0;
    return (
    <div className={`flex ${isOdd ? "flex-row" : "flex-row-reverse"} gap-10`}>
      <Image src={item.image} alt="campaign image" className="w-[45%] rounded-lg" />
       <div className="flex flex-col items-end gap-4  h-full py-10 w-[40%]">
         <h2 className="text-2xl text-primary font-bold">{item.title}</h2>
         <p className="text-lg text-gray1 text-end">{item.description}</p>
        </div>
    </div>
  );
}

const SectionRowMobile=({item,index }:{item:AwernessItem,index:number})=>{
    return ( 
    <div className=" flex flex-col w-full">
      <Image src={item.image} alt="campaign image" className="w-[90%] mx-auto rounded-md " />
       <div className=" flex flex-col gap-4  py-10 w-[80%] rounded-lg my-auto px-5 mx-auto text-center">
         <h2 className="text-2xl text-primary font-bold">{item.title}</h2>
         <p className="text-sm text-gray1">{item.description}</p>
        </div>
    </div>
  );
}
