"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Zap } from "lucide-react"

export function ProjectsSectionHeader() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 bg-white text-slate-900 overflow-hidden relative"
    >
      {/* Decorative background blobs - light theme */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0958ff]/8 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#11c7b7]/8 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      {/* Animated floating dots */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-[#11c7b7]/40"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#11c7b7]/30"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center mb-8" variants={itemVariants}>
          <motion.span
            className="text-[#11c7b7] font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Zap className="w-4 h-4" />
            OUR PORTFOLIO
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-center text-slate-900">
            Our Works
          </h2>
          <motion.div
            className="h-1 bg-[#11c7b7] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto text-slate-600"
          variants={itemVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          Check out the projects we've delivered to startups and enterprises. Each one is a testament to our commitment to excellence, innovation, and delivering results that matter.
        </motion.p>
      </motion.div>
    </section>
  )
}
