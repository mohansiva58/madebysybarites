"use client"

import { useEffect, useRef } from "react"

const logos = [
  { type: "icon", content: "crown" },
  { type: "text", content: "conquer", style: "italic" },
  { type: "text", content: "FluentPro", icon: true },
  { type: "text", content: "MACH CONSULTANTS" },
  { type: "text", content: "E TFS", bold: true },
  { type: "icon", content: "crown" },
  { type: "text", content: "conquer", style: "italic" },
  { type: "text", content: "FluentPro", icon: true },
]

export function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let position = 0

    const scroll = () => {
      position += 0.4
      if (position >= scrollContainer.scrollWidth / 2) {
        position = 0
      }
      scrollContainer.scrollLeft = position
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-8 border-y border-border/30 bg-background overflow-hidden">
      <div
        ref={scrollRef}
        className="flex items-center gap-16 overflow-hidden whitespace-nowrap px-8"
        style={{ scrollBehavior: "auto" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-2 shrink-0 text-muted-foreground/50 font-medium text-lg tracking-wide"
          >
            {logo.type === "icon" && logo.content === "crown" && (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
            )}
            {logo.type === "text" && (
              <span className={`${logo.style === "italic" ? "italic" : ""} ${logo.bold ? "font-bold" : ""}`}>
                {logo.icon && (
                  <svg className="w-5 h-5 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                )}
                {logo.content}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
