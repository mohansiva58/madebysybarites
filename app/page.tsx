import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
// import { ProjectShowcase } from "@/components/project-showcase"
import { Case1 as LogoCarousel } from "@/components/logo-carousel"
import { ChallengesSection } from "@/components/challenges-section"
import { SiteFooter } from "@/components/site-footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowToGetStarted } from "@/components/how-to-get-started"
import ServicesComponentMinimal from "@/components/services"
import { OurWorks } from "@/components/our-works"
import AboutUsSection from "@/components/about-us"
import TestimonialsSection from "@/components/testimonials"
import { ClientsReviews } from "@/components/clients-reviews"
import { Achievements } from "@/components/achievements"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      <HeroSection />
      <ServicesComponentMinimal />

      {/* <ProjectShowcase /> */}
      <LogoCarousel />
      <section id="our-works">
        <OurWorks />
      </section>
      <AboutUsSection />
      <ClientsReviews />
      <TestimonialsSection />
      {/* <ChallengesSection /> */}
      {/* <WhyChooseUs /> */}
      {/* <HowToGetStarted /> */}
      
      
      {/* <Achievements /> */}
      <FAQSection />
      <SiteFooter />
    </main>
  )
}
