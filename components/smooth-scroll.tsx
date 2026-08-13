"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
    })

    const onFrame = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(onFrame)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onFrame)
      lenis.destroy()
    }
  }, [])

  return null
}
