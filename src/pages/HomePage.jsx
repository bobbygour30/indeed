import React from 'react'
import Banner from '../components/Banner'
import LogoSlider from '../components/LogoSlider'
import CategorySection from '../components/CategorySection'
import FeaturedJobs from '../components/FeaturedJobs'
import JobsByLocation from '../components/JobsByLocation'
import HiringPlatformSection from '../components/HiringPlatformSection'
import StatsCounterSection from '../components/StatsCounterSection'
import TestimonialsSection from '../components/TestimonialsSection'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <LogoSlider />
      <CategorySection />
      <FeaturedJobs />
      <JobsByLocation />
      <HiringPlatformSection />
      <StatsCounterSection />
      <TestimonialsSection />
    </div>
  )
}

export default HomePage
