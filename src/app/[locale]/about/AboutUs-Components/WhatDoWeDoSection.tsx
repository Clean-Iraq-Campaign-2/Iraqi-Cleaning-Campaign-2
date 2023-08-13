    import Image from 'next/image'
import React from 'react'
import HeroSectionphoto2 from "../Assets/HeroSectionphoto2.jpg"
import HeroSectionphoto3 from "../Assets/HeroSectionphoto3.jpg"
import HeroSectionphoto4 from "../Assets/HeroSectionphoto4.jpg"
import WhoWeAreSectionphoto1 from "../Assets/WhoWeAreSectionphoto1.jpg"
import WhoWeAreSectionphoto2 from "../Assets/WhoWeAreSectionphoto2.jpg"
import WhoWeAreSectionphoto3 from "../Assets/WhoWeAreSectionphoto3.jpg"
import WhoWeAreSectionphoto4 from "../Assets/WhoWeAreSectionphoto4.jpg"
import regulatory from "../Assets/regulatory.png"
import savetheplanet from "../Assets/savetheplanet.png"
import trashcollector from "../Assets/trashcollector.png"
import styles from "../Assets/css.module.css"
const WhatDoWeDoSection = () => {
  return (
    <section id='WhatWeDo' className='min-h-screen  flex flex-col  items-center   p-8 pl-9 pr-9 bg-[#fbfbfbd9] '>
        <div className='h-1/2 w-full flex justify-center items-center mt-[4rem]'>
            <div className='w-6/12 flex flex-col  justify-end text-right items-end xl:ml-[1trem] lg:mr-[5rem] xl:inline lg:inline	md:hidden  2sm:hidden	  '>
                <div className='xl:w-[16rem] xl:h-[23rem] lg:w-[14rem] lg:h-[21rem] md:w-[12rem] md:h-[19rem] 2sm:w-[7rem] 2sm:h-[10rem] xl:mr-[10rem] lg:mr-[20rem] md:ml-[10rem] relative '>
                    <Image src={HeroSectionphoto2} alt='photo1' className='h-full w-full rotate-[-5deg] rounded-[1.2rem]' />
                    <div className='w-full h-full'>
                    <Image src={HeroSectionphoto3} alt='photo1' className='xl:w-[13rem] xl:h-[21rem] lg:w-[12rem] lg:h-[18rem] md:w-[10rem] md:h-[16rem] 2sm:w-[6rem] 2sm:h-[9rem] absolute bottom-[-2rem] rotate-[3deg] xl:right-[8rem] lg:right-[5rem] md:right-[3rem] 2sm:right-[2rem] z-10 rounded-[1.2rem]' />
                </div>
                <div className='h-full w-full'>
                    <Image src={HeroSectionphoto4} alt='photo1' className='xl:w-[13rem] xl:h-[21rem] lg:w-[12rem] lg:h-[18rem] md:w-[10rem] md:h-[16rem] 2sm:w-[6rem] 2sm:h-[9rem] absolute bottom-[1rem] rotate-[-5deg] xl:left-[8rem] lg:left-[8rem] md:left-[7rem] 2sm:left-[4rem] 2sm:top-[1rem] rounded-[1.2rem]' />
                </div>
                </div>
            </div>
            <div className='w-6/12 flex  relative justify-start  items-first xl:mr-[1rem] lg:mr-[5rem] md:mr-[5rem] 2sm:ml-[1rem]'>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto1} alt='photo1' className='xl:w-[11rem] xl:h-[15rem] lg:w-[9rem] lg:h-[13rem] md:w-[11rem] md:h-[14rem] 2sm:w-[6rem] 2sm:h-[8rem] rounded-[2rem] absolute xl:ml-[8rem] lg:ml-[6rem]  md:left-[-7rem] 2sm:left-[3rem]  rotate-[-5deg]' />
                </div>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto2} alt='photo1' className='xl:w-[11rem] xl:h-[15rem] lg:w-[9rem] lg:h-[13rem] md:w-[11rem] md:h-[14rem] 2sm:w-[6rem] 2sm:h-[8rem] rounded-[2rem] absolute xl:left-[4rem] lg:ml-[4rem] md:left-[2rem] 2sm:right-[3rem] top-[0.8rem] rotate-[2deg]' />
                </div>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto3} alt='photo1' className='xl:w-[11rem] xl:h-[15rem] lg:w-[9rem] lg:h-[13rem] md:w-[11rem] md:h-[14rem] 2sm:w-[6rem] 2sm:h-[8rem] rounded-[2rem] absolute xl:left-[15.5rem]  md:left-[20.5rem] 2sm:left-[7.0rem] rotate-[-5deg] top-[-0.4rem]' />
                </div>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto4} alt='photo1' className='xl:w-[11rem] xl:h-[15rem] lg:w-[9rem] lg:h-[13rem] md:w-[11rem] md:h-[14rem] 2sm:w-[6rem] 2sm:h-[8rem] rounded-[2rem] absolute xl:left-[22rem] lg:ml-[2rem] md:left-[12rem] 2sm:right-[8rem] top-[0.4rem] rotate-[3deg]' />
                </div>
            </div>

        </div>
        <div className='h-1/2 w-full xl:mt-[4rem] md:mt-[3rem] md:mr-[3rem] 2sm:mr-[2rem]   flex flex-col justify-center items-center   '>
        <h1 className=' xl:text-[3.0rem] lg:text-[2.5rem] md:text-[2.0rem]   font-bold text-primary xl:ml-[35rem] md:ml-[24rem] 2sm:ml-[7rem] 2sm:mb-[4rem]    '>شنو الي احنا نسوية؟</h1>

            <div className='flex xl:flex-row lg:flex-row md:flex-row 2sm:flex-col justify-center items-center xl:mt-[7.5rem] md:mt-[4.0rem] '>
                <article className={`flex flex-col xl:w-[22rem] xl:h-[17rem] lg:w-[18rem] lg:h-[14rem] md:w-[14rem] md:h-[11rem] 2sm:w-[15rem] 2sm:h-[9rem]  bg-primary items-center relative ml-[2rem] justify-center xl:top-[1rem] md:top-[1rem] lg:top-[1rem] ${styles.tv1}`}>
                    <div className='xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] md:w-[5rem] md:h-[5rem] 2sm:w-[4rem] 2sm:h-[4rem] rounded-[10rem] bg-gray-100 border-[0.1rem] border-black absolute xl:bottom-[13rem] lg:bottom-[10rem] md:bottom-[8rem] 2sm:bottom-[7rem] flex justify-center items-center'>
                        <Image src={regulatory} alt='icon' className='xl:w-[6.5rem] xl:h-[6.5rem] lg:h-[4.5rem] md:w-[3.5rem] md:h-[3.5rem] 2sm:w-[2.5rem] 2sm:h-[2.5rem]' />
                        
                    </div>
                    <h1 className='text-white xl:text-[1.0rem] lg:text-[0.8rem] md:text-[0.6rem] 2sm:text-[0.5rem] 2sm:w-[14rem] text-center font-bold'>المركز يقدم معدات تنظيف لاصحاب المواكب و توعية بأهمية النظافة, تنظيم حملات التنظيم و استقبال المتطوعين</h1>
                </article>
                <article className={`flex flex-col xl:w-[22rem] xl:h-[17rem] lg:w-[18rem] lg:h-[14rem] md:w-[14rem] md:h-[11rem] 2sm:w-[15rem] 2sm:h-[9rem] xl:top-[1rem] 2sm:top-[2rem]  bg-primary items-center relative ml-[2rem] md:top-[1rem] lg:top-[1rem] justify-center ${styles.tv1}`}>
                    <div className='xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] md:w-[5rem] md:h-[5rem] 2sm:w-[4rem] 2sm:h-[4rem] rounded-[10rem] bg-gray-100 border-[0.1rem] border-black absolute xl:bottom-[13rem] lg:bottom-[10rem] md:bottom-[8rem] 2sm:bottom-[7rem] flex justify-center items-center'>
                        <Image src={savetheplanet} alt='icon' className='xl:w-[6.5rem] xl:h-[6.5rem] lg:h-[4.5rem] md:w-[3.5rem] md:h-[3.5rem] 2sm:w-[2.5rem] 2sm:h-[2.5rem]' />
                        
                    </div>
                    <h1 className='text-white xl:text-[1.0rem] lg:text-[0.8rem] md:text-[0.6rem] 2sm:text-[0.5rem] 2sm:w-[18rem]  text-center font-bold'>في اغلب الاوقات يكون اكو مهرجان بنهاية اليوم بعد

التنظيف يتم تقديمه من قبل شركات لابطال الحملة 

من حيث انو تشمل الهدايا و فعاليات الغناء بيناتنا و

جوائز واكيد حته نستمتع بوجبات سريعة سوية!</h1>
                </article>
                <article className={`flex flex-col xl:w-[22rem] xl:h-[17rem] lg:w-[18rem] lg:h-[14rem] md:w-[14rem] md:h-[11rem] 2sm:w-[15rem] 2sm:h-[9rem] 2sm:top-[4rem] xl:top-[1rem]   bg-primary items-center relative ml-[2rem] md:top-[1rem] lg:top-[1rem] justify-center ${styles.tv1}`}>
                    <div className='xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] md:w-[5rem] md:h-[5rem] 2sm:w-[4rem] 2sm:h-[4rem] rounded-[10rem] bg-gray-100 border-[0.1rem] border-black absolute xl:bottom-[13rem] lg:bottom-[10rem] md:bottom-[8rem] 2sm:bottom-[7rem] flex justify-center items-center'>
                        <Image src={trashcollector} alt='icon' className='xl:w-[6.5rem] xl:h-[6.5rem] lg:h-[4.5rem] md:w-[3.5rem] md:h-[3.5rem] 2sm:w-[2.5rem] 2sm:h-[2.5rem]' />
                        
                    </div>
                    <h1 className='text-white xl:text-[1.0rem] lg:text-[0.8rem] md:text-[0.6rem] 2sm:text-[0.5rem] 2sm:w-[14rem] text-center font-bold'>احنا نسوي حملات تنظيف على كل العراق 

من الموصل للبصرة وتصير الحملات يوم الجمعة</h1>
                </article>
           
            </div>
        </div>

    </section>
  )
}

export default WhatDoWeDoSection
