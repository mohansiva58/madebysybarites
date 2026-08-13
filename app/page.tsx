import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import ServicesSection from "@/components/services"
import { OurWorks } from "@/components/our-works"
import AboutUsSection from "@/components/about-us"
import { ProcessSection } from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import { CTAFooter } from "@/components/cta-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      <HeroSection />
      <LogoCarousel />
      <ServicesSection />
      <section id="our-works">
        <OurWorks />
      </section>
      <AboutUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTAFooter />
    </main>
  )
}
