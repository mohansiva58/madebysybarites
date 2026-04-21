"use client"

import { useRef } from "react"
import Image from "next/image"
import { Github, ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const grain = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`

const projects = [
  {
    title: "ROFERO – Clothing Brand Website",
    description: "Premium clothing brand website with modern UI/UX, smooth animations, and immersive product showcases.",
    image: "/works/project1.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Node.js"],
    live: "https://clothingbrand-nu.vercel.app/",
    github: "https://github.com/mohansiva58/Rofero",
  },
  {
    title: "Atluri Events – Event Planner",
    description: "Visually captivating event management website with service sections, galleries, and testimonials.",
    image: "/works/project2.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Node.js"],
    live: "https://atlurievents.in/",
    github: "https://github.com/mohansiva58/attuluri-events",
  },
  {
    title: "Akepatimart – E-Commerce",
    description: "Full-featured online marketplace with product listings, cart functionality, and seamless shopping experience.",
    image: "/works/project3.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
    live: "https://akepatimart.com/",
  },
  {
    title: "Wonderkids – Learning Platform",
    description: "Engaging and colorful interactive platform for kids featuring activities and learning modules.",
    image: "/works/project4.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "https://wonderkids.great-site.net/?i=1",
  },
]

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
      <div className="relative group max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center z-10">
        {/* Project Image */}
        <div className="w-full md:w-3/5 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative bg-white/5 backdrop-blur-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 60vw"
          />

        </div>

        {/* Project Info */}
        <div className="w-full md:w-2/5 text-left space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black tracking-widest uppercase text-gray-500">
              / EXHIBIT {index + 1}
            </span>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-[1] text-[#1a1a00]" style={{ letterSpacing: "-0.03em" }}>
              {project.title.split(" – ")[0]}
              <br />
              <span className="italic font-medium" style={{ WebkitTextStroke: "1.5px #1a1a00", color: "transparent" }}>
                {project.title.split(" – ")[1] || ""}
              </span>
            </h3>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed font-normal max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[white] text-[#d4d44b]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a00] text-[#f5f5dc] font-bold text-xs uppercase tracking-widest transition-all hover:scale-105"
              >
                <ArrowUpRight size={16} /> Live View
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-800 text-gray-800 font-bold text-xs uppercase tracking-widest transition-all hover:bg-gray-800 hover:text-[#f5f5dc]"
              >
                <Github size={16} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectScrollDot({
  index,
  scrollYProgress,
  containerRef,
}: {
  index: number
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  containerRef: React.RefObject<HTMLElement | null>
}) {
  const activePoint = index / (projects.length - 1)
  const opacity = useTransform(
    scrollYProgress,
    [activePoint - 0.1, activePoint, activePoint + 0.1],
    [0.2, 1, 0.2],
  )

  const handleClick = () => {
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop
      const totalHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      const targetScroll = containerTop + activePoint * (totalHeight - viewportHeight)
      window.scrollTo({ top: targetScroll, behavior: "smooth" })
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      style={{ opacity }}
      className="w-10 h-1.5 bg-[#1a1a00] rounded-full cursor-pointer hover:bg-[#d4d44b] transition-colors"
    />
  )
}

export function OurWorks() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const endX = `-${(projects.length - 1) * 100}vw`
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", endX])

  return (
    <section
      ref={containerRef}
      id="our-works"
      className="relative w-full"
      style={{ height: `${projects.length * 200}vh` }}
    >
      <div className="sticky top-0 h-screen w-full bg-white overflow-hidden">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ backgroundImage: grain, backgroundSize: "200px 200px" }}
        />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span
            className="font-black uppercase"
            style={{
              fontSize: "25vw",
              letterSpacing: "-0.04em",
              color: "rgba(26,26,0,0.03)",
              lineHeight: 1,
            }}
          >
            WORKS
          </span>
        </div>

        {/* Horizontal scroll track */}
        <motion.div
          layout={false}
          style={{
            x,
            display: "flex",
            height: "100%",
            width: `${projects.length * 100}vw`,
          }}
        >
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom nav */}
        <div className="absolute bottom-10 left-10 right-10 z-30 flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
              Project Index
            </span>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <ProjectScrollDot
                  key={i}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  containerRef={containerRef}
                />
              ))}
            </div>
          </div>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1a00] text-[#f5f5dc] border border-[#d4d44b]/20 transition-all hover:bg-black"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black leading-none uppercase tracking-widest text-[#d4d44b]/60">Navigate</span>
              <span className="text-xs font-black uppercase tracking-widest">Skip Section</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#d4d44b] flex items-center justify-center text-[#1a1a00] group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

