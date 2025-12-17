import React from 'react'
import Hero from '../Components/Hero'
import EventsSection from '../Components/EventsSection'
import FAQSection from '../Components/FaQSection'
import CTASection from '../Components/CTASection'
import OurValuesSection from '../Components/OurValuesSection'
import OurTeamSection from '../Components/OurTeam'
import WhyChooseUsSection from '../Components/WhyChooseUsSection'
import MemoriesSection from '../Components/MemoriesSection'

function HomePage() {
  return (
    <div>
        <Hero />
        <OurValuesSection />
        <WhyChooseUsSection />
        <EventsSection />
        <MemoriesSection />
        {/* <OurTeamSection /> */}
        <FAQSection />
        <CTASection />
    </div>
  )
}

export default HomePage