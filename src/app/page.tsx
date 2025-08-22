import Hero from '@/components/Hero'
import Features from '@/components/Features'
import PlanTeaser from '@/components/PlanTeaser'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PlanTeaser />
      <Testimonials />
      <FAQ 
        maxItems={6}
        className="bg-white dark:bg-gray-800"
      />
    </>
  )
}
