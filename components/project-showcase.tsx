"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface ProjectCard {
  id: number;
  image: string;
  testimonial: string;
  clientName: string;
  response: string;
  avatar: string;
  fullName: string;
  title: string;
  companyHighlight?: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    image: "/3d-dark-textured-carbon-fiber-background-with-text.jpg",
    testimonial:
      "We imagined the extraordinary—a 3D immersive experience. madebysybarites brought it to life with precision and creativity.",
    clientName: "Nino Gorbach",
    response: "Pushing boundaries is what we do",
    avatar: "/professional-woman-headshot.png",
    fullName: "Nino Gorbach",
    title: "COO,",
    companyHighlight: "ATH",
  },
  {
    id: 2,
    image: "/tfs-finserv-mobile-app-mockup-pink-coral-backgroun.jpg",
    testimonial:
      "We thought it was impossible. madebysybarites made it possible and changed how we see tech partners.",
    clientName: "Narasimha Reddy",
    response: "Grateful to set new standards together.",
    avatar: "/professional-indian-businessman-headshot.jpg",
    fullName: "Narasimha Reddy",
    title: "Founder & CEO of",
    companyHighlight: "TFS",
  },
  {
    id: 3,
    image: "/english-ai-learning-app-with-purple-background-car.jpg",
    testimonial:
      "madebysybarites turned our vision into reality. Instant, personalized feedback changed student learning forever.",
    clientName: "Sujith Reddy Gopu",
    response: "Honored to drive lasting impact.",
    avatar: "/professional-indian-man-headshot.jpg",
    fullName: "Sujith Reddy Gopu",
    title: "Founder of",
    companyHighlight: "Fluent Pro",
  },
  {
    id: 4,
    image: "/project-management-dashboard-multiple-ui-screens-m.jpg",
    testimonial:
      "madebysybarites met our most ambitious requirements. Their team became a trusted extension, not just a vendor.",
    clientName: "Abhishek",
    response: "Proud to be your trusted partner.",
    avatar: "/professional-indian-man-headshot-smiling.jpg",
    fullName: "Abhishek",
    title: "Senior Business Analyst at",
    companyHighlight: "Conquer",
  },
];

export function ProjectShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // AUTO-SCROLL TO NEXT CARD EVERY 5 SECONDS
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const cardWidth = 446; // card width + gap
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white -mt-[40px]">
      <div className="max-w-[1600px] mx-auto px-6 ">

        {/* Horizontal Auto Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...projects, ...projects, ...projects].map((p, index) => (
            <div
              key={`${p.id}-${index}`}
              className="flex-shrink-0 w-[403px] bg-[#f8fafc] border-2 border-white rounded-[32px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] snap-start transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)]"
            >
              {/* ---------------- TOP IMAGE SECTION ---------------- */}
              <div className="relative h-[280px] w-full p-4">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                  <Image src={p.image} alt="" fill className="object-cover" />

                  {/* Corner badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                    {p.companyHighlight}
                  </div>
                </div>
              </div>

              {/* ---------------- TEXT CONTENT ---------------- */}
              <div className="px-6 pb-6">

                {/* Testimonial bubble */}
                <div className="bg-gray-100 rounded-[20px] rounded-tl-[4px] px-5 py-4 text-[16px] leading-[1.55] text-gray-900 mb-6">
                  {p.testimonial}
                  <p className="text-[13px] text-gray-500 mt-3 mb-0">{p.clientName}</p>
                </div>

                {/* Response bubble */}
                <div className="flex justify-end mb-6">
                  <div className="bg-gray-800 text-white rounded-[20px] rounded-tr-[4px] px-5 py-4 text-[15px] max-w-[85%]">
                    {p.response}
                    <p className="text-[13px] text-gray-400 text-right mt-3 mb-0">madebysybarites</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50">
                  <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-gray-100">
                    <Image src={p.avatar} alt={p.fullName} width={44} height={44} className="object-cover" />
                  </div>

                  <div>
                    <p className="text-[15px] font-semibold text-gray-900">{p.fullName}</p>
                    <p className="text-[13px] text-gray-600">
                      {p.title} <span className="text-blue-600 font-medium">{p.companyHighlight}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
