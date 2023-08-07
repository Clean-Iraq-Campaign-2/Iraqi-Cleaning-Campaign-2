import React from 'react'
import Image from 'next/image';
import HeroSectionphoto1 from "../Assets/HeroSectionphoto1.jpg"
import HeroSectionphoto2 from "../Assets/HeroSectionphoto2.jpg"
import HeroSectionphoto3 from "../Assets/HeroSectionphoto3.jpg"
import HeroSectionphoto4 from "../Assets/HeroSectionphoto4.jpg"
const HeroSection = () => {
  return (
    <div className='min-h-screen 	 flex flex-col  items-center p-8 pl-9 pr-9 bg-[#faf4f2] '  >
      <div className='flex w-[50rem] h-[30rem] '>
            <div className='flex flex-col w-[28rem] h-full '>
                <div className='w-[28rem] h-[15rem] bg-black'>
                  <Image src={HeroSectionphoto1} alt='photo1'  className='w-full h-full rounded-br-[5rem]' />
                </div>
                <div className='w-[28rem] h-[15rem] flex mt-[1rem]'>
                  <div className='w-[14rem] h-[15rem] border-[1.2rem] border-white'>
                    <Image src={HeroSectionphoto2} alt='روح التطوع تتجسد في طفل نموذجي' className='w-full h-full' />
                    <h2 className='text-black text-[0.7rem] font-bold	 '>روح التطوع تتجسد في طفل نموذجي</h2>
                  </div>
                  <div className='w-[14rem] h-[9rem]'><Image src={HeroSectionphoto3} alt='العطاء يبتسم:الشخص الكبير يلهم بالنموذج والتفاني' className='w-full h-full rounded-b-[2.5rem]'/></div>
                </div>
            </div>
            <div className='w-[20rem] h-full ml-[2rem]'>
              <Image src={HeroSectionphoto4} alt='"صورة للإلهام: أرواح المئات تجتمع لتنظيف البيئة بابتسامة تشجع على التطوع ومحاربة التلوث بقلوب متلألئة بالأمل والعمل الجماعي."' className='w-full rounded-b-[7.5rem]' />
              <h1 className='font-bold text-[0.9rem] text-white'>"صورة للإلهام: أرواح المئات تجتمع لتنظيف البيئة بابتسامة تشجع على التطوع ومحاربة التلوث بقلوب متلألئة بالأمل والعمل الجماعي."</h1>
            </div>
                  <div className="relative bg-blue-800 h-1/2 rounded-bl-3xl rounded-br-3xl"></div>
      </div>
      
    </div>
    
  )
}

export default HeroSection
