"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CustomCursor } from '@/components/custom-cursor'
import { GrainOverlay } from '@/components/grain-overlay'

interface PrivacyPolicyClientProps {
  markdown: string
}

export function PrivacyPolicyClient({ markdown }: PrivacyPolicyClientProps) {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <GrainOverlay />
      
      <nav className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15">
              <span className="text-xl font-bold text-foreground">R</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-foreground">Reddit AI Extension</span>
          </a>
          <a 
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            Back to Home
          </a>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-12 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:ml-6 [&_li]:mb-2 [&_strong]:font-bold [&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300 [&_ul]:mb-4 [&_ol]:mb-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  )
}

