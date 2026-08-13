"use client"

import { motion } from "framer-motion"
import {
  Globe, Smartphone, Cpu, Layout, Search, Palette,
  PenTool, Zap, TrendingUp
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable, performant web applications built with modern frameworks. From landing pages to complex platforms.",
    accent: "from-violet-500 to-violet-600",
    size: "large",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
    accent: "from-cyan-500 to-cyan-600",
    size: "small",
  },
  {
    icon: Cpu,
    title: "AI Applications",
    description: "Intelligent solutions powered by machine learning and AI to automate and innovate.",
    accent: "from-emerald-500 to-emerald-600",
    size: "small",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that blends aesthetics with functionality. Pixel-perfect interfaces that convert.",
    accent: "from-pink-500 to-pink-600",
    size: "small",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive action.",
    accent: "from-amber-500 to-amber-600",
    size: "small",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that improve your visibility and organic traffic.",
    accent: "from-blue-500 to-blue-600",
    size: "large",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Comprehensive branding from logos to visual systems that tell your story.",
    accent: "from-rose-500 to-rose-600",
    size: "small",
  },
  {
    icon: Zap,
    title: "Rapid MVPs",
    description: "Launch fast with production-ready MVPs. Validate your idea in weeks, not months.",
    accent: "from-yellow-500 to-yellow-600",
    size: "small",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Full-funnel marketing strategies that grow your online presence and revenue.",
    accent: "from-indigo-500 to-indigo-600",
    size: "small",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#050505] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-violet-400 mb-4">
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Services Built for{" "}
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            End-to-end digital solutions crafted with precision, designed to scale, and built to convert.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const isLarge = service.size === "large"

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isLarge ? "lg:col-span-2" : ""
                }`}
              >
                {/* Card surface */}
                <div className="relative h-full p-7 md:p-8 bg-[#0a0a0a] border border-white/[0.04] rounded-2xl hover:border-white/[0.08] transition-all duration-500 hover:bg-[#0d0d0d]">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.08))",
                    }}
                  />

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} mb-5`}>
                    <Icon size={22} className="text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center gap-2 text-[13px] font-medium text-zinc-500 group-hover:text-violet-400 transition-colors duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}