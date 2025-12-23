"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DotPattern } from "./dot-pattern"

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#our-works" },
  { label: "Achievements", href: "/#achievements" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-10">
              <img
                src="/works/madebysybariteslogo.png"
                alt="madebysybarites Logo"
                className="h-48 sm:h-24 md:h-72 w-auto object-contain transition-all duration-200 hover:scale-105"
              />
            </Link>


            {/* Centered Navigation - Desktop */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-border bg-white/80 backdrop-blur-sm shadow-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 px-5 py-2.5 text-sm font-medium">
                Contact Us
                <div className="w-5 h-5 rounded-full bg-muted-foreground/30 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-border shadow-sm hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background transition-all duration-300 ease-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-4 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 px-6 py-3 text-base">
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </nav>
      </div>
    </>
  )
}
