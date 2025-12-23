"use client"
import { Github, Linkedin, Instagram } from "lucide-react"
import { SiteFooter } from "./site-footer"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
    label: "X",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return <SiteFooter />
}
