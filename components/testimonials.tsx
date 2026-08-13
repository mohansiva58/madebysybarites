"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Abhishek Reddy",
    role: "Founder, TFS Finserv",
    image: "/professional-headshot-1.png",
    rating: 5,
    text: "Sybarites delivered beyond our expectations. The fintech app they built for us is not only visually stunning but performs flawlessly under load. Their attention to detail and commitment to quality is unmatched.",
  },
  {
    name: "Karim Oumran",
    role: "CEO, Atluri Events",
    image: "/professional-headshot-2.png",
    rating: 5,
    text: "Working with Sybarites transformed our online presence. The event management website they created has dramatically increased our bookings. Professional, responsive, and truly talented team.",
  },
  {
    name: "Priya Sharma",
    role: "Product Lead, Akepatimart",
    image: "/professional-headshot-3.png",
    rating: 5,
    text: "The e-commerce platform Sybarites built for us handles thousands of transactions daily without a hitch. Their technical expertise combined with design sensibility makes them the perfect tech partner.",
  },
  {
    name: "David Chen",
    role: "CTO, Wonderkids",
    image: "/professional-man-headshot.png",
    rating: 5,
    text: "Sybarites created an engaging learning platform that both kids and parents love. Their ability to balance fun design with robust functionality shows their deep understanding of user experience.",
  },
  {
    name: "Sarah Mitchell",
    role: "Director, ROFERO",
    image: "/professional-woman-headshot.png",
    rating: 5,
    text: "Our clothing brand website by Sybarites is a work of art. The smooth animations, premium feel, and conversion optimization have elevated our brand to a whole new level. Highly recommend!",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/5 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-amber-400 mb-4">
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What Clients{" "}
            <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/[0.04]"
            >
              {/* Quote icon */}
              <Quote size={48} className="text-violet-500/10 absolute top-8 right-8" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8 font-light max-w-3xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[13px] text-zinc-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-gradient-to-r from-violet-500 to-cyan-500"
                      : "w-2 h-2 bg-zinc-700 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-full border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 text-zinc-400 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-full border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 text-zinc-400 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
