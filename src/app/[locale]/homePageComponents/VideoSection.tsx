import Image from "next/image"
import {useTranslations} from 'next-intl';
import { useMediaQuery } from '@react-hook/media-query';
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import StatsBgImage from "../../[locale]/homeAssets/potaintal-home.jpeg";

export const VideoSection = () => {
  const t = useTranslations('Index');
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const VIDEO_URL="https://www.youtube.com/watch?v=opWvTOVqay8"
  return (
    <section className="w-screen relative h-96 my-10  ">
        {/* <Image src={StatsBgImage} alt="" className="absolute w-full h-full object-cover opacity-5"/> */}
      {!isTabletOrMobile?(  <div className=" absolute rounded-xl  w-[40%]   left-1/2 right-10 top-4 bottom-4 my-auto mx-auto object-fill border-8 border-opacity-30"></div>):(<></>)}
        <div className=" absolute rounded-xl overflow-hidden w-full md:w-fit left-0 right-0 top-0 bottom-0 my-auto mx-auto object-fill h-fit">
                <VideoPlayer videoUrl={VIDEO_URL}/>
              </div>
    </section>
  )
}


function VideoPlayer({ videoUrl }:{videoUrl:string}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
      <ReactPlayer
        playing={false}
        url={videoUrl}
        width={500}
        height={270}
        crossOrigin="anonymous"
      />
  );
}