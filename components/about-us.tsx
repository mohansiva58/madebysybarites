"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Palette, Rocket, Users } from "lucide-react"

const stats = [
  { icon: Rocket, value: 50, suffix: "+", label: "Projects Launched", color: "text-violet-400" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients", color: "text-cyan-400" },
  { icon: Code2, value: 15, suffix: "+", label: "Technologies", color: "text-emerald-400" },
  { icon: Palette, value: 100, suffix: "%", label: "Client Retention", color: "text-amber-400" },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function AboutUsSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#050505] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-violet-400 mb-4">
              About Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              We&apos;re a team that{" "}
              <span className="text-gradient">obsesses</span>{" "}
              over quality
            </h2>
            <p className="mt-6 text-[16px] text-zinc-400 leading-relaxed">
              Sybarites is a premium digital agency specializing in crafting world-class
              web applications, mobile apps, and AI-powered solutions. We combine design
              excellence with engineering precision to build products that don&apos;t just
              look beautiful — they perform.
            </p>
            <p className="mt-4 text-[16px] text-zinc-400 leading-relaxed">
              From hyper-growth startups to established enterprises, we partner with
              ambitious brands who refuse to settle for ordinary. Every pixel, every line
              of code, every interaction is crafted with intention.
            </p>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { title: "Design-First", desc: "Aesthetics that convert" },
                { title: "Pixel Perfect", desc: "Obsessive attention to detail" },
                { title: "Future-Proof", desc: "Scalable architecture" },
                { title: "Results-Driven", desc: "Measurable business impact" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[14px] font-semibold text-white">{item.title}</p>
                  <p className="text-[12px] text-zinc-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative p-7 rounded-2xl bg-[#0a0a0a] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <Icon size={24} className={`${stat.color} mb-4`} strokeWidth={1.5} />
                      <p
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                      </p>
                      <p className="text-[13px] text-zinc-500 mt-2 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Accent line */}
            <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-500 opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
