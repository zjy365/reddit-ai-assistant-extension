import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reddit AI Assistant - AI-Powered Chrome Extension",
  description: "AI-powered assistant for Reddit replies and posts. Generate smart replies, create engaging posts, and boost your Reddit presence with AI-powered assistance. Privacy-first design using your own OpenAI API key.",
  keywords: ["Reddit", "AI", "Chrome Extension", "OpenAI", "Reply Generator", "Post Creator", "Artificial Intelligence", "Reddit Assistant"],
  authors: [{ name: "zjy365" }],
  creator: "zjy365",
  openGraph: {
    title: "Reddit AI Assistant - AI-Powered Chrome Extension",
    description: "AI-powered assistant for Reddit replies and posts. Generate smart replies, create engaging posts, and boost your Reddit presence with AI-powered assistance. Privacy-first design using your own OpenAI API key.",
    type: "website",
    locale: "en_US",
    url: "https://chromewebstore.google.com/detail/reddit-ai-assistant/pnlnmologgcbjdgioacnchgmimempkan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit AI Assistant - AI-Powered Chrome Extension",
    description: "AI-powered assistant for Reddit replies and posts. Generate smart replies, create engaging posts, and boost your Reddit presence with AI-powered assistance. Privacy-first design using your own OpenAI API key.",
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
