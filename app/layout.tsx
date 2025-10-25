import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reddit AI Assistant - AI-Powered Chrome Extension",
  description: "Generate intelligent Reddit replies and posts using OpenAI. Choose from multiple templates, customize your tone, and engage with the community effortlessly.",
  keywords: ["Reddit", "AI", "Chrome Extension", "OpenAI", "Reply Generator", "Post Creator", "Artificial Intelligence"],
  authors: [{ name: "zjy365" }],
  creator: "zjy365",
  openGraph: {
    title: "Reddit AI Assistant - AI-Powered Chrome Extension",
    description: "Generate intelligent Reddit replies and posts using OpenAI. Choose from multiple templates, customize your tone, and engage with the community effortlessly.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit AI Assistant - AI-Powered Chrome Extension",
    description: "Generate intelligent Reddit replies and posts using OpenAI. Choose from multiple templates, customize your tone, and engage with the community effortlessly.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
