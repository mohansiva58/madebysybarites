"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import bujjiImage from "../public/clients/image.png"
import atluri from "../public/clients/atluti.png"
import music from "../public/clients/music.png"
import rofero from "../public/clients/rofero.png"
import wonderkids from "../public/clients/wonderkids.png"

const projects = [
  {
    title: "ROFERO",
    subtitle: "Clothing Brand",
    description: "Premium clothing brand website with modern UI/UX, smooth animations, and immersive product showcases. Built for conversion and brand elevation.",
    image: rofero,
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "https://clothingbrand-nu.vercel.app/",
    github: "https://github.com/mohansiva58/Rofero",
    color: "#8B5CF6",
  },
  {
    title: "Atluri Events",
    subtitle: "Event Management",
    description: "Visually captivating event management platform with service sections, photo galleries, and testimonials. Designed to inspire and convert.",
    image: atluri,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    live: "https://atlurievents.in/",
    github: "https://github.com/mohansiva58/attuluri-events",
    color: "#06B6D4",
  },
  {
    title: "Akepatimart",
    subtitle: "E-Commerce Platform",
    description: "Full-featured online marketplace with product listings, cart functionality, and seamless shopping experience built for scale.",
    image: "/works/project3.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
    live: "https://akepatimart.com/",
    color: "#10B981",
  },
  {
    title: "Wonderkids",
    subtitle: "Learning Platform",
    description: "Engaging and colorful interactive education platform for children featuring activities, games, and learning modules.",
    image: wonderkids,
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "https://wonderkids.great-site.net/?i=1",
    color: "#F59E0B",
  },
  {
    title: "Leena by Alekhya",
    subtitle: "Women's Clothing",
    description: "A refined fashion storefront for women's clothing, bringing product discovery, collection storytelling, and a polished shopping journey together.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YOlBoW2ix9Xlpd6m9A6zX9JSpngw7v.png",
    tags: ["E-Commerce", "Brand Design", "Next.js", "Responsive UI"],
    live: "https://leenabyalekhya.in",
    color: "#9A8066",
  },
  {
    title: "Bujji Gadu Biryani",
    subtitle: "Food Delivery",
    description: "A delightful food delivery service that brings the taste of authentic Biryani right to your doorstep.",
    image: bujjiImage,
    tags: ["E-Commerce", "Brand Design", "Next.js", "Responsive UI"],
    live: "https://www.bujjigadubiryani.shop/",
    color: "#9A8066",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: cardOpacity, y }}
      className="group"
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-14 items-center`}>
        {/* Image */}
        <div className="w-full lg:w-3/5 relative">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.04]">
            <motion.div style={{ scale: imageScale }} className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Hover CTA */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[13px] font-semibold hover:scale-105 transition-transform"
                >
                  Visit Site <ArrowUpRight size={14} />
                </a>
              )}

            </div>
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/5 space-y-5">
          {/* Index */}
          <div className="flex items-center gap-3">
            <span
              className="text-[11px] font-bold tracking-[0.15em] uppercase"
              style={{ color: project.color }}
            >
              Project {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Title */}
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {project.title}
          </h3>

          <p className="text-[13px] font-medium tracking-[0.05em] uppercase text-zinc-500">
            {project.subtitle}
          </p>

          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-[0.02em] bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group/btn flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold text-white bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
              >
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                View Live
              </a>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function OurWorks() {
  return (
<section
  id="projects"
  className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-[#050505] overflow-hidden"
>{/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-14"      >
          <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-cyan-400 mb-4">
            Our Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Selected{" "}
            <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            A curated showcase of projects that demonstrate our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
