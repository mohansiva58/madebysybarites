"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#fce7f3] via-white to-[#ede9fe] selection:bg-[#e9d5ff] selection:text-black pt-24 pb-12 md:pb-20">

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#ec4899]/20 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-[#a78bfa]/15 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Wavy lines decoration */}
      <svg className="absolute top-32 left-0 w-40 h-40 text-[#ec4899]/30" viewBox="0 0 200 200" fill="none" stroke="currentColor">
        <path d="M 20 50 Q 50 30 80 50 T 140 50" strokeWidth="2" />
        <path d="M 10 70 Q 40 50 70 70 T 130 70" strokeWidth="2" />
        <path d="M 30 90 Q 60 70 90 90 T 150 90" strokeWidth="2" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
              >
                We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">CREATIVE</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
              >
                Crafting stunning web experiences that captivate, engage, and drive results for ambitious brands and startups.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4 flex-wrap"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#ec4899] text-[#ec4899] font-semibold rounded-full hover:bg-[#fce7f3] transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">Trusted by 50+ brands worldwide</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Circular Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-[500px] hidden lg:flex items-center justify-center"
          >
            {/* Large circular background */}
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#ec4899] to-[#f97316] opacity-90 flex items-center justify-center overflow-hidden shadow-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" 
                alt="Team members" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating decorative circles */}
            <motion.div
              className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#fde047] opacity-80 shadow-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute bottom-20 left-5 w-32 h-32 rounded-full bg-[#60a5fa] opacity-70 shadow-lg"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#8b5cf6]/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
