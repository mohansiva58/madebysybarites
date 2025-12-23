"use client"

import { useState } from "react"
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
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)

    try {
      const formData = new FormData()
      formData.append("access_key", "e44b351d-eeb9-47c7-8256-0f2ecd35880e")
      formData.append("email", email)
      formData.append("subject", "New Newsletter Subscription")
      formData.append("from_name", "madebysybarites Newsletter")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatusMessage({ type: "success", text: "Successfully subscribed to our newsletter!" })
        setEmail("")
      } else {
        setStatusMessage({ type: "error", text: "Something went wrong. Please try again." })
      }
    } catch (error) {
      setStatusMessage({ type: "error", text: "Failed to subscribe. Please try again later." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray text-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[17rem] font-bold text-black/[0.08] tracking-wider blackspace-nowrap">Sybarites</span>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/">
              <img
                src="/works/madebysybariteslogo.png"
                alt="madebysybarites Logo"
                className="h-20 sm:h-24 md:h-32 w-auto object-contain mb-4 transition-all duration-300 ease-out hover:scale-105 hover:opacity-90"
              />
            </Link>

            <p className="text-sm text-black/60 leading-relaxed transition-all duration-300 hover:text-black/80">
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
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="@ Email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 bg-black/10 border border-black/20 rounded-lg text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/40 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2.5 bg-blue text-foreground rounded-lg text-sm font-medium hover:bg-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </button>
              </div>
              {statusMessage && (
                <p
                  className={`text-xs ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {statusMessage.text}
                </p>
              )}
            </form>
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
