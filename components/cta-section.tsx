"use client"

import Image from "next/image"
import { Linkedin, Instagram, Github } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-muted overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/professional-developer-man-headshot-smiling.jpg"
              alt="madebysybarites founder"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tagline */}
        {/* <p className="text-muted-foreground text-lg mb-1">It's not the lines we type,</p>
        <p className="text-muted-foreground text-lg">
          it's the impact we create. Building digital solutions that transform businesses globally.
        </p> */}

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
