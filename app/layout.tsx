import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "madebysybarites | World-class Tech Partner",
  description:
    "Trusted by startups and enterprises to design, build, and scale products that perform globally. Engineering your digital success.",
  keywords: ["web development", "mobile apps", "UI/UX design", "AI solutions", "tech partner", "software development"],
  authors: [{ name: "madebysybarites" }],
  openGraph: {
    title: "madebysybarites | World-class Tech Partner",
    description: "Trusted by startups and enterprises to design, build, and scale products that perform globally.",
    type: "website",
  },
  icons: {
    icon: "/image.png",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0958FF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
