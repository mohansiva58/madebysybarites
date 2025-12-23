"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const features = [
    {
        icon: "/choose/globe.png",
        title: "Impact-Driven Solutions",
        description: "Every product we build is custom-crafted to create real business impact.",
    },
    {
        icon: "/choose/delivery.png",
        title: "Fast & Reliable Delivery",
        description: "Get high-quality results in days or weeks, not months.",
    },
    {
        icon: "/choose/pricing.png",
        title: "Transparent & Fair Pricing",
        description: "Honest, customized pricing with no hidden fees or surprises.",
    },
    {
        icon: "/choose/solve.png",
        title: "Expert Problem Solvers",
        description: "We tackle technical and creative challenges with innovative solutions.",
    },
    {
        icon: "/choose/collab.png",
        title: "Seamless Collaboration",
        description: "Clear communication and feedback at every stage of the project.",
    },
    {
        icon: "/choose/talent.png",
        title: "Direct Access to Top Talent",
        description: "Work directly with senior experts—no long-term hiring needed.",
    },
]

export function WhyChooseUs() {
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
        <section ref={sectionRef} className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Dashed line top border simulation if needed, or just standard border */}
            <div className="absolute top-0 left-0 w-full border-t border-dashed border-slate-200" />

            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2
                        className={cn(
                            "text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Why Choose madebysybarites?
                    </h2>
                    <p
                        className={cn(
                            "text-slate-600 text-lg transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Discover the advantages of partnering with a tech team that's built for results and client success:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} isVisible={isVisible} delay={200 + index * 100} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeatureCard({
    feature,
    isVisible,
    delay,
}: {
    feature: (typeof features)[0]
    isVisible: boolean
    delay: number
}) {
    return (
        <div
            className={cn(
                "flex flex-col items-center text-center transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="mb-4 relative">
                <div className="w-32 h-32 flex items-center justify-center">
                    <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.description}
            </p>
        </div>
    )
}
