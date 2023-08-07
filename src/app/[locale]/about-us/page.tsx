import React from 'react'
import HeroSection from './AboutUs-Components/HeroSection'
import WhoWeAreSection from './AboutUs-Components/WhoWeAreSection'
import CampaignMessageSection from './AboutUs-Components/CampaignMessageSection'
import WhatDoWeDoSection from "./AboutUs-Components/WhatDoWeDoSection"
import MeetOurTeamSection from "./AboutUs-Components/MeetOurTeamSection"
const AboutUs = () => {
  return (
    <main className=" min-h-screen    items-center justify-center pt-24 ">
        <HeroSection />
        <WhoWeAreSection />
        <CampaignMessageSection />
        <WhatDoWeDoSection />
        <MeetOurTeamSection />
    </main>
  )
}

export default AboutUs
