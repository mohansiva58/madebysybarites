"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const challenges = [
  {
    problem: "Outdated Digital Presence",
    description: "Outdated website or app turns away potential clients.",
    solution: "Modern Web & App Development",
    solutionDescription: "We create stunning, high-performance websites and apps that captivate your audience and drive conversions.",
    image: "/challenge-1.png",
  },
  {
    problem: "Lack of Technical Expertise",
    description: "Struggling with evolving tech and costly in-house teams.",
    solution: "Expert Development Team",
    solutionDescription: "Access our world-class team of specialists without the overhead of building and managing your own.",
    image: "/challenge-2.png",
  },
  {
    problem: "Inefficient Processes",
    description: "Manual work and outdated tools slow teams down.",
    solution: "Automated Solutions",
    solutionDescription: "We streamline your workflows with cutting-edge automation and modern tools that boost productivity.",
    image: "/challenge-3.png",
  },
  {
    problem: "Inconsistent Branding",
    description: "Brand looks different across platforms, weakening trust.",
    solution: "Unified Brand Experience",
    solutionDescription: "We ensure consistent, cohesive branding across all platforms to strengthen trust and recognition.",
    image: "/challenge-4.png",
  },
  {
    problem: "Low Online Visibility",
    description: "Brand buried in search results with weak presence.",
    solution: "SEO & Digital Marketing",
    solutionDescription: "We optimize your digital presence to rank higher and reach your target audience effectively.",
    image: "/challenge-5.png",
  },
  {
    problem: "Ever-Changing Demands",
    description: "Business evolves but rigid solutions can't keep pace.",
    solution: "Scalable & Flexible Solutions",
    solutionDescription: "We build adaptable systems that grow and evolve with your business needs.",
    image: "/challenge-6.png",
  },
]

export function ChallengesSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden border-t border-b border-gray-200/50">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        
        {/* Top Testimonial Card */}
        <div className="flex justify-center mb-16">
          <div
            className={cn(
              "relative transition-all duration-700 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                <Image
                  src="/avatar-1.jpg"
                  alt="CTO"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Quote */}
            <div className="text-center max-w-[600px]">
              <p className="text-[15px] text-gray-700 leading-relaxed mb-2">
                It's not the lines we type,<br />
                it's the solutions they unlock.
              </p>
              <p className="text-xs text-gray-500">
                – CTO, Vasanta Kumar
              </p>
            </div>

            {/* Black Pill Badge */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Solutions Beyond Syntax
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-700 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            The Challenges Modern Businesses<br />Face
          </h2>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1130px] mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-white rounded-[40px] p-8 border border-gray-200 shadow-sm transition-all duration-300 ease-out min-h-[480px] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)]",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative w-full h-52 mb-8 rounded-[28px] overflow-hidden bg-gray-50">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {index === 0 && (
                    <div className="flex gap-2 items-center">
                      <div className="w-20 h-28 bg-gray-800 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 right-2 h-1 bg-gray-600 rounded"></div>
                        <div className="text-white text-[8px] leading-tight px-2 text-center">Mobile App</div>
                      </div>
                      <div className="w-20 h-28 bg-gray-900 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 right-2 h-1 bg-gray-700 rounded"></div>
                        <div className="text-white text-[8px] leading-tight px-2 text-center">Dashboard</div>
                      </div>
                      <div className="w-20 h-28 bg-gray-800 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 right-2 h-1 bg-gray-600 rounded"></div>
                        <div className="text-white text-[8px] leading-tight px-2 text-center">Landing Page</div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-center space-y-1.5 w-full">
                      <div className="text-sm text-gray-300 font-medium">Backend Developer</div>
                      <div className="text-sm text-gray-300 font-medium">Data Scientist</div>
                      <div className="text-sm text-gray-300 font-medium">Growth Manager</div>
                      <div className="bg-gray-800 text-white text-sm font-semibold py-1.5 px-4 rounded">Customer Specialist</div>
                      <div className="text-sm text-gray-300 font-medium">DevOps Engineer</div>
                      <div className="text-sm text-gray-300 font-medium">Product Designer</div>
                      <div className="text-sm text-gray-300 font-medium">Frontend Engineer</div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 text-gray-800">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                        <span className="text-xl font-bold">Three.js</span>
                      </div>
                      <div className="text-base font-semibold text-gray-700">GLSL</div>
                      <div className="text-sm text-gray-500">WebGL Shaders</div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="flex gap-3 items-center">
                      <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center">
                        <div className="text-white text-3xl">⚡</div>
                      </div>
                      <div className="w-24 h-24 bg-black rounded-lg flex flex-col items-center justify-center p-2">
                        <div className="text-white text-xs font-bold">Helvetica Now</div>
                        <div className="text-white text-[10px] mt-1">Bold</div>
                      </div>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-20 bg-gray-800 rounded-xl flex items-center justify-center shadow-xl">
                        <div className="text-white text-sm font-bold">SEO Ranking</div>
                      </div>
                    </div>
                  )}
                  {index === 5 && (
                    <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-between px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 border-2 border-white rounded"></div>
                        <div className="text-white text-xs font-bold">E TFS</div>
                      </div>
                      <div className="w-16 h-16 bg-gray-600 rounded"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Problem Content - Default State */}
              <div className="absolute inset-x-8 bottom-8 transition-opacity duration-500 group-hover:opacity-0">
                {/* Problem Label */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-red-500 uppercase tracking-wide">
                    Problem
                  </span>
                </div>

                {/* Problem Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {challenge.problem}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Solution Content - Hover State */}
              <div className="absolute inset-x-8 bottom-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {/* Solution Label */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-green-600 uppercase tracking-wide">
                    Solution
                  </span>
                </div>

                {/* Solution Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {challenge.solution}
                </h3>

                {/* Solution Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {challenge.solutionDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
