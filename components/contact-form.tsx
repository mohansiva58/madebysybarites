"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const budgetOptions = [
  { value: "", label: "Select a budget" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="py-16 md:py-44 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Contact Info */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Connect us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in touch</h1>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Reach out and let's explore how we can bring your ideas to life. Whether you're ready to begin or just
              have questions.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              <Link
                href="tel:+917075631155"
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                +91 70756 31155
              </Link>
              <br />
              <Link
                href="mailto:hello@madebysybarites.tech"
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                hello@madebysybarites.tech
              </Link>
            </div>

            <p className="text-muted-foreground text-sm mb-8">
              Reach out to us via email or give us a call, we are happy to assist you!
            </p>

            {/* Social links */}
            <div className="space-y-3">
              <Link
                href="https://instagram.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
                Instagram
              </Link>
              <Link
                href="https://linkedin.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="What can we help you with?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />

              <Button
                type="submit"
                className="w-full py-6 bg-foreground text-background hover:bg-foreground/90 rounded-xl text-base font-medium"
              >
                Send Message
              </Button>
            </form>

            {/* Address and Hours */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">Phase 3, KPHB, Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday to Friday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
