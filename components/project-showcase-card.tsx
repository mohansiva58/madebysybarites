"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

interface ProjectShowcaseCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  metrics?: {
    label: string
    value: string
  }[]
  live?: string
  github?: string
  featured?: boolean
}

export function ProjectShowcaseCard({
  title,
  description,
  image,
  tags,
  metrics,
  live,
  github,
  featured = false,
}: ProjectShowcaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Card Background - Light gradient */}
      <div className="relative bg-white overflow-hidden rounded-2xl light-shadow-card hover:light-shadow-hover transition-all duration-300">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-[#f0fdf9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 50vw"}
            loading="lazy"
            quality={85}
          />

          {/* Light Gradient Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#0958ff]/8 via-transparent to-transparent"
          />

          {/* Image Border Glow on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 border border-[#11c7b7]/20 rounded-2xl pointer-events-none"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f1724] leading-tight">
              {title}
            </h3>
            <p className="text-base text-[#475569] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Metrics (Trust Signals) */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#f0f7ff] to-[#f0fdf9] p-3 rounded-xl border border-[#11c7b7]/20"
                >
                  <p className="text-xs text-[#475569] font-medium uppercase tracking-wider">
                    {metric.label}
                  </p>
                  <p className="text-lg font-bold text-[#0f1724] mt-1">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1.5 bg-gradient-to-r from-[#f0f7ff] to-[#f0fdf9] border border-[#11c7b7]/20 text-xs font-semibold text-[#0958ff] rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          {(live || github) && (
            <div className="flex flex-wrap gap-3 pt-4">
              {live && (
                <motion.a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0958ff] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-floating group/btn"
                >
                  <span>Live View</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0958ff] text-[#0958ff] font-semibold rounded-xl transition-all duration-300 hover:bg-[#f0f7ff]"
                >
                  <span>Source Code</span>
                  <ArrowUpRight size={16} />
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
