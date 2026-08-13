"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SiteFooter } from "./site-footer"
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
} from "react-icons/fa6"

const footerLinks = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "App Development", href: "#services" },
    { label: "AI Applications", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faqs" },
  ],
  socials: [
    { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/mohansiva58", label: "GitHub" },
    { icon: FaDribbble, href: "#", label: "Dribbble" },
  ],
}

export function CTAFooter() {
  const handleBookCall = () => {
    const message = "Hi! I'd like to book a consultation call to discuss my project."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919701630276?text=${encodedMessage}`, "_blank")
  }

  return (
    <>
      {/* ─── CTA Section ─── */}
      <section id="contact" className="relative py-28 md:py-36 bg-[#050505] overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-zinc-400">
                Available for new projects
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let&apos;s Build Something{" "}
              <br className="hidden md:block" />
              <span className="text-gradient-flow">Extraordinary</span>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s talk about how we can turn your vision into
              a world-class digital product.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={handleBookCall}
                className="group relative rounded-full bg-white px-10 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/85"
              >

                <span className="relative flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>

              <a
                href="https://wa.me/919701630276?text=Hi%20Sybarites%2C%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-10 py-4 text-[15px] font-medium text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/[0.04]"
              >
                <Mail size={16} />
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <SiteFooter />
    </>
  )
}
