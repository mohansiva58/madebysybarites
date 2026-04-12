"use client"

import { motion } from "motion/react"

export function ProjectsSectionHeader() {
  // Split text into words for staggered animation
  const headlineWords = ["Our Latest", "Web Solutions"]
  const subtitle = "Explore our portfolio of successful projects built for startups and enterprises worldwide"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  }

  return (
    <div className="w-full py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Decorative top accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-[#0958ff] to-[#11c7b7] rounded-full mb-8"
        />

        {/* Headline with word-by-word animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2 mb-6"
        >
          {headlineWords.map((word, idx) => (
            <motion.h2
              key={idx}
              variants={wordVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f1724] leading-tight"
            >
              {word}
            </motion.h2>
          ))}
        </motion.div>

        {/* Subtitle with staggered entrance */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[#475569] max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Decorative gradient shapes - subtle animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -right-20 top-24 w-40 h-40 bg-gradient-to-br from-blue-100 to-teal-50 rounded-full blur-3xl pointer-events-none hidden md:block"
        />
      </div>
    </div>
  )
}
