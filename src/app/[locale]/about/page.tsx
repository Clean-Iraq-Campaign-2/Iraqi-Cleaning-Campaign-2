import React from 'react'
import HeroSection from './AboutUs-Components/HeroSection'
import WhoWeAreSection from './AboutUs-Components/WhoWeAreSection'
import CampaignMessageSection from './AboutUs-Components/CampaignMessageSection'
import WhatDoWeDoSection from "./AboutUs-Components/WhatDoWeDoSection"
import MeetOurTeamSection from "./AboutUs-Components/MeetOurTeamSection"
import NavigationAboutUs from './AboutUs-Components/NavigationAboutUs'

const AboutUs = () => {
  
  return (
    <main className=" min-h-screen pt-27 box-border	scroll-smooth	overflow-x-hidden	 ">
        <HeroSection />
        <WhoWeAreSection />
        <CampaignMessageSection />
        <WhatDoWeDoSection />
        <MeetOurTeamSection />
        
    </main>
  )
}

export default AboutUs
