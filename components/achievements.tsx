"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const achievements = [
    {
        id: 1,
        title: "30+ Brands Served",
        description: "Helping businesses across various industries achieve their goals",
        image: "/achievements/brands.png",
        bgColor: "bg-gradient-to-br from-orange-50 to-purple-50",
    },
    {
        id: 2,
        title: "8 Years of Experience",
        description: "Bringing seasoned expertise to every project",
        image: "/achievements/experience.png",
        bgColor: "bg-gradient-to-br from-gray-100 to-gray-200",
    },
    {
        id: 3,
        title: "Empowering Brands to Scale",
        description: "We help brands redirect resources to fuel innovation and expansion",
        image: "/achievements/scaling.png",
        bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
]

export function Achievements() {
    const [isVisible, setIsVisible] = useState(false)
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
        <section id="achievements" ref={sectionRef} className="py-20 bg-[#f0f0f0] relative overflow-hidden">
            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Our Achievement
                    </h2>
                    <p
                        className={cn(
                            "text-slate-600 text-lg transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Curious about what we've accomplished? Let our track record speak for itself.
                    </p>
                </div>

                {/* Dashed separator */}
                <div className="mb-16 border-t border-dashed border-slate-300" />

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className={cn(
                                "rounded-3xl p-8 transition-all duration-700 ease-out hover:scale-[1.02]",
                                achievement.bgColor,
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                            )}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            {/* Image Container */}
                            <div className="mb-6 w-full aspect-video relative rounded-2xl overflow-hidden">
                                <Image
                                    src={achievement.image}
                                    alt={achievement.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {achievement.title}
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed">
                                {achievement.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
