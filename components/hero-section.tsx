"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const handleGetStarted = () => {
    const message = "Hi! I'm interested in your services. Let's discuss my project."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919701630276?text=${encodedMessage}`, "_blank")
  }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-[#050505]">
      {/* Animated Background Gradient Mesh */}
      <div className="absolute inset-0">
        {/* Primary glow */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
            animation: "gradient-shift 15s ease-in-out infinite",
          }}
        />
        {/* Cyan accent glow */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
            animation: "gradient-shift-reverse 18s ease-in-out infinite",
          }}
        />
        {/* Subtle center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <Sparkles size={14} className="text-violet-400" />
            <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-zinc-400">
              Premium Digital Agency
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold tracking-[-0.03em] leading-[0.9] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            We Build{" "}
            <span className="text-gradient">Digital</span>
            <br />
            <span className="text-gradient">Experiences</span>{" "}
            That Matter
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            From stunning websites to AI-powered applications, we craft scalable
            products that elevate your brand and drive measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button
              onClick={handleGetStarted}
              className="group relative px-8 py-4 rounded-full text-[15px] font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>

            <a href="#projects">
              <button className="px-8 py-4 rounded-full text-[15px] font-medium text-zinc-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 hover:scale-105">
                View Our Work
              </button>
            </a>
          </motion.div>
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex items-center gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-zinc-500 mt-1">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </div>
  )
}
