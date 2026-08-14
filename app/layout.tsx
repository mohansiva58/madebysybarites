import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Syne, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"

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
  keywords: [
    "Sybarites",
    "made by Sybarites",
    "premium digital agency",
    "web design agency",
    "web development company",
    "Next.js development agency",
    "UI UX design studio",
    "SaaS product design",
    "ecommerce website development",
    "AI product development",
    "software solutions company",
    "brand strategy agency",
    "digital transformation partner",
    "best web design agency in India",
    "custom website design and development",
  ],
  metadataBase: new URL("https://madebysybarites.tech"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "PdwT7y19BvUsH0qzJQBrqG_aois94qcfSKImEYsFlbw",
  },
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
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${geistMono.variable} bg-background`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Sybarites",
              url: "https://madebysybarites.tech",
              description: "Premium web design, development, branding, and software solutions for ambitious businesses.",
              areaServed: "Worldwide",
              serviceType: ["Web Design", "Web Development", "UI/UX Design", "SaaS Development", "Brand Strategy"],
            }),
          }}
        />
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
