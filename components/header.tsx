"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Works", href: "/#our-works" },
  { label: "About", href: "/#about" },
 
  { label: "FAQ's", href: "/#faqs" },
   
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hide logo when scrolled past the hero section
      // Hero section is approx 85vh, using a fixed pixel threshold or relative window height
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Run once on mount to handle initial scroll position
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 w-full pt-3 px-6 lg:px-12 transition-all">
        <div className="w-full mx-auto flex items-center justify-between relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4  shadow-lg">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 relative z-10 transition-all duration-500",
              isScrolled ? "opacity-0 -translate-x-4 pointer-events-none" : "opacity-100 hover:opacity-80 translate-x-0"
            )}
          >
            <img src="/works/madebysybariteslogo.png" alt="MADEBYSYBARITES" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          {/* Centered Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 ml-[5%]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center text-[13px] font-medium tracking-[0.05em] text-white hover:text-gray-200 transition-colors uppercase gap-1"
              >
                {item.label}
                {item.label === "COLLECTION" && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="https://wa.me/919701630276">
              <button className="rounded-full bg-white/20 text-white hover:bg-white/30 border border-white/40 px-7 py-2.5 text-[13.5px] font-medium transition-all hover:scale-105 backdrop-blur-sm\">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors relative z-50\"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-out flex flex-col",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-bold tracking-widest text-black hover:text-gray-600 transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        
        </nav>
      </div>
    </>
  )
}
