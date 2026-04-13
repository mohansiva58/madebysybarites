"use client"

import { ProjectShowcaseCard } from "./project-showcase-card"
import { ProjectsSectionHeader } from "./projects-section-header"

// Project data with trust-building metrics
const projects = [
  {
    title: "ROFERO – Clothing Brand Website",
    description: "Premium clothing brand website with modern UI/UX, smooth animations, and immersive product showcases.",
    image: "/works/project1.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Node.js"],
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Users", value: "50K+" },
      { label: "Conversion", value: "+45%" },
    ],
    live: "https://clothingbrand-nu.vercel.app/",
    github: "https://github.com/mohansiva58/Rofero",
    featured: true,
  },
  {
    title: "Atluri Events – Event Planner",
    description: "Visually captivating event management website with service sections, galleries, and testimonials.",
    image: "/works/project2.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Events", value: "200+" },
      { label: "Clients", value: "150+" },
      { label: "Satisfaction", value: "4.9/5" },
    ],
    live: "https://atlurievents.in/",
    github: "https://github.com/mohansiva58/attuluri-events",
  },
  {
    title: "Akepatimart – E-Commerce",
    description: "Full-featured online marketplace with product listings, cart functionality, and seamless shopping experience.",
    image: "/works/project3.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
    metrics: [
      { label: "Products", value: "5K+" },
      { label: "Sales", value: "10K+" },
      { label: "Growth", value: "+120%" },
    ],
    live: "https://akepatimart.com/",
  },
  {
    title: "Wonderkids – Learning Platform",
    description: "Engaging and colorful interactive platform for kids featuring activities and learning modules.",
    image: "/works/project4.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Students", value: "10K+" },
      { label: "Courses", value: "50+" },
      { label: "Completion", value: "92%" },
    ],
    live: "https://wonderkids.great-site.net/?i=1",
    featured: false,
  },
]

export function ProjectShowcaseNew() {
  return (
    <section id="our-works" className="w-full bg-white py-8 md:py-12">
      {/* Section Header with Landing Animations */}
      <ProjectsSectionHeader />

      {/* Projects Grid with Staggered Animation */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={project.featured ? "md:col-span-2" : ""}>
              <ProjectShowcaseCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
        <div className="space-y-4">
          <p className="text-lg text-[#475569]">
            Ready to build something amazing together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0958ff] text-white font-semibold rounded-xl hover:shadow-floating transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
