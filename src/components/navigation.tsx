"use client"

import { Video, Menu, X, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  isScrolled: boolean
  isMenuOpen: boolean
  toggleMenu: () => void
  scrollToTop: () => void
  handleFlip:() => void
}
export function StickyHeader({ isScrolled, isMenuOpen, toggleMenu, scrollToTop }: NavigationProps) {
  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 bg-blue-600 text-white flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "py- md:py-3 px-3 md:px-4 shadow-lg" : "py-3 md:py-4 px-4 md:px-6"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center space-x-2 font-bold text-base md:text-lg hover:opacity-80 transition-opacity cursor-pointer"
      >
          <img src={"/logo.png"}
            alt={""}
            className="h-8 "
          />
      </button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10 transition-all duration-300 w-8 h-8 md:w-10 md:h-10"
        onClick={toggleMenu}
      >
        <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
          {isMenuOpen ? <X className="h-4 w-4 md:h-5 md:w-5" /> : <Menu className="h-4 w-4 md:h-5 md:w-5" />}
        </div>
      </Button>
    </header>
  )
}

interface MenuOverlayProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export function MenuOverlay({ isMenuOpen, toggleMenu }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-blue-600/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-500 ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-blue-200 transition-colors duration-300"
      >
        <X className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <nav className="text-center space-y-6 md:space-y-8 px-4">
        {[
          { href: "#", label: "Home" },
          { href: "#about", label: "About Us" },
          { href: "#services", label: "Our Services" },
          { href: "#portfolio", label: "Portfolio" },
          { href: "#contact", label: "Contact" },
        ].map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={`block text-2xl md:text-3xl lg:text-4xl text-white hover:text-blue-200 transition-all duration-300 transform ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={toggleMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-4 md:bottom-6 text-blue-200 text-xs md:text-sm px-4 text-center">
        All rights reserved Reels Petti.
      </div>
    </div>
  )
}

interface ScrollToTopProps {
  scrollToTop: () => void
}

export function ScrollToTopButton({ scrollToTop, handleFlip }: ScrollToTopProps) {
  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40">
      <button
        onClick={handleFlip}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
      >
        <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
      </button>
    </div>
  )
}
