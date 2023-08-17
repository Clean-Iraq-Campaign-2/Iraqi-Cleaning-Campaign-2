'use client'
import React, { useState,useEffect } from 'react'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter} from 'react-icons/bi'
import Image,{ StaticImageData } from 'next/image'
import morethan1000volunteer from "../BlogAssets/morethan1000volunteer.jpg"
import more15thousand from "../BlogAssets/more15thousand.jpg"
import collectingover10000 from "../BlogAssets/collectingover10000.jpg"

interface Article{
    id:number
    lastestUpdate:string
    paragraph:string
    Image:string | StaticImageData,
    Importance:string
    month: string,
    day:number

}
interface Articles{
    query:string
    list:Article[]|undefined
}
const LatestUpdates = () => {
    const posts:Article[]=[
        {
        id:1,
        lastestUpdate:"شاركونا اكثر من 1000 متطوع! ",
        paragraph:"اجعل فرقًا حقيقيًا وانضم إلى أكثر من 1000 متطوع في حملة تنظيف قد، فرصتك لتحقيق التغيير الإيجابي وترك بصمة رائعة!",
        Image:morethan1000volunteer,
        Importance:"مهم جدا",
        month:"Jun",
        day:23

      },
      {
        id:2,
        lastestUpdate:"وصلنا 15,000 سفير!",
        paragraph:"مليئة بالفخر والامتنان، حملتنا لتنظيف قد وصلت إلى 15,000 سفيرًا، دعونا نستمر معًا في صناعة التغيير الإيجابي!",
        Image:more15thousand,
        Importance:"مهم",
        month:"May",
        day:5
      },
      {
        id:3,
        lastestUpdate:"جمعنا اكثر من 10,000 كيس نفايات!",
        paragraph:"تهانينا لنا جميعًا! جمعنا أكثر من 10,000 كيس نفايات في حملة تنظيف قد، وهذا هو ة قوتنا عندما نكون معًا نحقق التغيير!",
        Image:collectingover10000,
        Importance:"غير مهم",
        month:"Dec",
        day:11
      }
      ]
      const[sortType,setSortType]=useState<"ascending" | "descending">("ascending")
      const [sortByField, setSortByField] = useState<"lastestUpdate" | "paragraph">("lastestUpdate");
      const [result, setResult] =  useState<Article[]>([])
      const[article,setarticle]=useState<Articles>({
        query:'',
        list:posts
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        const results = posts.filter(post => {
          if (query === "") return true;
          return post[sortByField].toLowerCase().includes(query.toLowerCase());
        });
    
        setResult(results);
    
        setarticle({
          query: query,
          list: query ? sortFunc(results, sortType, sortByField) : sortFunc(posts, sortType, sortByField)
        });
    };

    
      function sortFunc(results: Article[], sortType: "ascending" | "descending", sortByField: "lastestUpdate" | "paragraph") {
        if (sortType === "ascending") {
          results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
        } else if (sortType === "descending") {
          results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
        }
        return results;
      }
    
      function updatePosts(e: "ascending" | "descending") {
        setSortType(e);
        setarticle({
            query: article.query,
            list: !article.query ? sortFunc(posts, e, sortByField) : sortFunc(result, e, sortByField)
        });
    }
    
      function sortBy(e: "lastestUpdate" | "paragraph") {
        setSortByField(e);
        setarticle({
            query: article.query,
            list: !result ? sortFunc(posts, sortType, e) : sortFunc(result, sortType, e)
          });
      }
  return (
    <section className='min-h-screen  flex flex-col items-center   p-3 pl-2 pr-2 pb-[3rem] 2xl:w-[60rem] xl:w-[60rem] lg:w-[51rem] md:w-[37rem] 2sm:w-[16.5rem]  mb-[5rem]  mx-auto mt-5 rounded-3xl bg-[#f6f6f6]'>
      <div className='w-full flex flex-col items-center mt-[5rem] '>
      <div className=' w-full h-1/6 flex flex-row justify-between items-center  '>
     <form className='flex 2xl:w-[35rem] xl:w-[35rem] lg:w-[35rem] md:w-[35rem] 2sm:w-[5rem]  justify-first h-full   2xl:flex-row xl:flex-row lg:flex-row md:flex-col 2sm:flex-col'>
        <div className='flex  2xl:w-[5rem] xl:w-[5rem]  lg:w-[5rem] md:w-[5rem] 2sm:w-[6rem]  '>
          <span className='2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem] lg:ml-[1rem] md:text-[1.5rem] 2sm:text-[0.9rem] font-bold  text-end '>بحث</span>
          <input onChange={handleChange} value={article.query} placeholder='اسم المقالة' type="search" className='2xl:h-[2.5rem] 2xl:w-[9rem]  xl:h-[2.5rem] xl:w-[9rem] lg:h-[2.5rem] lg:w-[9rem] md:h-[2.5rem] md:w-[9.05rem] 2sm:h-[1.5rem] 2sm:w-[5rem] 2xl:ml-[1rem] xl:ml-[1rem] lg:ml-[1rem] md:ml-[2.2rem] 2sm:ml-[2.2rem]  '/>          
        </div>
        
        
        <div className='flex items-center flex-row 2xl:mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[1rem] 2sm:mt-[1rem]  2xl:ml-[13rem] xl:ml-[13rem] lg:ml-[13rem] 2sm:w-[10rem] md:w-[16rem] 2xl:w-[16rem] xl:w-[16rem] lg:w-[16rem]   '>
          <span className=' 2xl:text-[1.2rem] xl:text-[1.2rem] md:text-[1.2rem] 2sm:text-[0.8rem]  font-bold 2sm:mt-[0.3rem]   '>فرز حسب</span>
          <select className=' 2xl:h-[2.5rem] 2xl:w-[9rem] xl:h-[2.5rem] xl:w-[9rem] lg:h-[2.5rem] lg:w-[9rem] md:h-[2.5rem] md:w-[9rem] 2sm:h-[1.5rem] 2sm:w-[5rem] 2xl:ml-[1.5rem] xl:ml-[1.5rem] lg:ml-[1.5rem] md:ml-[0.4rem] 2sm:ml-[0.9rem]  ' defaultValue={'DEFAULT'} onChange={(e) => updatePosts(e.target.value as "ascending" | "descending")}>
            <option value="DEFAULT" disabled>ترتيب حسب</option>
            <option value="ascending">تصاعديا</option>
            <option value="descending">تنازليا</option>
          </select>
        </div>
     </form>
     
    <h1 className='2xl:text-[2.5rem] xl:text-[2.5rem] lg:text-[2.5rem] md:text-[2rem] 2sm:text-[1rem]   2xl:w-[20rem] xl:w-[20rem] md:w-[20rem] 2sm:w-[10rem]   font-bold text-[#69B184] text-right 2xl:mr-[2rem] xl:mr-[2rem] lg:mr-[2rem] md:mr-[2rem] 2sm:mr-[0rem]     '>اخر الاحداث</h1>

      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full "></hr>
      {(article.list?.map(post=>{
        return(
            <div className='w-full 2xl:h-5/6 xl:h-5/6 lg:h-5/6 md:h-5/6 2sm:h-[10rem] flex justify-end  items-end mt-[3rem] '>
              <div className='flex flex-col w-full h-full'>
              <div className='h-[18rem]  w-full   flex flex-row'>
            <div className='w-6/12 flex  '>
                <div className='flex flex-col h-full w-2/12 ml-[1rem] 2sm:mt-[0.8rem]   '>
                    <h1 className='2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1.8rem] 2sm:text-[1rem]'>{post.month}</h1>
                    <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 w-[2rem]"></hr>
                    <h1 className='2xl:text-[3rem] xl:text-[3rem] lg:text-[3rem] md:text-[2rem] 2sm:text-[1.5rem]'>{post.day}</h1>
                </div>
                <div className=' w-10/12	 h-full ml-[0.5rem]   '>
                    <Image src={post.Image} alt="morethan1000volunteer" className='2xl:w-full 2xl:h-full xl:w-full xl:h-full lg:w-full lg:h-full md:w-[14rem] md:h-[13rem] 2sm:w-[10rem] 2sm:h-[6rem] 2sm:mt-[1rem]   rounded-[1rem]' />
                </div>
            </div>
            <div className='w-6/12 h-full flex flex-col justify-end items-end   relative'>
         <div className=' h-3/6 mt-[1.5rem] flex flex-col  items-center 2sm:ml-[1rem] 	'>
                   <h1 className='text-[#69B184] font-bold mr-[1rem]  2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem]  md:text-[1rem] 2sm:text-[0.6rem] text-right  '>{post.lastestUpdate}</h1>
                   <p className='text-[#c7c7c7] font-bold 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] 2sm:text-[0.4rem] mr-[0.5rem] mt-[1rem] 2xl:text-right xl:text-right lg:text-right md:text-right 2sm:text-center'>{post.paragraph}</p>
                   <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 2xl:ml-[3rem] xl:ml-[3rem]  lg:ml-[2rem] md:ml-[1.5rem] 2sm:ml-[0rem] w-10/12	 mt-[2rem]	"></hr>

         </div>
<div className='flex flex-row justify-center w-full h-3/6	mb-[2rem]   '>
        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row 2sm:flex-col  justify-center  w-full h-full mt-[1rem] 2sm:ml-[1rem]'>
        <div className='flex 2xl:ml-[4rem] xl:ml-[4rem] lg:ml-[4rem] md:ml-[2rem] 2sm:ml-[1rem] h-full w-full '>
            <a href='https://www.instagram.com/clean.iraq/?hl=en'>< BiLogoInstagram className="2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1rem] 2sm:text-[0.6rem] mr-[0.5rem] text-black" /></a>
            <h1 className=' 2xl:text-[1.1rem] xl:text-[1.1rem] lg:text-[1.1rem] md:text-[0.9rem]  2sm:text-[0.6rem] font-bold '>clean_iraq</h1>
        </div>
        <div className='flex h-full w-full ml-[1rem] 2sm:mb-[5rem]  '>
            <a href='https://www.facebook.com/clean.iraq/'>< BiLogoFacebook className="2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1rem] 2sm:text-[0.6rem] mr-[0.5rem] text-black  " /></a>
            <h1 className=' 2xl:text-[1.1rem] xl:text-[1.1rem] lg:text-[1.1rem] md:text-[0.9rem] 2sm:text-[0.6rem] font-bold '>clean_iraq</h1>
        </div>

        </div>
</div>

            </div>
            


        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full "></hr>

              </div>
    
        
        
      </div>
      
        )
      }))}
      </div>
    
      
    
    </section>
    
  )
}

export default LatestUpdates