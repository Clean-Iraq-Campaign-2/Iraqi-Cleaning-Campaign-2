import Image from 'next/image'
import React from 'react'
import HeroSectionphoto2 from "../Assets/HeroSectionphoto2.jpg"
import HeroSectionphoto3 from "../Assets/HeroSectionphoto3.jpg"
import HeroSectionphoto4 from "../Assets/HeroSectionphoto4.jpg"
import WhoWeAreSectionphoto1 from "../Assets/WhoWeAreSectionphoto1.jpg"
import WhoWeAreSectionphoto2 from "../Assets/WhoWeAreSectionphoto2.jpg"
import WhoWeAreSectionphoto3 from "../Assets/WhoWeAreSectionphoto3.jpg"
import WhoWeAreSectionphoto4 from "../Assets/WhoWeAreSectionphoto4.jpg"

const WhatDoWeDoSection = () => {
  return (
    <div className='min-h-screen  flex flex-col  items-center   p-8 pl-9 pr-9 '>
        <div className='h-1/2 w-full flex justify-center items-center mt-[4rem]'>
            <div className='w-6/12 flex flex-col justify-end text-right items-end  '>
                <div className='w-[17rem] h-[23rem] relative '>
                    <Image src={HeroSectionphoto2} alt='photo1' className='h-full w-full rotate-[-5deg] rounded-[1.2rem]' />
                    <div className='w-[17rem] h-[23rem]'>
                    <Image src={HeroSectionphoto3} alt='photo1' className='w-[15rem] h-[22.4rem] absolute bottom-[1rem] rotate-[1deg] right-[5rem] z-10 rounded-[1.2rem]' />
                </div>
                <div className='w-[17rem] h-[23rem]'>
                    <Image src={HeroSectionphoto4} alt='photo1' className='w-[15rem] h-[22.4rem] absolute bottom-[3rem] rotate-[-5deg] left-[5rem] rounded-[1.2rem]' />
                </div>
                </div>
            </div>
            <div className='w-6/12 flex  relative justify-start  items-first ml-[10rem]'>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto1} alt='photo1' className='w-[11rem] h-[15rem] rounded-[2rem] absolute rotate-[-5deg]' />
                </div>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto2} alt='photo1' className='w-[11rem] h-[15rem] rounded-[2rem] absolute left-[8rem] top-[0.8rem] rotate-[2deg]' />
                </div>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto3} alt='photo1' className='w-[11rem] h-[15rem] rounded-[2rem] absolute left-[15.5rem] rotate-[-5deg] top-[-0.4rem]' />
                </div>
                <div className='w-[10rem] h-[13rem]'>
                    <Image src={WhoWeAreSectionphoto4} alt='photo1' className='w-[11rem] h-[15rem] rounded-[2rem] absolute left-[22rem] top-[0.4rem] rotate-[3deg]' />
                </div>
            </div>

        </div>
        <div className='h-1/2 w-full mt-[4rem] flex flex-col justify-center items-center   '>
        <h1 className=' text-[3.0rem] font-bold text-[#3FACE3] ml-[35rem]    '>شنو الي احنا نسوية؟</h1>

            <div className='flex flex-row justify-center items-center mt-[7.5rem] '>
                
                <div className='flex flex-col w-[24rem] h-[17rem] bg-slate-400 items-center relative'>
                    <div className='w-[9rem] h-[9rem] rounded-[10rem] bg-black absolute bottom-[13rem]'></div>
                </div>
                <div className='flex flex-col w-[24rem] h-[17rem] bg-slate-400 items-center relative ml-[2rem]'>
                    <div className='w-[9rem] h-[9rem] rounded-[30rem] bg-black absolute bottom-[13rem]'></div>
                </div>
                <div className='flex flex-col w-[24rem] h-[17rem] bg-slate-400 items-center relative ml-[2rem]'>
                    <div className='w-[9rem] h-[9rem] rounded-[10rem] bg-black absolute bottom-[13rem]'></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WhatDoWeDoSection
