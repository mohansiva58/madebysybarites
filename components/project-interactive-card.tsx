"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectMetric {
  label: string
  value: string
}

interface ProjectInteractiveCardProps {
  title: string
  description: string
  image: string
  link?: string
  github?: string
  metrics?: ProjectMetric[]
  tags: string[]
  featured?: boolean
}

export function ProjectInteractiveCard({
  title,
  description,
  image,
  link,
  github,
  metrics,
  tags,
  featured = false,
}: ProjectInteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 })

  // Throttle mouse move to improve performance
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !isHovered) return

      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate percentage position
      const xPercent = (x / rect.width - 0.5) * 2
      const yPercent = (y / rect.height - 0.5) * 2

      setMousePosition({ x: xPercent, y: yPercent })

      // Calculate 3D rotation based on cursor position
      setCardRotate({
        x: yPercent * 8,
        y: xPercent * 8,
      })
    },
    [isHovered]
  )

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setCardRotate({ x: 0, y: 0 })
    setMousePosition({ x: 0, y: 0 })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className={`relative group h-full rounded-2xl overflow-hidden cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Card Container with 3D Transform */}
      <motion.div
        style={{
          rotateX: isHovered ? cardRotate.x : 0,
          rotateY: isHovered ? cardRotate.y : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative w-full h-full"
      >
        {/* Card Background */}
        <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden light-shadow-card transition-all duration-300 group-hover:light-shadow-hover">
          {/* Image Container */}
          <div className="relative w-full h-2/3 overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-[#f0fdf9]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-500 ease-out will-change-transform group-hover:scale-110"
              sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 50vw"}
              loading="lazy"
              quality={85}
            />

            {/* Dynamic Light Overlay - Follows Cursor */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(
                    circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%,
                    rgba(17, 199, 183, 0.15) 0%,
                    transparent 70%
                  )`,
                }}
              />
            )}

            {/* Static Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-[#0f1724]/40 to-transparent"
            />

            {/* Hover Border Glow */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                boxShadow: isHovered
                  ? `inset 0 0 30px rgba(17, 199, 183, 0.3)`
                  : `inset 0 0 0px rgba(17, 199, 183, 0)`,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />
          </div>

          {/* Content Container */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative p-6 flex flex-col flex-1 bg-white"
          >
            {/* Title */}
            <motion.h3
              animate={{
                color: isHovered ? "#0958ff" : "#0f1724",
              }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-bold mb-2 will-change-colors"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <p className="text-sm text-[#475569] mb-4 line-clamp-2 flex-1">{description}</p>

            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-2 mb-4"
              >
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#f0f7ff] to-[#f0fdf9] p-3 rounded-lg border border-[#11c7b7]/20"
                  >
                    <p className="text-xs text-[#475569] font-medium uppercase">{metric.label}</p>
                    <p className="text-base font-bold text-[#0f1724]">{metric.value}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tags */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#f0f7ff] border border-[#11c7b7]/20 text-xs font-semibold text-[#0958ff] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0958ff] text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span className="text-sm">View Project</span>
                  <ArrowUpRight size={14} />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-[#0958ff] text-[#0958ff] font-semibold rounded-xl transition-all duration-300 hover:bg-[#f0f7ff]"
                >
                  <span className="text-sm">Code</span>
                  <ArrowUpRight size={14} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
