"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { DotPattern } from "./dot-pattern"

const testimonials = [
  {
    quote: "madebysybarites turned the impossible into possible and redefined our expectations of technology partners.",
    author: "mohan",
    title: "CEO, TFS",
  },
  {
    quote: "madebysybarites didn't just help us build our vision — they helped us build our future.",
    author: "siva",
    title: "CEO, Fluent Pro",
  },
]

const avatars = ["/avatar-1.jpg", "/avatar-2.jpg", "/avatar-3.jpg"]

export function HeroSection() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 pt-12 md:pt-20 pb-24">

        {/* Dots Background */}
        <div
          className="absolute inset-x-0 top-0"
          style={{ height: "calc(100% - 420px)", paddingLeft: "90px", paddingRight: "90px" }}
        >
          <div className="relative w-full h-full">
            <DotPattern width={15} height={15} cx={1} cy={1} cr={1} className="text-neutral-400/30" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 0) 15%, rgba(248, 250, 252, 0) 85%, rgba(248, 250, 252, 1) 100%), linear-gradient(to top, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 0) 30%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* ======================= SIDE FLOATING TESTIMONIAL — LEFT ======================= */}
        <div
          className={cn(
            "hidden xl:block absolute left-4 top-[258px] transition-all duration-700 ease-out z-10",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
          )}
          style={{ transitionDelay: "400ms" }}
        >
          {/* BACK LAYER TO MATCH IMAGE */}
          <div className="absolute top-2 left-2 w-full h-full bg-white-900 rounded-[32px] shadow-md" style={{ transform: "rotate(-10deg)" }}></div>

          {/* FRONT CARD */}
          <div
            className="relative bg-white rounded-[32px] shadow-xl px-6 py-4 max-w-[300px] border border-gray-200"
            style={{ transform: "rotate(-15deg)" }}
          >
            <span className="absolute top-4 right-6 text-4xl text-gray-300 font-serif leading-none">"</span>

            <p className="text-[15px] text-gray-700 leading-[1.6]">
              "{testimonials[0].quote}"
            </p>

            <p className="mt-5 text-[15px] text-gray-900 font-semibold">
              – {testimonials[0].author}, {testimonials[0].title}
            </p>
          </div>
        </div>

        {/* ======================= SIDE FLOATING TESTIMONIAL — RIGHT ======================= */}
        <div
          className={cn(
            "hidden xl:block absolute right-4 top-[258px] transition-all duration-700 ease-out z-10",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
          )}
          style={{ transitionDelay: "500ms" }}
        >
          {/* BACK LAYER */}
          <div className="absolute top-2 left-2 w-full h-full bg-gray-200 rounded-[32px] shadow-md" style={{ transform: "rotate(20deg)" }}></div>

          {/* FRONT CARD */}
          <div
            className="relative bg-white rounded-[32px] shadow-xl px-6 py-4 max-w-[280px] border border-gray-200"
            style={{ transform: "rotate(15deg)" }}
          >
            <span className="absolute top-4 right-6 text-4xl text-gray-300 font-serif leading-none">"</span>

            <p className="text-[15px] text-gray-700 leading-[1.6]">
              "{testimonials[1].quote}"
            </p>

            <p className="mt-5 text-[15px] text-gray-900 font-semibold">
              – {testimonials[1].author}, {testimonials[1].title}
            </p>
          </div>
        </div>

        {/* ======================= MAIN HERO CONTENT ======================= */}
        <div className="relative">
          <div className="flex flex-col items-center text-center max-w-[750px] mx-auto">

            {/* Availability Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-white shadow-sm mb-10 transition-all duration-500 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
              )}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-foreground font-medium">Made by Sybarites</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Headline */}
            <h1
              className={cn(
                "text-[2.5rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="inline-flex items-center gap-4 flex-wrap justify-center">
                Building the Future of
                <Image
                  src="/hero-icons/figma.png"
                  alt="Figma Logo"
                  width={80}      // increase actual image width
                  height={80}     // increase actual image height
                  className="w-10 h-10 md:w-14 md:h-14 inline-block object-contain"
                />
              </span>
              <br />
              <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                Digital Products From
                <Image
                  src="/hero-icons/supabase.png"
                  alt="Supabase Logo"
                  width={36}     // matches w-9
                  height={36}    // matches h-9
                  className="w-7 h-7 md:w-9 md:h-9 inline-block object-contain"
                />
                Zero to One
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={cn(
                "mt-6 text-base md:text-lg text-muted-foreground max-w-[600px] leading-relaxed transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "200ms" }}
            >
              We help visionary founders turn complex ideas into <span className="text-foreground font-medium">minimal, high-performance products</span>. Built for speed, designed for impact, and engineered to scale.
            </p>

            {/* CTA Button */}
            <div
              className={cn(
                "mt-8 transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "300ms" }}
            >

              <Button
                onClick={() => router.push("/contact")}
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-3 pl-5 pr-7 py-7 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Connect us
              </Button>
            </div>

            {/* Social Proof */}
            <div
              className={cn(
                "mt-8 flex flex-col items-center gap-3 transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden bg-muted shadow-sm"
                    >
                      <Image
                        src={avatar}
                        alt={`Client ${i + 1}`}
                        width={44}
                        height={44}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full border-[3px] border-white bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shadow-sm">
                    +30
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].length > 0 &&
                    [...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                    ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground ml-[50px] self-start">
                From 30+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
