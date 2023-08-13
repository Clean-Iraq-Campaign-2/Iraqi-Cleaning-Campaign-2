'use client';
import {useTranslations} from 'next-intl';
import { HeroSection } from './homePageComponents/HeroSection';
import { UpcommingEventsSection } from '@/app/[locale]/homePageComponents/UpcommingEventsSection';
import { AwernessSection } from './homePageComponents/AwernessSection';
import { StatisticsSection } from './homePageComponents/StatisticsSection';
import { GoalsSection } from './homePageComponents/GoalsSection';
import { BlogSection } from './homePageComponents/blogSection/BlogSection';
import { VideoSection } from './homePageComponents/VideoSection';

export default function Home() {
    const t = useTranslations('Index');
  return (
    <main className=" min-h-screen w-screen items-center justify-center">
      <HeroSection/>
      <UpcommingEventsSection/>
      <AwernessSection/>
      <GoalsSection/>
      <VideoSection/>
      <StatisticsSection/>
      <BlogSection/>
    </main>
  )
}
