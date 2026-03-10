"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Works", href: "/#our-works" },
  { label: "Achievements", href: "/#achievements" },
  { label: "FAQ's", href: "/#faqs" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 w-full pt-8 px-6 lg:px-12 bg-transparent lg:pointer-events-auto">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10 hover:opacity-80 transition-opacity">
            <img src="/works/madebysybariteslogo.png" alt="MADEBYSYBARITES" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          {/* Centered Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-[5%]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center text-[13px] font-medium tracking-[0.05em] text-[#333] hover:text-[#000] transition-colors uppercase gap-1"
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
              <button className="rounded-full bg-white text-[#111] hover:bg-gray-50 border border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.06)] px-7 py-2.5 text-[13.5px] font-medium transition-transform hover:scale-105">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#111] hover:bg-black/5 rounded-full transition-colors relative z-50"
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
          <div className="flex flex-col gap-4 mt-8 w-full max-w-[200px]">
            <Link href="https://wa.me/919701630276" className="w-full" onClick={() => setIsOpen(false)}>
              <button className="w-full py-3 text-center border border-gray-200 rounded-full font-bold">
                Login
              </button>
            </Link>
            <Link href="https://wa.me/919701630276" className="w-full" onClick={() => setIsOpen(false)}>
              <button className="w-full py-3 text-center bg-black text-white rounded-full font-bold">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
