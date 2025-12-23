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
        <section id="our-works" ref={sectionRef} className="py-20 bg-[#f0f0f0] relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-40">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Our Works
                    </h2>
                    <p
                        className={cn(
                            "text-slate-600 text-lg transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Still confused about us? Our work Speaks for Itself
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9 place-items-center" style={{ columnGap: '-40px' }}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={cn(
                                "group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-out max-w-[430px] w-full mx-auto",
                                project.bgColor,
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                            )}
                            style={{ 
                                transitionDelay: `${200 + index * 100}ms`,
                                height: "500px"
                            }}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            
                            {/* Project Image */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Info Bar */}
                            <div 
                                className={cn(
                                    "absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between transition-all duration-300",
                                    hoveredCard === project.id 
                                        ? "translate-y-0 opacity-100" 
                                        : "translate-y-full opacity-0"
                                )}
                            >
                                {/* Logo */}
                                {project.logo ? (
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-3">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src={project.logo}
                                                alt={`${project.title} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-white font-semibold text-lg">
                                            {project.title}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3">
                                        <span className="text-white font-semibold text-lg">
                                            {project.title}
                                        </span>
                                    </div>
                                )}

                                {/* View Project Button */}
                                <button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg">
                                    View Project
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
