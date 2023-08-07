import React from 'react'
import Image from 'next/image';
import WhoWeAreSectionphoto1 from "../Assets/WhoWeAreSectionphoto1.jpg"
import WhoWeAreSectionphoto2 from "../Assets/WhoWeAreSectionphoto2.jpg"
import WhoWeAreSectionphoto3 from "../Assets/WhoWeAreSectionphoto3.jpg"
import WhoWeAreSectionphoto4 from "../Assets/WhoWeAreSectionphoto4.jpg"
import litter from "../Assets/litter.png"
import nolitteringsign from "../Assets/nolitteringsign.png"
import plastic from "../Assets/plastic.png"

const WhoWeAreSection = () => {
  return (
    <section className='min-h-screen  flex flex-col  items-center  p-8 pl-9 pr-9    '>
      <div className='flex justify-center items-center h-full    '>
        <div className='flex flex-col w-6/12 	 overflow-hidden    	 ' >
            <div className='flex flex-wrap justify-center	'>
                <Image src={WhoWeAreSectionphoto1} alt='من نحن؟' className='w-[13rem] h-[17rem] mt-[1.2rem] ' />
                <Image src={WhoWeAreSectionphoto2} alt='من نحن؟' className='w-[13rem] h-[17rem] ml-[1.2rem] ' />
            </div>
            <div className='flex flex-wrap justify-center	'>
                <Image src={WhoWeAreSectionphoto3} alt='من نحن؟' className='w-[13rem] h-[17rem] mt-[1.2rem] ' />
                <Image src={WhoWeAreSectionphoto4} alt='من نحن؟' className='w-[13rem] h-[17rem] ml-[1.2rem] ' />
            </div>
        </div>
        <div className='flex flex-col  text-right w-6/12 overflow-hidden ml-[2rem] 	'>
            <h1 className='text-[2.5rem] font-bold text-[#3FACE3]'>منو سفراء النظافة</h1>
            <h2 className='text-[1.5rem] mt-[2rem] font-bold'>مهمتنا</h2>
            <p className='mt-[1rem]'>هذي الحملة منكم واليكم. اني وانت واحنا كلنا سفراء النظافة اذا نحرص على نظافة هذا البلد ونتعهد</p>
            <div className='flex mt-[2rem] justify-center '>
                <div className='flex flex-col mr-[5rem] '>
                    <Image src={nolitteringsign} alt='nolitteringsign' className='h-[5rem] w-[5rem] text-center' />
                    <h1 className='text-[#3FACE3] text-center'>نساهم بتنظيف  <br /> الاماكن العامه</h1>
                </div>
                <div className='flex flex-col mr-[3rem] '>
                    <Image src={litter} alt='litter' className='h-[5rem] w-[5rem] ' />
                    <h1 className='text-[#3FACE3] text-center'>ما اشمر النفايات ابدا</h1>
                </div>
                <div className='flex flex-col '>
                    <Image src={plastic} alt='plastic' className='h-[5rem] w-[5rem]' />
                    <h1 className='text-[#3FACE3] text-center'>توعية الناس <br /> الي يذبون الزبالة</h1>
                </div>
            </div>
            <h1 className='mt-[2rem] text-[1.1rem] font-bold'>بدت الفكرة وية صديقنا مرتضى التميمي من قرر يطلع ينظف نهر <br /> دجلة حتى يكدر يستمتع بمنظر الغروب من ضفاف النهر</h1>
            <h1 className='mt-[1.5rem] text-[1.1rem] font-bold'>وبعد دعم فريق المحاربين وحملة تشجير تطورت المبادرة و انطلقت حملة #سفراء_النظافة</h1>
            <h1 className='font-bold mt-[1.2rem] text-[2.2rem] text-[#69B184] '>وخلال فترة قصيرة</h1>
            <h1 className='mt-[2rem] text-[1.1rem] font-bold'>وصلت الحملة لاغلب محافظات العراق وشارك بيها مئات الاشخاص من كلا الجنسين وجميع الفئات العمرية</h1>

        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection
