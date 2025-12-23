import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { LogoCarousel } from "@/components/logo-carousel"
import { ChallengesSection } from "@/components/challenges-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingNav } from "@/components/floating-nav"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowToGetStarted } from "@/components/how-to-get-started"
import ServicesComponentMinimal from "@/components/services"
import { OurWorks } from "@/components/our-works"
import { Achievements } from "@/components/achievements"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      <div
        className="relative bg-[#f8fafc] pt-20"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      >
        <HeroSection />
      </div>
      <ProjectShowcase />
      <LogoCarousel />
      <ChallengesSection />
      <WhyChooseUs />
      <HowToGetStarted />
      <ServicesComponentMinimal />
      <OurWorks />
      <Achievements />
      <FAQSection />
      <CTASection />
      <SiteFooter />
    </main>
  )
}
