"use client"

import { useRef, useEffect, useState, ReactNode } from "react"
import { motion } from "motion/react"

interface ProjectCarouselContainerProps {
  children: ReactNode
}

export function ProjectCarouselContainer({ children }: ProjectCarouselContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle cursor entering/leaving the section
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Handle horizontal scrolling when hovering
  useEffect(() => {
    if (!isHovering || !scrollContainerRef.current || isMobile) return

    let lastY = 0
    let ticking = false

    const handleWheel = (e: WheelEvent) => {
      if (!isHovering) return

      e.preventDefault()
      lastY = e.deltaY

      if (!ticking) {
        requestAnimationFrame(() => {
          const container = scrollContainerRef.current
          if (container) {
            // Scroll horizontally based on vertical scroll
            container.scrollLeft += lastY
          }
          ticking = false
        })
        ticking = true
      }
    }

    const element = scrollContainerRef.current
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false })
      return () => element.removeEventListener("wheel", handleWheel)
    }
  }, [isHovering, isMobile])

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Desktop: Horizontal scroll carousel */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-6 md:gap-8 px-4 md:px-8 py-16 min-w-min">
          {children}
        </div>
      </div>

      {/* Gradient fade on edges for visual clarity */}
      {isHovering && !isMobile && (
        <>
          {/* Left fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10"
          />
          {/* Right fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10"
          />
        </>
      )}

      {/* Mobile: Regular grid scroll */}
      <div className="lg:hidden px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-max">
          {children}
        </div>
      </div>

      {/* Hover hint for desktop */}
      {!isHovering && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-slate-500 pointer-events-none"
        >
          <p className="text-center">Hover to explore projects</p>
        </motion.div>
      )}
    </div>
  )
}
