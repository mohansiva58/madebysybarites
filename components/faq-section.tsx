"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "We specialize in web applications, mobile apps, AI/ML solutions, landing pages, e-commerce platforms, SaaS products, and brand identity design. Whether you're a startup building an MVP or an enterprise scaling an existing platform, we have the expertise to deliver.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on complexity. A landing page takes 1-2 weeks, a web application 4-8 weeks, and a full-stack platform 8-16 weeks. We provide detailed timelines during our discovery phase and keep you updated with bi-weekly sprints.",
  },
  {
    question: "What technologies do you use?",
    answer: "We work with modern, battle-tested technologies including React, Next.js, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, MongoDB, AWS, and more. We choose the right tools based on your project requirements, not trends.",
  },
  {
    question: "How does your pricing work?",
    answer: "We offer both fixed-price and time-and-materials models. After our discovery call, we provide a detailed proposal with transparent pricing. No hidden fees, no surprises. We believe in fair pricing that reflects the premium quality we deliver.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. We offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and scaling assistance. We treat every client as a long-term partner, not a one-time transaction.",
  },
  {
    question: "Can I see your previous work before committing?",
    answer: "Yes! Check our portfolio section above or book a call with us. We're happy to walk you through our case studies, share relevant examples, and discuss how we can bring your vision to life.",
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 md:p-7 rounded-2xl transition-all duration-500 ${
          isOpen
            ? "bg-[#0d0d0d] border border-white/[0.08]"
            : "bg-[#0a0a0a] border border-white/[0.04] hover:border-white/[0.06]"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[16px] md:text-[17px] font-semibold text-white pr-4">
            {faq.question}
          </h3>
          <div className={`flex-shrink-0 p-1.5 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
              : "bg-white/[0.06] text-zinc-400"
          }`}>
            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-[15px] text-zinc-400 leading-relaxed pr-8">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faqs" className="relative py-28 md:py-36 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-cyan-400 mb-4">
            FAQ
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Got{" "}
            <span className="text-gradient">Questions?</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
