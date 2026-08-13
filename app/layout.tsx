import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Syne, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Sybarites | Premium Digital Agency & Software Solutions",
  description:
    "We design, build, and scale world-class digital products. From stunning websites to AI-powered applications — Sybarites is your trusted tech partner for premium software solutions.",
  keywords: ["digital agency", "software solutions", "web development", "mobile apps", "UI/UX design", "AI solutions", "tech partner", "premium software", "Sybarites"],
  authors: [{ name: "Sybarites" }],
  openGraph: {
    title: "Sybarites | Premium Digital Agency & Software Solutions",
    description: "We design, build, and scale world-class digital products. Your trusted tech partner for premium software solutions.",
    type: "website",
    siteName: "Sybarites",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sybarites | Premium Digital Agency",
    description: "We design, build, and scale world-class digital products.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-[#050505] text-[#e4e4e7]" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
