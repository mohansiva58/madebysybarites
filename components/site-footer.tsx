"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "FAQs", href: "#faqs" },
  { label: "Brand", href: "#brand" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "Email", href: "mailto:hello@madebysybarites.tech" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
]

export function SiteFooter() {
  return (
    <footer className="bg-gray text-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[15rem] font-bold text-black/[0.03] tracking-wider blackspace-nowrap">madebysybarites</span>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-black">madebysybarites</span>
            </Link>
            <p className="text-sm text-black/60 leading-relaxed">
              Strategic web design, and campaigns tailored to drive result and conversions.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-black/60 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Socials</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 hover:text-black transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Newsletter</h4>
            <p className="text-sm text-black/60 mb-4">
              Stay ahead with design & marketing tips and strategies that drive results.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="@ Email"
                className="flex-1 px-4 py-2.5 bg-black/10 border border-black/20 rounded-lg text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/40"
              />
              <button className="px-4 py-2.5 bg-blue text-foreground rounded-lg text-sm font-medium hover:bg-red/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-sm text-black/40">&copy;2025 madebysybarites All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
