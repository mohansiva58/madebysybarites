"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

// --- CSS ONLY MOCKUPS ---

const WebMockup = () => (
  <div className="w-full h-full bg-[#f8f9fa] rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col pointer-events-none">
    <div className="flex gap-1.5 p-3 border-b border-gray-200 bg-white">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
    </div>
    <div className="p-3 flex flex-col gap-3 h-full">
      <div className="flex-1 bg-[#edf2f7] rounded-xl w-full relative overflow-hidden flex items-center justify-center min-h-[100px]">
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-200/50 rounded-full blur-2xl"></div>
        <div className="w-16 h-16 rounded-full bg-blue-100 shadow-sm border border-blue-50"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded-full w-2/3 shrink-0"></div>
      <div className="flex gap-2 shrink-0">
        <div className="h-10 lg:h-12 w-1/2 bg-white rounded-lg shadow-sm"></div>
        <div className="h-10 lg:h-12 w-1/2 bg-white rounded-lg shadow-sm"></div>
      </div>
    </div>
  </div>
)

const AppMockup = () => (
  <div className="w-[85%] mx-auto h-full bg-gray-900 rounded-[2.5rem] border-[6px] border-[#111] shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative pointer-events-none pb-2">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#111] rounded-b-xl z-20"></div>
    <div className="p-3 lg:p-4 pt-8 lg:pt-10 flex flex-col gap-3 lg:gap-4 flex-1">
      <div className="flex justify-between items-center shrink-0">
        <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
        <div className="w-12 h-3 bg-gray-700 rounded-full"></div>
      </div>
      <div className="flex-1 min-h-[100px] bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-xl relative overflow-hidden shadow-inner">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      </div>
      <div className="flex gap-2 shrink-0">
        <div className="h-12 flex-1 bg-gray-800 rounded-xl"></div>
        <div className="h-12 flex-1 bg-gray-800 rounded-xl"></div>
      </div>
    </div>
    <div className="h-2 w-1/3 bg-gray-800 rounded-full mx-auto shrink-0 mb-1"></div>
  </div>
)

const SaaSMockup = () => (
  <div className="w-[95%] mx-auto bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden flex h-full pointer-events-none">
    <div className="w-[30%] bg-gray-50 flex flex-col gap-2 p-2 border-r border-gray-100">
      <div className="w-full h-5 bg-indigo-100 rounded mb-2"></div>
      <div className="w-full h-2 bg-gray-200 rounded"></div>
      <div className="w-4/5 h-2 bg-gray-200 rounded"></div>
      <div className="w-full h-2 bg-gray-200 rounded"></div>
    </div>
    <div className="flex-1 p-2 lg:p-3 flex flex-col gap-2 lg:gap-3">
      <div className="flex justify-between shrink-0">
        <div className="w-16 h-3 bg-gray-100 rounded"></div>
        <div className="w-6 h-6 rounded-full bg-gray-100"></div>
      </div>
      <div className="flex gap-2 shrink-0">
        <div className="flex-1 h-10 lg:h-12 bg-indigo-50 rounded-lg p-2 border border-indigo-100"></div>
        <div className="flex-1 h-10 lg:h-12 bg-gray-50 rounded-lg p-2 border border-gray-100"></div>
      </div>
      <div className="flex-1 bg-white border border-gray-100 rounded-lg flex items-end p-2 gap-1 overflow-hidden relative min-h-[80px]">
        <div className="w-1/4 bg-teal-200 rounded-t h-[40%]"></div>
        <div className="w-1/4 bg-teal-300 rounded-t h-[60%]"></div>
        <div className="w-1/4 bg-teal-400 rounded-t h-[50%]"></div>
        <div className="w-1/4 bg-teal-500 rounded-t h-[80%]"></div>
      </div>
    </div>
  </div>
)

const BrandingMockup = () => (
  <div className="w-[90%] mx-auto bg-zinc-900 rounded-2xl border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col items-center justify-center h-full p-4 lg:p-6 relative pointer-events-none">
    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl"></div>

    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-rose-400 to-indigo-500 shadow-lg flex items-center justify-center p-1 z-10">
      <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white mix-blend-overlay rounded-full opacity-50"></div>
        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
      </div>
    </div>

    <div className="flex gap-2 mt-6 lg:mt-8 z-10">
      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-rose-400 shadow-md"></div>
      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-indigo-500 shadow-md"></div>
      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-400 shadow-md"></div>
    </div>

    <div className="mt-4 lg:mt-6 flex flex-col items-center gap-2 z-10">
      <div className="text-white/90 font-serif italic text-2xl lg:text-3xl">Aa</div>
      <div className="w-8 h-1 bg-white/20 rounded-full mt-1"></div>
    </div>
  </div>
)

const ArchCard = ({ height, width, radius, label, isImage, children, className }: { height: string, width: string, radius: string, label: string, isImage?: boolean, children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);


  useEffect(() => {
    let animationFrameId: number;

    const updateScale = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Calculate position relative to the viewport (0 = far left, 1 = far right)
      // We use the center of the card for the calculation
      const cardMid = rect.left + rect.width / 2;
      const progress = Math.max(0, Math.min(1, cardMid / viewportWidth));

      // Rising slope: Scale from 0.35 at the left to 1.0 at the right margin
      const finalScale = 0.35 + (progress * 0.65);

      setScale(finalScale);
      animationFrameId = requestAnimationFrame(updateScale);
    };

    animationFrameId = requestAnimationFrame(updateScale);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex justify-center items-end shrink-0 ${className}`}
      style={{
        width: width,
        height: height,
        borderRadius: `${radius} ${radius} 0 0`,
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
        border: "3px solid #d8dafb",
        scaleY: scale,
        originY: 1, // Grow from bottom-up
      }}
    >
      {/* Container for the mockup */}
      <div className={`absolute ${isImage ? 'inset-0 w-full h-full' : 'top-10 left-[5%] w-[90%] h-[90%] drop-shadow-2xl'} transition-transform duration-500 hover:scale-[1.04] origin-bottom cursor-pointer`}>
        {children}
      </div>
      {!isImage && <span className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.15em] z-10 mb-8">{label}</span>}
    </motion.div>
  );
}

const CARDS_DATA = [
  { id: 1, img: "/works/project3.png", label: "Web", h: "80vh", w: "220px", r: "110px" },
  { id: 2, img: "/works/project1.png", label: "Apps", h: "80vh", w: "220px", r: "110px" },
  { id: 3, img: "/works/project2.png", label: "SaaS", h: "80vh", w: "220px", r: "110px" },
  { id: 4, img: "/works/project4.png", label: "Brand", h: "80vh", w: "220px", r: "110px" },
  { id: 5, img: "/works/project5.png", label: "Design", h: "80vh", w: "220px", r: "110px" },
  { id: 6, img: "/works/project6.png", label: "Mobile", h: "80vh", w: "220px", r: "110px" },
  { id: 7, img: "/works/project7.png", label: "Product", h: "80vh", w: "220px", r: "110px" },
  { id: 8, img: "/works/project8.png", label: "UI/UX", h: "80vh", w: "220px", r: "110px" },
  { id: 9, img: "/works/project9.png", label: "Creative", h: "80vh", w: "220px", r: "110px" },
]

export function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[715px] xl:min-h-[765px] overflow-hidden bg-white selection:bg-[#E6E5FF] selection:text-black">

      {/* Background shape mimicking the reference slant */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #e4e2f6 0%, #d8dafb 100%)",
          clipPath: "polygon(0 0, 75% 0, 42% 100%, 0 100%)"
        }}
      />
      <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-28 pb-0">

        {/* Left Content */}
        <div className="w-full lg:w-[40%] flex flex-col h-full pt-10 lg:pt-[15vh] relative z-30">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] text-[#111] leading-[1.05] tracking-[-0.02em] uppercase max-w-[800px] font-semibold"
            style={{ fontFamily: "'DxRuiga-SemiBold', sans-serif" }}
          >
            HIGH PERFORMANCE.<br />ELEVATED<br />EXPERIENCES.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 md:mt-10 flex items-start gap-4 md:gap-6"
          >
            {/* 4 Point Star Icon */}

            <p className="text-[#333] text-[15px] md:text-[17px] font-medium leading-[1.6] max-w-sm tracking-[0.02em]">
              Fluid code. Iconic designs.<br />
              Effortless scale. Built from<br />
              zero to one.
            </p>
          </motion.div>

          {/* Client Review Box matching exact Ivory Mode UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 md:mt-16 bg-[#aeb2d8] rounded-[32px] p-6 lg:p-7 w-[90%] max-w-[340px] shadow-lg relative border border-[#c4c7e6] backdrop-blur-md"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[2.5rem] md:text-[3rem] text-white font-light leading-none tracking-tight -ml-1">400<span className="text-[2rem] font-normal align-top">+</span></h3>
                <p className="text-white/90 text-[13px] tracking-wide mt-2">Projects Delivered</p>
              </div>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                <ArrowRight className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-3">
                {["/avatar-1.jpg", "/avatar-2.jpg", "/avatar-3.jpg", "/placeholder.jpg"].map((src, i) => (
                  <img key={i} src={src} className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#aeb2d8] object-cover bg-gray-200" alt="avatar" />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                <span className="text-white font-medium text-[14px] md:text-[16px]">5 Stars</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Infinite Dynamic Mountain Loop */}
        <div className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-none">
          {/* Gradient mask to protect text on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-20 w-[60%] hidden lg:block" />

          <div className="absolute bottom-0 right-0 w-full h-[85vh] overflow-hidden pointer-events-auto">
            <motion.div
              className="flex items-end gap-[48px] h-full absolute bottom-0 left-0 px-24"
              animate={{
                x: ["-50%", "0%"]
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
              }}
              style={{ width: "max-content" }}
            >
              {/* Double the array for seamless loop */}
              {[...CARDS_DATA, ...CARDS_DATA].map((card, idx) => (
                <motion.div
                  key={`${card.id}-${idx}`}
                  className="shrink-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx % 9) * 0.1 }}
                >
                  <ArchCard
                    height={card.h}
                    width={card.w}
                    radius={card.r}
                    label={card.label}
                    isImage
                  >
                    <img src={card.img} alt={card.label} className="w-full h-full object-cover" />
                  </ArchCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  )
}
