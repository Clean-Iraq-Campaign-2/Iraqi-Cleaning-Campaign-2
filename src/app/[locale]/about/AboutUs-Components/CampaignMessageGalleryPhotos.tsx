import React from 'react'
import Image from 'next/image'
import email from "../Assets/email.png"
const CampaignMessageGalleryPhotos = () => {
  return (
    <section className='flex h-[9rem] flex-row '>

      <div className='flex flex-col items-center  lg:h-[8rem] lg:w-[9rem] 2sm:h-[5rem] 2sm:w-[6rem] lg:ml-[2rem] mr-[0.5rem] bg-white rounded-[1rem]'>
        <div className='lg:w-[4rem] lg:h-[4rem] 2sm:w-[3rem] 2sm:h-[3rem] rounded-[10rem]  bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='lg:h-[3rem] lg:w-[3rem] 2sm:w-[2rem]  2sm:h-[2rem] lg:ml-[0.5rem] lg:mt-[0.3rem] 2sm:ml-[0.5rem] 2sm:mt-[0.4rem]'   />
        </div>
        <h1 className='text-dark lg:text-[1.2rem] 2sm:text-[0.8rem] font-bold lg:mt-[0.4rem] 2sm:mt-[0.02rem]'>رسالة الحملة</h1>

      </div>
      <div className='flex flex-col items-center  lg:h-[8rem] lg:w-[9rem] 2sm:h-[5rem] 2sm:w-[6rem] lg:ml-[2rem] mr-[0.5rem] bg-white rounded-[1rem]'>
        <div className='lg:w-[4rem] lg:h-[4rem] 2sm:w-[3rem] 2sm:h-[3rem] rounded-[10rem]  bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='lg:h-[3rem] lg:w-[3rem] 2sm:w-[2rem]  2sm:h-[2rem] lg:ml-[0.5rem] lg:mt-[0.3rem] 2sm:ml-[0.5rem] 2sm:mt-[0.4rem]'   />
        </div>
        <h1 className='text-dark lg:text-[1.2rem] 2sm:text-[0.8rem] font-bold lg:mt-[0.4rem] 2sm:mt-[0.02rem]'>رسالة الحملة</h1>

      </div>
      <div className='flex flex-col items-center  lg:h-[8rem] lg:w-[9rem] 2sm:h-[5rem] 2sm:w-[6rem] lg:ml-[2rem] mr-[0.5rem] bg-white rounded-[1rem]'>
        <div className='lg:w-[4rem] lg:h-[4rem] 2sm:w-[3rem] 2sm:h-[3rem] rounded-[10rem]  bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='lg:h-[3rem] lg:w-[3rem] 2sm:w-[2rem]  2sm:h-[2rem] lg:ml-[0.5rem] lg:mt-[0.3rem] 2sm:ml-[0.5rem] 2sm:mt-[0.4rem]'   />
        </div>
        <h1 className='text-dark lg:text-[1.2rem] 2sm:text-[0.8rem] font-bold lg:mt-[0.4rem] 2sm:mt-[0.02rem]'>رسالة الحملة</h1>

      </div>
      
      
    </section>
  )
}

export default CampaignMessageGalleryPhotos
