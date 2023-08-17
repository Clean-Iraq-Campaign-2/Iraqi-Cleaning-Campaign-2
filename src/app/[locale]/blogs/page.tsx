import React from 'react'
import HeroSectionBlogPage from "../blogs/BlogPageComponents/HeroSectionBlogPage"
import LatestUpdates from './BlogPageComponents/LatestUpdates'
const page = () => {
  return (
    <main className=" min-h-screen pt-27 box-border    scroll-smooth    overflow-x-hidden     ">
      <HeroSectionBlogPage />
      <LatestUpdates />
    </main>
  )
}

export default page