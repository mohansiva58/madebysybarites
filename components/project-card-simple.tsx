"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardSimpleProps {
  id: string
  title: string
  image: string
  client?: string
  live?: string
  github?: string
  tags?: string[]
}

export function ProjectCardSimple({
  title,
  image,
  client,
  live,
  github,
  tags = [],
}: ProjectCardSimpleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group flex-shrink-0 w-full h-full"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white light-shadow-card hover:light-shadow-hover transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-[#f0fdf9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            loading="lazy"
            quality={85}
          />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#0958ff]/15 via-transparent to-transparent"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title and Client */}
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-1 group-hover:text-[#0958ff] transition-colors duration-300">
              {title}
            </h3>
            {client && (
              <p className="text-sm text-slate-500">
                {client}
              </p>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="px-2 py-1 text-xs font-medium text-[#0958ff] bg-[#f0f7ff] rounded-full border border-[#11c7b7]/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex gap-2 mt-auto pt-4 border-t border-slate-200">
            {live && (
              <motion.a
                href={live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0958ff] text-white text-sm font-semibold rounded-lg hover:bg-[#0854e0] transition-colors duration-300"
              >
                <span>View</span>
                <ArrowUpRight size={14} />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-[#0958ff] text-[#0958ff] text-sm font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors duration-300"
              >
                <span>Code</span>
                <ArrowUpRight size={14} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
