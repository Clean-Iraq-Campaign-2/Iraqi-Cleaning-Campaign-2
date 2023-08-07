import React from 'react'
import Image from 'next/image'
import email from "../Assets/email.png"
const CampaignMessageGalleryPhotos = () => {
  return (
    <div className='flex h-[9rem] flex-row '>
      <div className='flex flex-col items-center  h-[8rem] w-[9rem] bg-black rounded-[1rem] '>
        <div className='w-[4rem] h-[4rem] rounded-[10rem] bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='h-[3rem] w-[3rem] ml-[0.5rem] mt-[0.3rem] ' />
        </div>
        <h1 className='text-white text-[1.2rem] font-bold mt-[0.4rem]'>رسالة الحملة</h1>
      </div>
      <div className='flex flex-col items-center  h-[8rem] w-[9rem] ml-[2rem] bg-black rounded-[1rem]'>
        <div className='w-[4rem] h-[4rem] rounded-[10rem] bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='h-[3rem] w-[3rem] ml-[0.5rem] mt-[0.3rem]' />
        </div>
        <h1 className='text-white text-[1.2rem] font-bold mt-[0.4rem]'>رسالة الحملة</h1>

      </div>
      <div className='flex flex-col items-center  h-[8rem] w-[9rem] ml-[2rem] bg-black rounded-[1rem]'>
        <div className='w-[4rem] h-[4rem] rounded-[10rem] bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='h-[3rem] w-[3rem] ml-[0.5rem] mt-[0.3rem]' />
        </div>
        <h1 className='text-white text-[1.2rem] font-bold mt-[0.4rem]'>رسالة الحملة</h1>

      </div>
      <div className='flex flex-col items-center  h-[8rem] w-[9rem] ml-[2rem] bg-black rounded-[1rem]'>
        <div className='w-[4rem] h-[4rem] rounded-[10rem] bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='h-[3rem] w-[3rem] ml-[0.5rem] mt-[0.3rem]' />
        </div>
        <h1 className='text-white text-[1.2rem] font-bold mt-[0.4rem]'>رسالة الحملة</h1>

      </div>
      <div className='flex flex-col items-center  h-[8rem] w-[9rem] ml-[2rem] bg-black rounded-[1rem]'>
        <div className='w-[4rem] h-[4rem] rounded-[10rem] bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image src={email} alt='رسالة الحملة' className='h-[3rem] w-[3rem] ml-[0.5rem] mt-[0.3rem]' />
        </div>
        <h1 className='text-white text-[1.2rem] font-bold mt-[0.4rem]'>رسالة الحملة</h1>

      </div>
      
    </div>
  )
}

export default CampaignMessageGalleryPhotos
