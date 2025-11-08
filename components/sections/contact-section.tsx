"use client"

import { Github, Chrome, BookOpen } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Get
                <br />
                started
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Install & configure</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="https://github.com/zjy365/reddit-ai-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Github className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">GitHub</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  zjy365/reddit-ai-assistant
                </p>
              </a>

              <a
                href="https://chromewebstore.google.com/detail/reddit-ai-assistant/pnlnmologgcbjdgioacnchgmimempkan"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Chrome className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Chrome Web Store</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  Available Now
                </p>
                <p className="mt-1 text-xs text-foreground/60 md:text-sm">Version 0.5.0</p>
              </a>

              <div
                className={`flex gap-2 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <a
                  href="https://github.com/zjy365/reddit-ai-assistant/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                >
                  Issues
                </a>
                <a
                  href="https://github.com/zjy365/reddit-ai-assistant/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                >
                  Discussions
                </a>
                <a
                  href="https://github.com/zjy365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                >
                  Developer
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-foreground/60">01</span>
                  <div className="h-px flex-1 bg-foreground/20" />
                </div>
                <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">Install Extension</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Install from Chrome Web Store with one click
                </p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-foreground/60">02</span>
                  <div className="h-px flex-1 bg-foreground/20" />
                </div>
                <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">Configure Settings</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Enter your OpenAI API key and customize preferences
                </p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-foreground/60">03</span>
                  <div className="h-px flex-1 bg-foreground/20" />
                </div>
                <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">Start Using</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Open the sidebar on any Reddit page and generate AI-powered replies
                </p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open("https://chromewebstore.google.com/detail/reddit-ai-assistant/pnlnmologgcbjdgioacnchgmimempkan", "_blank")}
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Install from Chrome Web Store
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
