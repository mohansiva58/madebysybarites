"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#our-works" },
  { label: "Achievements", href: "/#achievements" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact" },
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling past hero section
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <div className="flex items-center gap-4 px-3 py-2 bg-white rounded-full shadow-xl border border-border/50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" />
            </svg>
          </div>
          <span className="text-base font-bold text-foreground">madebysybarites</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-0.5 px-2 py-1.5 rounded-full border border-border/60 bg-background">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 px-4 py-2 text-sm font-medium">
          Contact Us
          <span className="flex items-center justify-center w-4 h-7 rounded-full bg-background/20">
            <ArrowUpRight className="w-3 h-5" />
          </span>
        </Button>
      </div>
    </div>
  )
}
