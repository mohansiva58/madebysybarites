"use client"

import { useRouter } from "next/navigation"
import { AnimatedHeading } from "./animated-heading"
import { FadeIn } from "./fade-in"

export function HeroSection() {
  const router = useRouter()

  const handleGetStarted = () => {
    // Open WhatsApp with pre-filled message
    const message = "I need a custom digital solution for my business. Let's discuss my project."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919701630276?text=${encodedMessage}`, "_blank")
  }

  const handleViewWork = () => {
    // Navigate to works page
    router.push("/#our-works")
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Content - Flex fill remaining height */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            {/* Left Column - Main Content */}
            <div>
              {/* Heading */}
              <div style={{ letterSpacing: "-0.04em" }}>
                <AnimatedHeading
                  text="Digital Products       Built with Precision"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4 leading-tight"
                  charDelay={30}
                  initialDelay={200}
                  transitionDuration={500}
                />
              </div>

              {/* Subheading */}
              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-300">
                  We craft beautiful, scalable web applications and stunning designs that elevate your brand and drive results.
                </p>
              </FadeIn>

              {/* Buttons Row */}
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  {/* Get Started Button */}
                  <button 
                    onClick={handleGetStarted}
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                  </button>

                  {/* View Our Work Button */}
                  <button 
                    onClick={handleViewWork}
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    View Our Work
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Tag */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Code. Design. Deploy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
