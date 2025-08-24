import Hero from '@/components/Hero'
import HostingPlans from '@/components/HostingPlans'
import Features from '@/components/Features'
import FreeFeatures from '@/components/FreeFeatures'
import ScalableTechnology from '@/components/ScalableTechnology'
import WhatMakesDifferent from '@/components/WhatMakesDifferent'
import TechnicalSupport from '@/components/TechnicalSupport'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <HostingPlans />
      <Features />
      <FreeFeatures />
      <ScalableTechnology />
      <WhatMakesDifferent />
      <TechnicalSupport />
      <Testimonials />
    </>
  )
}
