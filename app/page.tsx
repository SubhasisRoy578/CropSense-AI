import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { DashboardPreviewSection } from '@/components/sections/dashboard-preview'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { WhyCropSenseSection } from '@/components/sections/why-cropsense'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { FooterSection } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <DashboardPreviewSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyCropSenseSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  )
}
