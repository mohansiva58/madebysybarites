"use client";

import React from "react";
import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingNav } from "@/components/floating-nav"

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <FloatingNav />
      <div className="w-full min-h-screen bg-white text-black px-6 md:px-20 lg:px-32 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SECTION */}
          <div className="space-y-6">
            <p className="text-sm font-medium">Contact Us</p>

            <h1 className="text-4xl font-bold">Get in touch</h1>

            <p className="text-[17px] leading-relaxed text-gray-700 max-w-md">
              Reach out and let's explore how we can bring your ideas to life.
              Whether you're ready to begin or just have questions.
            </p>

            <div className="pt-4">
              <p className="text-lg font-semibold">+91 70756 31155</p>

              <p className="text-2xl font-semibold mt-2">
                hello@madebysybarites.tech
              </p>

              <p className="text-gray-700 mt-2 max-w-sm">
                Reach out to us via email or give us a call, we are happy to assist you!
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-black hover:opacity-70 transition"
              >
                <span className="text-lg">↗</span>
                <span>Instagram</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-2 text-black hover:opacity-70 transition"
              >
                <span className="text-lg">↗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT SECTION (FORM) */}
          <div className="space-y-5">
            <form className="w-full space-y-5">

              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                />
              </div>

              <select className="w-full border border-gray-300 rounded-full px-5 py-3 bg-white focus:outline-none">
                <option>Select a budget</option>
                <option>₹10,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>

              <textarea
                placeholder="What can we help you with?"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 h-40 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>

            {/* ADDRESS + OFFICE HOURS */}
            <div className="pt-10 space-y-8">
              <div className="flex items-start space-x-3">
                <div className="p-3 bg-blue-50 rounded-full">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-gray-700">
                    Phase 3, KPHB, Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-3 bg-blue-50 rounded-full">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Office Hours</p>
                  <p className="text-gray-700">
                    Monday to Friday: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
