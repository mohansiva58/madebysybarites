"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const steps = [
    {
        number: "1",
        title: "Share Your Vision",
        description: "Tell us about your goals and project requirements—just reach out for a free consultation.",
        image: "/approach/step1.png",
    },
    {
        number: "2",
        title: "Collaborate on a Solution",
        description: "We work together to define the scope and strategy. You review and approve the plan before we begin.",
        image: "/approach/step2.png",
    },
    {
        number: "3",
        title: "Watch Your Idea Come to Life",
        description: "Our expert team gets to work, keeping you in the loop with consistent updates. Most projects are delivered promptly, ready for launch!",
        image: "/approach/step3.png",
    },
]

export function HowToGetStarted() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
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
        <section ref={sectionRef} className="py-20 bg-[#f0f0f0] relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        className={cn(
                            "text-3xl md:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        How to Get Started with madebysybarites
                    </h2>
                    <p
                        className={cn(
                            "text-slate-600 text-base transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        )}
                    >
                        Just step away from those traditional old methods of hiring plus managing and see for yourself
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Dynamic Image Display */}
                    <div
                        className={cn(
                            "transition-all duration-700 ease-out delay-200",
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
                        )}
                    >
                        <div className="relative w-full h-[600px] max-w-lg mx-auto">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className={cn(
                                        "absolute inset-0 transition-opacity duration-500 ease-in-out",
                                        activeStep === index ? "opacity-100" : "opacity-0"
                                    )}
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-contain p-8"
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Steps */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={cn(
                                    "rounded-2xl p-6 transition-all duration-300 ease-out cursor-pointer border-2",
                                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                                    activeStep === index
                                        ? "bg-white shadow-lg scale-[1.02]"
                                        : "bg-transparent border-transparent hover:bg-white  hover:shadow-md"
                                )}
                                style={{ transitionDelay: `${300 + index * 100}ms` }}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <div className="flex flex-col">
                                    <h4 className={cn(
                                        "text-lg font-bold mb-2 transition-colors",
                                        activeStep === index ? "text-slate-900" : "text-slate-600"
                                    )}>
                                        Step {step.number}
                                    </h4>
                                    <h5 className="text-xl font-bold text-slate-900 mb-3">
                                        {step.title}
                                    </h5>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
