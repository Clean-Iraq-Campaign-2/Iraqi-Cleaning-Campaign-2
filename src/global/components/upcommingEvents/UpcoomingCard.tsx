import Image from "next/image";
import HeroImage from "../../../app/[locale]/homeAssets/potentail-home2.jpeg";
import { faClock,faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapPin} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UpcommingCard({isEven}:{isEven:boolean}) {
    return (
    <div className="flex w-fit flex-col bg-white rounded-md  bg-opacity-60 overflow-hidden shadow-md">
        <div className={`flex flex-col py-1 text-center text-md md:text-2xl font-bold text-white ${isEven?' bg-gray1':'bg-primary'}`}>
          <p>7 july</p>
          <p>2023</p>
        </div>
        <div className="relative  h-24 md:h-32 w-full ">
           <Image src={HeroImage} alt=""  className="w-full h-full"/>
           <div className="absolute flex justify-end items-end w-full h-full bottom-0 right-0 opacity-80  bg-gradient-to-t from-black to-transparent">
            <span className="flex items-center text-light font-medium  opacity-100 px-4 py-2 gap-2 "><h6>الديوانية</h6> <FontAwesomeIcon icon={faBuilding}/></span>
           </div>
        </div>
        <div className="flex flex-col gap-1 items-end text-gray1 px-6 py-2">
          <h3 className="font-semibold self-center text-sm md:text-xl">جسر ابو نؤاس </h3>
          <div className="flex gap-2 items-center text-sm"> <span> 5:00 pm</span><FontAwesomeIcon icon={faClock} className="text-secondary"/></div>
          <div className="flex gap-2 items-center"> <span className="underline">الموقع</span><FontAwesomeIcon icon={faMapPin} className="text-secondary"/></div>
          <button className="bg-transparent border border-secondary rounded-md text-secondary font-normal px-2 self-center text-md">انضم للحملة</button>
        </div>
      </div>

)
    
}