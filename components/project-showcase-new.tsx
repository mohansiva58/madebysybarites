"use client"

import { ProjectCardSimple } from "./project-card-simple"
import { ProjectCarouselContainer } from "./project-carousel-container"
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
    <section id="our-works" className="w-full bg-white">
      {/* Section Header with Landing Animations */}
      <ProjectsSectionHeader />

      {/* Carousel Container with Cursor-based Horizontal Scroll */}
      <ProjectCarouselContainer>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="lg:w-96 h-full flex-shrink-0"
          >
            <ProjectCardSimple
              id={`project-${idx}`}
              title={project.title}
              image={project.image}
              client={project.tags[0]}
              live={project.live}
              github={project.github}
              tags={project.tags}
            />
          </div>
        ))}
      </ProjectCarouselContainer>

      {/* Bottom CTA Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
        <div className="space-y-4">
          <p className="text-lg text-slate-600">
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
