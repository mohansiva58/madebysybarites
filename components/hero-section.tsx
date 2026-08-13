"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react"
import { useRef } from "react"

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support when it matters" },
]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 110])
  const opacity = useTransform(scrollYProgress, [0, .7], [1, 0])

  const handleStart = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services. Let's discuss my project.")
    window.open(`https://wa.me/919701630276?text=${message}`, "_blank")
  }

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border bg-white pt-32 md:pt-40">
      <div className="section-shell relative min-h-[calc(100vh-2rem)]">
        <motion.div style={{ y, opacity }} className="grid items-end gap-16 pb-20 lg:grid-cols-[1.15fr_.85fr] lg:pb-28">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="eyebrow mb-7 flex items-center gap-2"><Sparkles data-icon="inline-start" /> Code. Design. Deploy.</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .8 }} className="max-w-4xl font-display text-6xl font-semibold leading-[.94] tracking-[-.06em] text-foreground sm:text-7xl md:text-8xl lg:text-[7.6rem]">We make digital products people <span className="text-[#ae8754]">remember.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">From sharp strategy to thoughtful design and clean engineering, we turn ambitious ideas into products with staying power.</motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }} className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={handleStart} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1">Start your project <ArrowUpRight data-icon="inline-end" /></button>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">Explore the work <ArrowDownRight data-icon="inline-end" /></a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .45, duration: .9 }} className="relative min-h-80 overflow-hidden rounded-[1.5rem] border border-border bg-[#f1eee8] p-7 md:p-10">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground"><span>Studio note / 001</span><span>2024—Now</span></div>
            <div className="flex h-full min-h-60 items-end"><p className="max-w-sm font-display text-3xl leading-tight tracking-[-.04em] text-foreground md:text-4xl">Good work is quiet at first. Then it becomes the standard.</p></div>
            <div className="absolute -right-8 -top-8 size-36 rounded-full border border-[#c7b79f]" /><div className="absolute -right-1 -top-1 size-20 rounded-full bg-[#ddcdb5]" />
          </motion.div>
        </motion.div>
        <div className="grid border-t border-border py-6 sm:grid-cols-3">
          {stats.map((stat, i) => <div key={stat.label} className={`flex items-center justify-between gap-4 py-3 sm:px-6 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}><span className="font-display text-3xl tracking-tight text-foreground">{stat.value}</span><span className="max-w-28 text-right text-xs leading-5 text-muted-foreground">{stat.label}</span></div>)}
        </div>
      </div>
    </section>
  )
}
