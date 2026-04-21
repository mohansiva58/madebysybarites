"use client"

import { useState } from "react"
import { motion } from "motion"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc",
    image: "/professional-woman-headshot.png",
    review: "Transformed our vision into reality. Outstanding technical expertise and attention to detail.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    company: "Growth Ventures",
    image: "/professional-indian-businessman-headshot.jpg",
    review: "Game-changer team! Delivered ahead of schedule and within budget. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    company: "Creative Studios",
    image: "/professional-headshot-2.png",
    review: "Exceptional communication and understanding. They brought our brand vision to life beautifully.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    company: "Digital Innovations",
    image: "/professional-middle-eastern-man.png",
    review: "Unmatched professionalism and innovation. Truly outstanding work on our project.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Chen",
    company: "Innovation Labs",
    image: "/professional-headshot-1.png",
    review: "Fantastic experience from start to finish. Their expertise made all the difference for us.",
    rating: 5,
  },
  {
    id: 6,
    name: "Marcus Williams",
    company: "Tech Solutions",
    image: "/professional-man-headshot.png",
    review: "Turned complex requirements into a seamless, intuitive product. Simply outstanding.",
    rating: 5,
  },
  {
    id: 7,
    name: "Priya Sharma",
    company: "Digital Ventures",
    image: "/professional-indian-man-headshot.jpg",
    review: "Creative solutions and flawless execution. They exceeded all our expectations.",
    rating: 5,
  },
  {
    id: 8,
    name: "James Mitchell",
    company: "Enterprise Solutions",
    image: "/professional-developer-man-headshot-smiling.jpg",
    review: "Professional, reliable, and incredibly talented. Our go-to tech partner now.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sofia Rodriguez",
    company: "Creative Agency",
    image: "/professional-developer-headshot-smiling.jpg",
    review: "Perfect blend of design and functionality. Exactly what we needed for growth.",
    rating: 5,
  },
  {
    id: 10,
    name: "David Chen",
    company: "Tech Startup",
    image: "/sujith-reddy-professional-headshot.jpg",
    review: "Responsive, creative, and deeply committed to delivering excellence. Loved working with them.",
    rating: 5,
  },
]

export function ClientsReviews() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Dynamic positions for profiles arranged around the center
  const positions = [
    { top: "8%", left: "12%", delay: 0 },
    { top: "15%", right: "10%", delay: 0.1 },
    { top: "45%", left: "5%", delay: 0.2 },
    { top: "55%", right: "8%", delay: 0.3 },
    { bottom: "15%", left: "15%", delay: 0.4 },
    { bottom: "10%", right: "12%", delay: 0.5 },
    { top: "25%", left: "50%", transform: "translateX(-50%)", delay: 0.2 },
    { bottom: "25%", left: "50%", transform: "translateX(-50%)", delay: 0.4 },
    { top: "50%", left: "2%", delay: 0.35 },
    { top: "50%", right: "2%", delay: 0.45 },
  ]

  return (
    <section id="clients-reviews" className="relative w-full min-h-screen bg-gradient-to-b from-blue-100/40 to-white py-12 md:py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300/40 via-pink-200/35 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-300/35 via-purple-300/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-300/35 to-transparent rounded-full blur-2xl -translate-x-1/2"></div>
      </div>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 md:w-96 h-80 md:h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glow animation keyframes */}
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.2);
          }
        }
        .glow-animate {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 h-full flex flex-col items-center justify-center min-h-screen">
        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12 relative z-20"
        >
          <h2 className="text-xs md:text-sm font-medium text-purple-600 mb-2 tracking-widest uppercase">
            Real stories
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-black mb-3 md:mb-4 leading-tight">
            real results.
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Great clients drive great collaboration
          </p>
        </motion.div>

        {/* Floating Profile Cards */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {reviews.map((review, index) => {
            const position = positions[index % positions.length]
            const isHovered = hoveredId === review.id

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: position.delay, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(review.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: "absolute",
                  ...position,
                }}
                className="pointer-events-auto"
              >
                <div className="relative group cursor-pointer">
                  {/* Profile Image with Glow */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 md:border-4 border-white shadow-2xl bg-white transition-all ${
                      isHovered ? "glow-animate" : ""
                    }`}
                  >
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                    {isHovered && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 ring-4 ring-purple-500 rounded-full"
                      ></motion.div>
                    )}
                  </motion.div>

                  {/* Hover Review Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={
                      isHovered
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.8, y: -10 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`absolute ${
                      index < 5 ? "top-full mt-2 md:mt-4" : "bottom-full mb-2 md:mb-4"
                    } ${index % 2 === 0 ? "left-0 md:left-auto" : "right-0 md:right-auto"} w-40 md:w-48 lg:w-56 bg-white rounded-lg md:rounded-xl shadow-xl p-3 md:p-4 pointer-events-none z-50`}
                  >
                    <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-0.5">
                      {review.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{review.company}</p>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed italic mb-2 line-clamp-3">
                      "{review.review}"
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
