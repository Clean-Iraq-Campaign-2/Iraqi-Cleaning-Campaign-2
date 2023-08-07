'use client'
import React, { use, useState } from 'react'
import personalphoto from '../Assets/personalphoto.jpg'
import Image, { StaticImageData } from 'next/image'
const MeetOurTeamSection = () => {
    type Object = {
        [key: string]: any;
        id?: number;
        photo?:string | StaticImageData;
        name?: string;
        bio?: string;

      };
    const object: Object=[
        {
            id:1,
            photo:personalphoto,
            name:'AzizAhsaan',
            bio:'verygood designer and great techer best we have everknown',
        },
        {
            id:2,
            photo:personalphoto,
            name:'AzizAhsaan',
            bio:'verygood designer and great techer best we have everknown',
        },
        {
            id:3,
            photo:personalphoto,
            name:'AzizAhsaan',
            bio:'verygood designer and great techer best we have everknown',
        },
        {
            id:4,
            photo:personalphoto,
            name:'AzizAhsaan',
            bio:'verygood designer and great techer best we have everknown',
        },
        {
            id:5,
            photo:personalphoto,
            name:'AzizAhsaan',
            bio:'verygood designer and great techer best we have everknown',
        },
        {
            id:6,
            photo:personalphoto,
            name:'AzizAhsaan',
            bio:'verygood designer and great techer best we have everknown',
        },
    ]
    const[photo,setPhoto]=useState(false)
    const [newperson, setNewPerson] = useState<Object>({
        id:0,
        name: "Aziz Ahsaan",
  bio: "verygood designer and great techer best we have everknown",
  photo: personalphoto,
    })
    const changehtml=(photoid:number)=>{
        object.map((person: Object)=>{
            if(person.id===photoid){
                setPhoto(true)
                setNewPerson(person)
            }
        })
    }
  return (
    <div className='min-h-screen flex flex-col  items-center p-8 pl-9 pr-9 bg-[#faf4f2]'> 
      <h1 className='text-[4rem] text-[#3FACE3] font-bold'>التقي بفريقنا</h1>
        {photo===false?(
            <div  className='flex mt-[4rem]'>
            {object.map((person: Object)=>(
                 <div key={person.id} className='w-[13rem] h-[15rem]  flex flex-col  items-center'>
                 <div className='bg-white h-[11rem] w-[11rem] rounded-[13rem]'>
                 {person.photo ? (
                  <Image src={person.photo} alt='photo' className='w-full h-full rounded-[13rem]' />
                ) : (
                  <span>No photo available</span>
                )}
                 </div>
                 <div className='bg-[#69B184] w-[7rem] h-[2.5rem] rounded-[1rem] flex justify-center mt-[1rem]'><button onClick={() => person.id !==undefined && changehtml(person.id)}  className='text-white'>اظهر الملف</button></div>
             </div>
             
            ))}
                  </div>

        ):
        (
                <div className='flex w-full justify-center item'>
                    <div className='w-3/5	flex justify-end items-end '>
                    <div className='   grid grid-cols-3 grid-rows-3 justify-center items-center  '>
                        {object.map((person: Object)=>(
                 <div key={person.id} className=' w-[15rem] h-[15rem]  flex flex-col justify-center items-center  '>
                 <div className='bg-white h-[11rem] w-[11rem] rounded-[13rem]'>
                 {person.photo ? (
                  <Image src={person.photo} alt='photo' className='w-full h-full rounded-[13rem]' />
                ) : (
                  <span>No photo available</span>
                )}
                 </div>
                 <div className='bg-[#69B184] w-[7rem] h-[2.5rem] rounded-[1rem] flex justify-center mt-[1rem]'><button onClick={() => person.id !== undefined && changehtml(person.id)} className='text-white'>اظهر الملف</button></div>
             </div>
             
            ))}
                        </div>
                    </div>
                      
                    <div className='w-2/5 flex justify-start items-start b '>
                        <div className='w-full h-full flex justify-first items-first  relative '>
                            
                            <div className='bg-[#3FACE3] z-10 w-1/6 h-full flex flex-col justify-center rounded-r-[3rem]'></div>
                            <div className='bg-[#eaeaea] z-1 w-full h-full flex flex-col items-center rounded-r-[4rem] absolute overflow-hidden'>
                            <div className='bg-white h-[11rem] w-[11rem] rounded-[13rem]'>
                            {newperson.photo ? (
                  <Image src={newperson.photo} alt='photo' className='w-full h-full rounded-[13rem]' />
                ) : (
                  <span>No photo available</span>
                )}
                 </div>
                            </div>


                        </div>
                    </div>
                    </div>

        )}
    </div>
  )
}

export default MeetOurTeamSection
