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
    <section className="w-screen relative h-[36rem] ">
      {!isTabletOrMobile?(  <div className=" absolute rounded-xl  w-[70%] left-1/2 right-0 top-4 bottom-4 my-auto mx-auto object-fill border-8 border-opacity-30"></div>):(<></>)}
        <div className=" absolute rounded-xl overflow-hidden w-full md:w-1/2 left-0 right-0 top-0 bottom-0 my-auto mx-auto object-fill h-fit">
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
        width="100"
        height={400}
        crossOrigin="anonymous"
      />
  );
}