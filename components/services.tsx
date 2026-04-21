"use client";

import React from "react";
import { ExecutiveImpactCarousel, Product } from "@/components/ui/executive-impact-carousel";

const services: Product[] = [
  {
    id: "1",
    title: "Web Development",
    price: "Scalable Solutions",
    prodImg: "https://picsum.photos/800/600?random=5",
    modelImg: "/services/web-development.png"
  },
  {
    id: "2",
    title: "App Development",
    price: "Mobile First",
    prodImg: "https://picsum.photos/800/600?random=6",
    modelImg: "/services/app-development.png"
  },
  {
    id: "3",
    title: "AI Applications",
    price: "Smart Automation",
    prodImg: "https://picsum.photos/800/600?random=7",
    modelImg: "/services/ai-applications.png"
  },
  {
    id: "4",
    title: "Landing Pages",
    price: "Analytics",
    prodImg: "https://picsum.photos/800/600?random=8",
    modelImg: "/services/data-driven-products.png"
  },
  {
    id: "5",
    title: "SEO ",
    price: "Decentralized",
    prodImg: "https://picsum.photos/800/600?random=9",
    modelImg: "/services/blockchain-technology.png"
  },
  {
    id: "6",
    title: "UI/UX",
    price: "Digital Experiences",
    prodImg: "https://picsum.photos/800/600?random=10",
    modelImg: "/services/ui-ux.png"
  },
  {
    id: "7",
    title: "Logo Designing",
    price: "Brand Identity",
    prodImg: "https://picsum.photos/800/600?random=11",
    modelImg: "/works/image.png"
  },
  {
    id: "8",
    title: "Rapid Prototyping and MVPs",
    price: "Fast Iterations",
    prodImg: "https://picsum.photos/800/600?random=12",
    modelImg: "/services/rapid-prototyping.png"
  },
  {
    id: "9",
    title: "Digital Marketing ",
    price: "Growth Metrics",
    prodImg: "https://picsum.photos/800/600?random=13",
    modelImg: "/services/digital-marketing.png"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-blue-100/40 to-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/40 via-pink-200/35 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-300/35 via-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-300/35 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative pt-24 pb-8 max-w-7xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111] tracking-tight">
          What We Build
        </h2>
        <p className="mt-6 text-xl text-gray-900 max-w-2xl mx-auto">
          We craft scalable, immersive, and high-performance digital products — from hyper-growth startups to enterprise platforms.
        </p>
      </div>

      <ExecutiveImpactCarousel products={services} />
    </section>
  );
}