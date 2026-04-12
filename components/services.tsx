"use client";

import React from "react";
import { ExecutiveImpactCarousel, Product } from "@/components/ui/executive-impact-carousel";

const services: Product[] = [
  {
    id: "1",
    title: "Web Development",
    price: "Scalable Solutions",
    prodImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    modelImg: "/services/web-development.png"
  },
  {
    id: "2",
    title: "App Development",
    price: "Mobile First",
    prodImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    modelImg: "/services/app-development.png"
  },
  {
    id: "3",
    title: "AI Applications",
    price: "Smart Automation",
    prodImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    modelImg: "/services/ai-applications.png"
  },
  {
    id: "4",
    title: "Landing Pages",
    price: "Analytics",
    prodImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    modelImg: "/services/data-driven-products.png"
  },
  {
    id: "5",
    title: "SEO ",
    price: "Decentralized",
    prodImg: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80",
    modelImg: "/services/blockchain-technology.png"
  },
  {
    id: "6",
    title: "UI/UX",
    price: "Digital Experiences",
    prodImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    modelImg: "/services/ui-ux.png"
  },
  {
    id: "7",
    title: "Logo Designing",
    price: "Brand Identity",
    prodImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    modelImg: "/works/image.png"
  },
  {
    id: "8",
    title: "Rapid Prototyping and MVPs",
    price: "Fast Iterations",
    prodImg: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    modelImg: "/services/rapid-prototyping.png"
  },
  {
    id: "9",
    title: "Digital Marketing ",
    price: "Growth Metrics",
    prodImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    modelImg: "/services/digital-marketing.png"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white">
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
          What We Build
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          We craft scalable, immersive, and high-performance digital products — from hyper-growth startups to enterprise platforms.
        </p>
      </div>

      <ExecutiveImpactCarousel products={services} />
    </section>
  );
}
