import React from 'react'
import CampaignMessageGalleryPhotos from './CampaignMessageGalleryPhotos'
import WhoWeAreSectionphoto3 from "../Assets/WhoWeAreSectionphoto3.jpg"
import Image from 'next/image'
import WhoWeAreSectionphoto4 from "../Assets/WhoWeAreSectionphoto4.jpg"
const CampaignMessageSection = () => {
  return (
    <div className='min-h-screen flex flex-col  items-center p-8 pl-9 pr-9 bg-[#faf4f2]  '>
        <CampaignMessageGalleryPhotos />
      <div className='flex w-full mt-[1rem] '>
        <div className='flex flex-col w-6/12 justify-end text-right items-end   '>
        <div className='w-[6rem] h-[3rem] bg-[#3FACE3] rounded-[30px]'><h1 className='text-white text-center mt-[0.6rem]'>معلومات </h1></div>

            <div className='items-center'>
                <h1 className='text-[2.2rem] mt-[1rem] text-[#3FACE3] font-bold'>رسالة الحملة</h1>
                <p className='mt-[1rem]'>كلنا نكدر نصنع تغيير ايجابي ولازم نتعاون ونسعى من اجل عراق انظف واجمل</p>
                <div className='flex justify-center items-center text-center mt-[2rem] '>
                    <div className='flex flex-col items-center justify-center text-center mr-[3rem]'>
                        <h1 className='text-[1rem] font-bold '>المشاركين</h1>
                        <h1 className='text-[#3FACE3] font-bold text-[1.4rem] mt-[1rem]'>800+</h1>
                    </div>
                    <div className='flex flex-col items-center  bg '>
                        <h1 className='text-[1rem] font-bold '>المناطق التي تم تنظيفها</h1>
                        <h1 className='text-[#3FACE3] font-bold text-[1.4rem] mt-[1rem]'>10+</h1>
                    </div>
                </div>
                <h1 className='text-[2.2rem] mt-[1rem] text-[#3FACE3] font-bold'>الخطوة القادمة</h1>
                <p className='mt-[1rem]'>فريقنا مستمر بتوسيع المشروع وتنظيم فعاليات تخلي يوم الحملة يكون فرحة واحتفال كبير بالنظافة والانجازات الي يحققوها #سفراء_النظافة يوميا</p>
                <div className='flex flex-col justify-center items-center text-center '>
                    <h1 className='text-[1.9rem] mt-[1rem] text-black font-bold'>تاريخ التجمع</h1>
                    <h1 className='text-[1.2rem] mt-[1rem] text-[#3FACE3] font-bold' >الجمعة</h1>
                
                </div>
                <h1 className='text-[2.2rem] mt-[1rem] text-[#3FACE3] font-bold'>لمناطق</h1>
                <div className='flex justify-center '>
                    <h1 className='text-[1.2rem] font-bold '>موصل</h1>
                    <h1 className='text-[1.2rem] font-bold ml-[2rem]'>بصرة</h1>
                    <h1 className='text-[1.2rem] font-bold ml-[2rem]'>بغداد</h1>
                </div>
            </div>
            <div className='w-[6.5rem] h-[3rem] bg-[#69B184] rounded-[30px] mt-[4rem]'><h1 className='text-white text-center mt-[0.6rem]'>اعرض المزيد</h1></div>
        </div>
        <div className='w-6/12	  flex  justify-first  ml-[10rem] items-start   '>
            <div className='w-[23rem] h-[32rem]  bg-black relative flex justify-center items-center'>
                <Image  src={WhoWeAreSectionphoto3} alt="picture" className='h-full w-full' />
                <Image src={WhoWeAreSectionphoto4} alt='picture2' className='absolute w-11/12 h-11/12 border-[0.5rem] bottom-[0.9rem] left-[8.2rem]  ' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignMessageSection
