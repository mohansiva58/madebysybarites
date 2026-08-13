"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "TFS Finserv", logo: "/works/logo1.png" },
  { name: "Atluri Events", logo: "/works/logo2.png" },
  { name: "Akepatimart", logo: "/works/logo3.png" },
  { name: "Wonderkids", logo: "/works/logo4.png" },
  { name: "ROFERO", logo: "/works/logo1.png" },
  { name: "SaaS King", logo: "/works/logo2.png" },
  { name: "TFS Finserv", logo: "/works/logo3.png" },
  { name: "Atluri Events", logo: "/works/logo4.png" },
]

export function LogoCarousel() {
  // Double the array for seamless loop
  const doubledClients = [...clients, ...clients]

  return (
    <section id="clients" className="relative overflow-hidden border-y border-border bg-secondary/30 py-14">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-zinc-500">
          Brand clients & collaborators
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee hover:[animation-play-state:paused]">
          {doubledClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-10 md:mx-16 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-12 w-auto object-contain opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  )
}

export { LogoCarousel as Case1 }
