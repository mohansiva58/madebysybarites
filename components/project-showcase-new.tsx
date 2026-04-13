"use client"

import { ProjectCard } from "./project-card"
import { ProjectsSectionHeader } from "./projects-section-header"

// Project data
const projects = [
  {
    image: "/works/project1.png",
    label: "ROFERO",
    labelColor: "bg-blue-600",
    overlayTitle: "ROFERO – Clothing Brand",
    overlaySubtitle: "Premium clothing brand website with modern UI/UX and smooth animations",
    ctaText: "View Project",
    ctaColor: "bg-blue-600 hover:bg-blue-700",
    description: "Premium clothing brand website with modern UI/UX, smooth animations, and immersive product showcases.",
    response: "98/100 Performance | 50K+ Users | +45% Conversion",
    author: "Mohan Siva",
    authorTitle: "Lead Developer",
    authorImage: "/avatar.png",
  },
  {
    image: "/works/project2.png",
    label: "ATLURI EVENTS",
    labelColor: "bg-teal-600",
    overlayTitle: "Atluri Events",
    overlaySubtitle: "Event planner with service sections, galleries, and testimonials",
    ctaText: "View Project",
    ctaColor: "bg-teal-600 hover:bg-teal-700",
    description: "Visually captivating event management website with service sections, galleries, and testimonials.",
    response: "200+ Events | 150+ Clients | 4.9/5 Satisfaction",
    author: "Mohan Siva",
    authorTitle: "Full Stack Developer",
    authorImage: "/avatar.png",
  },
  {
    image: "/works/project3.png",
    label: "AKEPATIMART",
    labelColor: "bg-purple-600",
    overlayTitle: "Akepatimart",
    overlaySubtitle: "Full-featured e-commerce marketplace with seamless shopping",
    ctaText: "View Project",
    ctaColor: "bg-purple-600 hover:bg-purple-700",
    description: "Full-featured online marketplace with product listings, cart functionality, and seamless shopping experience.",
    response: "5K+ Products | 10K+ Sales | +120% Growth",
    author: "Mohan Siva",
    authorTitle: "Full Stack Developer",
    authorImage: "/avatar.png",
  },
  {
    image: "/works/project4.png",
    label: "WONDERKIDS",
    labelColor: "bg-pink-600",
    overlayTitle: "Wonderkids",
    overlaySubtitle: "Interactive learning platform for kids with engaging activities",
    ctaText: "View Project",
    ctaColor: "bg-pink-600 hover:bg-pink-700",
    description: "Engaging and colorful interactive platform for kids featuring activities and learning modules.",
    response: "10K+ Students | 50+ Courses | 92% Completion",
    author: "Mohan Siva",
    authorTitle: "Lead Developer",
    authorImage: "/avatar.png",
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
            <ProjectCard key={idx} {...project} />
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
