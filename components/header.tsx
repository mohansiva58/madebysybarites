"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faqs" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-1 transition-all duration-500 ${isScrolled ? "rounded-full border border-border bg-white/90 px-4 py-2 shadow-[0_10px_35px_rgba(38,34,29,0.08)] backdrop-blur-md" : ""}`}>
          <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="Sybarites home">
            <img src="/favicon.png" alt="Sybarites" className="h-15 w-auto object-contain" />
            <span className="hidden text-sm font-semibold tracking-[0.08em] text-foreground sm:block">SYBARITES</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.label} href={item.href} className="rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{item.label}</Link>)}
          </nav>
          <Link href="#contact" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:flex">Start a project <ArrowUpRight data-icon="inline-end" /></Link>
          <button className="relative z-10 rounded-full border border-border p-2 text-foreground lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex flex-col bg-white px-8 pt-28 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item, i) => <motion.div key={item.label} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .06 }}><Link href={item.href} onClick={() => setIsOpen(false)} className="block border-b border-border py-4 font-display text-4xl tracking-tight text-foreground">{item.label}</Link></motion.div>)}
          </nav>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Start a project <ArrowUpRight data-icon="inline-end" /></Link>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}
