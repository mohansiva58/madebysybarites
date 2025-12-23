"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ServicesComponentMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
  { name: "Web Development", image: "/services/web-development.png" },
  { name: "App Development", image: "/services/app-development.png" },
  { name: "AI Applications", image: "/services/ai-applications.png" },
  { name: "Data Driven Products", image: "/services/data-driven-products.png" },
  { name: "Blockchain Technology", image: "/services/blockchain-technology.png" },
  { name: "UI/UX", image: "/services/ui-ux.png" },
  { name: "Logo Designing", image: "/services/logo-designing.png" },
  { name: "Rapid Prototyping and MVPs", image: "/services/rapid-prototyping.png" },
  { name: "Digital Marketing & SEO", image: "/services/digital-marketing.png" }
];


  return (
    <section id="services" ref={sectionRef} className="py-20 bg-[#f0f0f0] relative">
      <div className="absolute top-0 left-0 w-full border-t border-dashed border-slate-300" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-3">
          <h2
            className={cn(
              "text-2xl md:text-3xl font-bold mb-6 text-slate-900 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Solutions Tailored for Your Growth
          </h2>

          <p
            className={cn(
              "text-lg text-slate-600 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Discover our full-service offerings — crafted to deliver reliability, scalability,
            and results.
          </p>
        </div>

        <div className="mb-16 border-t border-dashed border-slate-300" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              className={cn(
                "group relative flex flex-col items-center text-center",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Main image */}
              <div className="w-28 h-32 flex items-center justify-center relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={180}
                  height={140}
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* FLOATING PROJECTED IMAGE */}
              <div
                className="
                  absolute -top-48 left-1/2 -translate-x-1/2
                  w-64 h-40 rounded-lg overflow-hidden shadow-2xl
                  opacity-0 scale-95 pointer-events-none
                  transition-all duration-500 ease-out
                  group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2
                "
              >
              <Image
  src={service.image}
  alt={service.name}
  fill
  className="object-cover"
/>

              </div>

              {/* Title */}
              <h6 className="mt-3 text-lg font-semibold text-slate-900">
                {service.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponentMinimal;
