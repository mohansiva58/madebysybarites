"use client"

import { useState, useEffect } from "react"

interface AnimatedHeadingProps {
  text: string
  className?: string
  charDelay?: number
  initialDelay?: number
  transitionDuration?: number
}

export const AnimatedHeading = ({
  text,
  className = "",
  charDelay = 30,
  initialDelay = 200,
  transitionDuration = 500,
}: AnimatedHeadingProps) => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, initialDelay)

    return () => clearTimeout(timer)
  }, [initialDelay])

  // Split text by newlines to handle line breaks
  const lines = text.split("\n")

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split("").map((char, charIndex) => {
            const delay = lineIndex * line.length * charDelay + charIndex * charDelay

            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                className="inline-block"
                style={{
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? "translateX(0)" : "translateX(-18px)",
                  transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
                  transitionDelay: isAnimated ? `${delay}ms` : "0ms",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            )
          })}
        </div>
      ))}
    </div>
  )
}
