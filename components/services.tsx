"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Cpu, Layout, Search, Palette, PenTool, Zap, TrendingUp } from "lucide-react"

const services = [
  [Globe, "Web Development", "Scalable, performant web applications built with modern frameworks."],
  [Smartphone, "App Development", "Native and cross-platform mobile apps with seamless experiences."],
  [Cpu, "AI Applications", "Intelligent solutions that automate, clarify, and create new possibilities."],
  [Palette, "UI/UX Design", "User-centered interfaces where every detail earns its place."],
  [Layout, "Landing Pages", "High-converting pages designed to make the next step obvious."],
  [Search, "SEO Optimization", "Data-driven strategies that grow your visibility over time."],
  [PenTool, "Brand Identity", "Visual systems that give your story a distinct point of view."],
  [Zap, "Rapid MVPs", "Production-ready MVPs that help you validate without compromise."],
  [TrendingUp, "Digital Marketing", "Full-funnel thinking that turns attention into momentum."],
] as const

export default function ServicesSection() {
  return <section id="services" className="bg-white py-28 md:py-36"><div className="section-shell">
    <div className="mb-16 grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-end"><div><p className="eyebrow">Capabilities</p><p className="mt-5 text-sm leading-6 text-muted-foreground">One senior team for the parts that make a product feel inevitable.</p></div><h2 className="max-w-3xl font-display text-5xl leading-[.98] tracking-[-.05em] text-foreground md:text-7xl">The right mix of craft and <span className="text-[#ae8754]">clarity.</span></h2></div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{ visible: { transition: { staggerChildren: .06 } } }} className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
      {services.map(([Icon, title, description], i) => <motion.article key={title} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className={`group border-b border-r border-border p-7 transition-colors hover:bg-[#f7f6f3] ${i === 0 ? "lg:col-span-2" : ""}`}><div className="mb-12 flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span><Icon className="text-[#ae8754]" /></div><h3 className="font-display text-2xl tracking-[-.03em] text-foreground">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{description}</p><div className="mt-8 h-px w-8 bg-[#c8a77a] transition-all group-hover:w-16" /></motion.article>)}
    </motion.div>
  </div></section>
}
