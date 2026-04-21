"use client"

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  name: string
  designation: string
  src: string
}

interface Colors {
  name?: string
  designation?: string
  testimony?: string
  arrowBackground?: string
  arrowForeground?: string
  arrowHoverBackground?: string
}

interface FontSizes {
  name?: string
  designation?: string
  quote?: string
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  colors?: Colors
  fontSizes?: FontSizes
}

function calculateGap(width: number) {
  const minWidth = 1024
  const maxWidth = 1456
  const minGap = 60
  const maxGap = 86
  if (width <= minWidth) return minGap
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth))
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) {
  const colorName = colors.name ?? "#0f172a"
  const colorDesignation = colors.designation ?? "#6b7280"
  const colorTestimony = colors.testimony ?? "#4b5563"
  const colorArrowBg = colors.arrowBackground ?? "#141414"
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7"
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#6cbcc4"
  const fontSizeName = fontSizes.name ?? "1.5rem"
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem"
  const fontSizeQuote = fontSizes.quote ?? "1.125rem"

  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverPrev, setHoverPrev] = useState(false)
  const [hoverNext, setHoverNext] = useState(false)
  const [containerWidth, setContainerWidth] = useState(1200)

  const imageContainerRef = useRef<HTMLDivElement>(null)
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials])
  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials])

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength)
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current)
  }, [testimonialsLength])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength)
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current)
  }, [testimonialsLength])

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength)
      }, 5000)
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current)
    }
  }, [autoplay, testimonialsLength])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [handlePrev, handleNext])

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth)
    const maxStickUp = gap * 0.8
    const isActive = index === activeIndex
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index
    const isRight = (activeIndex + 1) % testimonialsLength === index
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      }
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      }
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      }
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    }
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="w-full max-w-4xl px-8 py-8 mx-auto">
      <div className="grid gap-20 md:grid-cols-2">
        {/* Images */}
        <div
          ref={imageContainerRef}
          className="relative w-full h-96"
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="absolute w-full h-full object-cover rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              style={getImageStyle(index)}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              layout={false}
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="font-bold mb-1" style={{ color: colorName, fontSize: fontSizeName }}>
                {activeTestimonial.name}
              </h3>
              <p className="mb-8" style={{ color: colorDesignation, fontSize: fontSizeDesignation }}>
                {activeTestimonial.designation}
              </p>
              <motion.p className="leading-7" style={{ color: colorTestimony, fontSize: fontSizeQuote }}>
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-6 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
            >
              <FaArrowLeft size={20} color={colorArrowFg} />
            </button>
            <button
              onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
            >
              <FaArrowRight size={20} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with madebysybarites was an absolute pleasure. They rebranded our entire online presence — from logo to website — and the results exceeded every expectation. Our inquiries doubled within the first month.",
    name: "Venkat Atluri",
    designation: "Founder, Atluri Events",
    src: "https://picsum.photos/400/400?random=1",
  },
  {
    quote:
      "The team at madebysybarites delivered our e-commerce platform ahead of schedule with zero bugs at launch. Their attention to detail and communication throughout was top-notch. Truly a world-class team.",
    name: "Ravi Kumar",
    designation: "CEO, Akepatimart",
    src: "https://picsum.photos/400/400?random=2",
  },
  {
    quote:
      "We needed an app that felt premium and performed flawlessly. madebysybarites nailed it on the first try. The UI is stunning, and our users love the experience. Couldn't recommend them more.",
    name: "Priya Sharma",
    designation: "Co-Founder, Rofero",
    src: "https://picsum.photos/400/400?random=3",
  },
  {
    quote:
      "From day one, madebysybarites treated our project like their own. They translated our rough ideas into a beautiful, functional product — fast. The post-launch support has been incredible too.",
    name: "Arjun Mehta",
    designation: "Director, Wonderkids",
    src: "https://picsum.photos/400/400?random=4",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-blue-100/40 to-white overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-300/40 via-pink-200/35 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-300/35 via-purple-300/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#6cbcc4] font-medium mb-2 flex items-center gap-2 text-sm uppercase tracking-widest">
            ★ Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-center text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-[#6cbcc4] rounded-full" />
        </div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#0f172a",
              designation: "#6b7280",
              testimony: "#4b5563",
              arrowBackground: "#0f172a",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "#6cbcc4",
            }}
            fontSizes={{
              name: "1.4rem",
              designation: "0.875rem",
              quote: "1rem",
            }}
          />
        </div>
      </div>
    </section>
  )
}
