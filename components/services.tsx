"use client";

import React from "react";
import { ExecutiveImpactCarousel, ServiceItem } from "@/components/ui/executive-impact-carousel";

const services: ServiceItem[] = [
  {
    name: "Web Development",
    image: "/services/web-development.png",
    modelImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    name: "App Development",
    image: "/services/app-development.png",
    modelImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    name: "AI Applications",
    image: "/services/ai-applications.png",
    modelImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    name: "UI/UX Design",
    image: "/services/ui-ux.png",
    modelImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    name: "Logo Designing",
    image: "/works/image.png",
    modelImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
  },
  {
    name: "Digital Marketing",
    image: "/services/digital-marketing.png",
    modelImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#f6f7fb]">
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111] tracking-tight">
          What We Build
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          We craft scalable, immersive, and high-performance digital products — from hyper-growth startups to enterprise platforms.
        </p>
      </div>

      <ExecutiveImpactCarousel services={services} />
    </section>
  );
}