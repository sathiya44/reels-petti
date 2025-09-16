"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Video, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  isMenuOpen: boolean
  toggleMenu: () => void
  handleFlip: () => void
  heroAnimated: boolean
}

export default function HeroSection({ isMenuOpen, toggleMenu, handleFlip, heroAnimated }: HeroSectionProps) {
  const [logoVisible, setLogoVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [magicVisible, setMagicVisible] = useState(false)
  const [descVisible, setDescVisible] = useState(false)
  const [scrollVisible, setScrollVisible] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTimeout(() => setLogoVisible(true), 100)
              setTimeout(() => setMenuVisible(true), 200)
              setTimeout(() => setTitleVisible(true), 400)
              setTimeout(() => setMagicVisible(true), 600)
              setTimeout(() => setDescVisible(true), 800)
              setTimeout(() => setScrollVisible(true), 1000)
            }, 300)
          } else {
            setLogoVisible(false)
            setMenuVisible(false)
            setTitleVisible(false)
            setMagicVisible(false)
            setDescVisible(false)
            setScrollVisible(false)
          }
        })
      },
      { threshold: 0.1, rootMargin: "-10% 0px -10% 0px" }, // Lower threshold and added margin
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative h-full w-full"
      style={{
        background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
        backgroundColor: "#1e40af",
      }}
    >
      {/* Header */}
      <header className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between p-6">
        <div
          className={`flex items-center space-x-2 text-xl font-bold text-white drop-shadow-lg transition-all duration-1000 ${
            logoVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* <Video className="h-8 w-8" /> */}
          <img
            src={"/logo.png"}
            alt={""}
            className="h-8 "
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`text-white transition-all duration-1000 hover:bg-white/10 ${
            menuVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={toggleMenu}
        >
          <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </Button>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className={`mb-4 text-4xl font-light text-balance text-white drop-shadow-lg transition-all duration-1000 md:text-6xl lg:text-7xl ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          We create your
        </h1>
        <div className="relative">
          <h2
            className={`mb-2 text-4xl font-light text-white drop-shadow-lg transition-all duration-1000 md:text-6xl lg:text-7xl ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            visual <span className="text-white line-through opacity-60">story</span>
          </h2>
          <span
            className={`absolute right-0 -bottom-8 text-2xl font-light text-white italic drop-shadow-lg transition-all duration-1000 md:text-3xl lg:text-4xl ${
              magicVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            magic
          </span>
        </div>
        <p
          className={`mt-12 text-lg text-white opacity-90 drop-shadow-lg transition-all duration-1000 md:text-xl ${
            descVisible ? "translate-y-0 opacity-90" : "translate-y-8 opacity-0"
          }`}
        >
          Professional video production, reels & creative content
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <button
          onClick={handleFlip}
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-1000 hover:scale-110 hover:bg-white/10 ${
            scrollVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </div>
  );
}
