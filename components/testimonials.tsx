"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"

const testimonials = [
  {
    name: "Leena",
    role: "Founder, Leena by Alekhya",
    logo: "/works/logo2.png",
    rating: 5,
    text: "I wanted the website to feel premium and elegant, and the Sybarites team understood that very well. The overall design, product presentation and mobile experience came out really beautifully. They were also very patient with all our changes.",
  },

  {
    name: "Anusha Reddy",
    role: "Founder, Wonderkids",
    logo: "/works/logo4.png",
    rating: 5,
    text: "The team understood the kind of colourful and engaging experience we wanted for Wonderkids. They made the website easy to use while still keeping it fun for children. Communication was smooth and they were always open to our suggestions.",
  },

  {
    name: "Pavan Kalyan",
    role: "Founder, Bujji Gadu Biryani",
    logo: "/clients/image.png",
    rating: 5,
    text: "Sybarites gave our biryani business a proper online presence. The website looks clean, the food is presented nicely and the ordering experience is simple for customers. They were easy to communicate with and handled our requirements really well.",
  },

  {
    name: "Rohit Varma",
    role: "Founder, ROFERO",
    logo: "/clients/rofero.png",
    rating: 5,
    text: "We wanted something modern and premium for ROFERO and the team delivered exactly that direction. The animations and overall presentation make the brand feel much more professional online. They also paid attention to the small details.",
  },

  {
    name: "Karthik Atluri",
    role: "Founder, Atluri Events",
    logo: "/clients/atluti.png",
    rating: 5,
    text: "The website has made it much easier for us to showcase our event services and work. The design looks professional and the gallery section gives customers a better idea of what we do. The Sybarites team was responsive throughout the project.",
  },

  {
    name: "Harsha Vardhan",
    role: "Founder, Akepatimart",
    logo: "/works/logo3.png",
    rating: 5,
    text: "We needed a simple and professional shopping experience for Akepatimart. Sybarites understood our requirements and built a clean interface that works well across mobile and desktop. Overall, it was a very good experience working with the team.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    )
  }, [])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(next, 5000)

    return () => clearInterval(timer)
  }, [isPaused, next])

  const testimonial = testimonials[current]

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        pt-12
        pb-24
        md:pt-16
        md:pb-32
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/5
          blur-[180px]
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-6
          md:px-12
        "
      >

        {/* =========================================
            HEADER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-12 text-center md:mb-14"
        >

          <p
            className="
              mb-4
              text-[12px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-amber-400
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-[-0.03em]
              text-white
              md:text-5xl
              lg:text-6xl
            "
            style={{
              fontFamily: "var(--font-syne)",
            }}
          >
            What Clients{" "}
            <span className="text-gradient">
              Say
            </span>
          </h2>

        </motion.div>


        {/* =========================================
            TESTIMONIAL AREA
        ========================================== */}

        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* =======================================
              TESTIMONIAL CARD
          ======================================== */}

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                rounded-3xl
                border
                border-white/[0.06]
                bg-[#0a0a0a]
                p-7
                md:p-10
                lg:p-12
              "
            >

              {/* =================================
                  QUOTE ICON
              ================================== */}

              <Quote
                size={54}
                strokeWidth={1}
                className="
                  pointer-events-none
                  absolute
                  right-7
                  top-7
                  text-violet-500/[0.10]
                  md:right-10
                  md:top-8
                "
              />


              {/* =================================
                  STARS
              ================================== */}

              <div className="mb-6 flex gap-1">

                {Array.from({
                  length: testimonial.rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={17}
                    strokeWidth={1.5}
                    className="
                      fill-amber-400
                      text-amber-400
                    "
                  />
                ))}

              </div>


              {/* =================================
                  REVIEW
              ================================== */}

              <p
                className="
                  mb-9
                  max-w-4xl
                  text-lg
                  font-light
                  leading-relaxed
                  text-zinc-300
                  md:text-xl
                  lg:text-[21px]
                "
              >
                &ldquo;
                {testimonial.text}
                &rdquo;
              </p>


              {/* =================================
                  CLIENT INFORMATION
              ================================== */}

              <div className="flex items-center gap-4">

                {/* BRAND LOGO */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white
                    p-2.5
                  "
                >

                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.name} brand logo`}
                    className="
                      h-full
                      w-full
                      object-contain
                    "
                  />

                </div>


                {/* NAME */}

                <div>

                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-white
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[13px]
                      text-zinc-500
                    "
                  >
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>


          {/* =========================================
              BOTTOM CONTROLS
          ========================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              md:mt-6
            "
          >

            {/* =======================================
                DOTS
            ======================================== */}

            <div className="flex items-center gap-2">

              {testimonials.map((testimonialItem, i) => (

                <button
                  key={testimonialItem.name}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show testimonial from ${testimonialItem.name}`}
                  className="
                    group
                    flex
                    h-4
                    items-center
                    justify-center
                  "
                >

                  <span
                    className={`
                      block
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        i === current
                          ? "h-2 w-8 bg-gradient-to-r from-violet-500 to-cyan-500"
                          : "h-2 w-2 bg-zinc-700 group-hover:bg-zinc-500"
                      }
                    `}
                  />

                </button>

              ))}

            </div>


            {/* =======================================
                ARROWS
            ======================================== */}

            <div className="flex gap-2">

              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                <ChevronLeft size={18} />
              </button>


              <button
                onClick={next}
                aria-label="Next testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.04]
                  hover:text-white
                "
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