"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "Who's behind madebysybarites?",
    answer:
      "madebysybarites is powered by a passionate team of developers, designers, and strategists who care about your success.",
  },
  {
    id: 2,
    question: "Do you accept custom requirements?",
    answer:
      "Absolutely. We tailor every project to your specific needs, ensuring the perfect fit.",
  },
  {
    id: 3,
    question: "What is your turnaround time?",
    answer:
      "It varies based on project scope. Most projects are delivered within 2–6 weeks.",
  },
  {
    id: 4,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and long-term support depending on your package.",
  },
  {
    id: 5,
    question: "Can you handle branding and marketing too?",
    answer:
      "Yes. We assist with branding, strategy, and marketing to complement your digital presence.",
  },
  {
    id: 6,
    question: "What's your pricing?",
    answer:
      "Pricing depends on project complexity. We provide flexible plans to suit all business sizes.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? -1 : id);
  };

  return (
    <div id="faqs" className="w-full min-h-screen bg-[#f5f5f5] py-20 px-6 md:px-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-700 mt-3 text-lg">
          We Get It—Curiosity Leads to Success! Got questions? That's a great sign. <br />
          Here are some
        </p>
      </div>

      {/* FAQ Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: Answer bubble */}
        <div className="space-y-6">
          {faqs.map((faq) =>
            openId === faq.id ? (
              <div key={faq.id} className="flex items-start gap-3">
                {/* Avatar */}
                <Image
                  src="/avatar-1.jpg"
                  width={45}
                  height={45}
                  alt="avatar"
                  className="rounded-full shadow-md"
                />

                {/* Answer bubble */}
                <div className="bg-white rounded-2xl shadow p-5 max-w-md">
                  <p className="text-gray-800">{faq.answer}</p>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Right: Questions Section */}
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex items-center gap-4">

              {/* Expand / Collapse Icon */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-xl"
              >
                {openId === faq.id ? "−" : "+"}
              </button>

              {/* Question bubble */}
              <button
                onClick={() => toggle(faq.id)}
                className={`px-6 py-3 rounded-full text-left text-[17px] font-medium transition-all
                  ${openId === faq.id
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}
              >
                {faq.question}
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
