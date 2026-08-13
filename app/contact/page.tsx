"use client";

import React, { useState } from "react";
import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingNav } from "@/components/floating-nav"

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "Select a budget",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "183ca44f-918a-4e6b-8f33-07e609b475f9",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          budget: "Select a budget",
          message: "",
        });
      } else {
        setStatusMessage({ type: "error", text: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatusMessage({ type: "error", text: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                href="https://www.instagram.com/sybarites.tech/"
                className="flex items-center space-x-2 text-black hover:opacity-70 transition"
              >
                <span className="text-lg">↗</span>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/company/madebysybarites/"
                className="flex items-center space-x-2 text-black hover:opacity-70 transition"
              >
                <span className="text-lg">↗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT SECTION (FORM) */}
          <div className="space-y-5">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                />
              </div>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full px-5 py-3 bg-white focus:outline-none cursor-pointer"
              >
                <option>Select a budget</option>
                <option>₹10,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>

              <textarea
                name="message"
                placeholder="What can we help you with?"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 h-40 focus:outline-none resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-full font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p className={`text-center text-sm font-medium ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {statusMessage.text}
                </p>
              )}
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
                    Andhra Pradesh, India
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
