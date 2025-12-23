"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "TFS Finserv",
        image: "/works/project1.png",
        bgColor: "bg-gradient-to-br from-slate-800 to-slate-950",
        logo: "/works/logo1.png",
    },
    {
        id: 2,
        title: "Apple Store Clone",
        image: "/works/project2.png",
        bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
        logo: "/works/logo2.png",
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        image: "/works/project3.png",
        bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
        logo: "/works/logo3.png",
    },
    {
        id: 4,
        title: "Dashboard Analytics",
        image: "/works/project4.png",
        bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        logo: "/works/logo4.png",
    },
]

export function OurWorks() {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="our-works" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f0f0f0] relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
                    <h2
                        className={cn(
                            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Our Works
                    </h2>
                    <p
                        className={cn(
                            "text-slate-600 text-base sm:text-lg md:text-xl px-2 transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Still confused about us? Our work Speaks for Itself
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={cn(
                                "group relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-out w-full cursor-pointer",
                                "hover:scale-[1.02] hover:shadow-2xl",
                                project.bgColor,
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                            )}
                            style={{
                                transitionDelay: `${200 + index * 100}ms`,
                            }}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >

                            {/* Project Image - Responsive aspect ratio */}
                            <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] md:aspect-[4/5]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Gradient Overlay - always visible on mobile, hover on desktop */}
                                <div
                                    className={cn(
                                        "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300",
                                        "md:opacity-0 md:group-hover:opacity-100"
                                    )}
                                />
                            </div>

                            {/* Bottom Info Bar - Always visible on mobile, hover on desktop */}
                            <div
                                className={cn(
                                    "absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6",
                                    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 md:gap-4",
                                    "transition-all duration-300",
                                    // Always visible on mobile, hover effect on desktop
                                    "translate-y-0 opacity-100",
                                    "md:translate-y-full md:opacity-0",
                                    "md:group-hover:translate-y-0 md:group-hover:opacity-100"
                                )}
                            >
                                {/* Logo */}
                                {project.logo ? (
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-2 md:gap-3">
                                        <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                                            <Image
                                                src={project.logo}
                                                alt={`${project.title} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                                            {project.title}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3">
                                        <span className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                                            {project.title}
                                        </span>
                                    </div>
                                )}

                                {/* View Project Button */}
                                <button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base whitespace-nowrap">
                                    View Project
                                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
