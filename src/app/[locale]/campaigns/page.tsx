'use client';
import {useTranslations} from 'next-intl';
import { CampaignsHero } from './components/CampaignsHero';
import { Upcomming } from './components/Upcomming';
import { PreviousCampaign } from './components/PreviousCampaign';

export default function Campaigns() {
    const t = useTranslations('Index');
  return (
    <main className=" min-h-screen w-screen items-center justify-center overflow-hidden">
      <CampaignsHero/> 
      <Upcomming/>
      <PreviousCampaign/>  
    </main>
  )
}
