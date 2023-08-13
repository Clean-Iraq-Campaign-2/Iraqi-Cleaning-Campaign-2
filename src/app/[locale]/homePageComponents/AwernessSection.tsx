import Image, { StaticImageData } from "next/image"
import Image1 from "../homeAssets/young man leaning to pick garbige.jpeg";
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "../../../global/components/Container";
import Image2 from "../homeAssets/cleaning-11.jpeg"
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
    image:Image1,
    description:'مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق '},
    {title:'خطوة خطوة ...سوا سوا',
    image:Image2,
    description:'مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق '},
  ]
  return (
    <section className=" relative w-screen py-10">
    {!isTabletOrMobile? (<div className="absolute w-1/3 h-1/3 top-0  z-[-1] bottom-0 my-auto bg-transparent border-gray-1 rounded-2xl border-8 border-opacity-5 left-0 right-0 mx-auto"></div>
     ):(<div></div>)} 
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
    <div style={{direction:"rtl"}} className={`flex ${isOdd ? "flex-row" : "flex-row-reverse"} gap-16 justify-between`}>
      <Image src={item.image} alt="campaign image" className="w-[45%] rounded-lg" />
       <div className={`flex flex-col  gap-4  h-full py-10 w-[50%] ${isOdd?'mt-auto mb-8':'mb-auto mt-8'}`}>
         <h2 className="text-2xl text-primary font-bold">{item.title}</h2>
         <p className="text-xl text-justify text-gray2 ">{item.description}</p>
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
         <p className="text-sm text-gray2">{item.description}</p>
        </div>
    </div>
  );
}
