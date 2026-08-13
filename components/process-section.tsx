"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your business goals, target audience, and competitive landscape. Through collaborative workshops, we define the vision, scope, and success metrics for your project.",
    accent: "#8B5CF6",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Prototype",
    description: "Our designers craft pixel-perfect UI/UX with wireframes and interactive prototypes. Every screen is designed for conversion, accessibility, and visual impact before a single line of code is written.",
    accent: "#06B6D4",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development & Testing",
    description: "We build with modern tech stacks, clean architecture, and rigorous testing. Bi-weekly sprints keep you in the loop with demos and feedback cycles throughout the entire development process.",
    accent: "#10B981",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Growth",
    description: "We handle deployment, performance optimization, and analytics setup. Post-launch, we provide ongoing support, maintenance, and growth consulting to ensure lasting success.",
    accent: "#F59E0B",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/3 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-emerald-400 mb-4">
            Our Process
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            How We{" "}
            <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            A proven, transparent process that takes your idea from concept to launch with zero surprises.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-cyan-500/20 to-transparent md:-translate-x-px" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-4 h-4 rounded-full border-2"
                      style={{ borderColor: step.accent, backgroundColor: "#050505" }}
                    >
                      <div
                        className="absolute inset-0 rounded-full animate-pulse-ring"
                        style={{ backgroundColor: step.accent, opacity: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-20 md:ml-0 md:w-[45%] ${isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="group p-7 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                      {/* Step number & icon */}
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-xl"
                          style={{ backgroundColor: `${step.accent}15` }}
                        >
                          <Icon size={22} style={{ color: step.accent }} strokeWidth={1.5} />
                        </div>
                        <span
                          className="text-5xl font-bold opacity-10"
                          style={{ fontFamily: "var(--font-syne)", color: step.accent }}
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
