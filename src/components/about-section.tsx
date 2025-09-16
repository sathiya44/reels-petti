"use client"

import { useEffect, useRef, useState } from "react"
import { Camera } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 px-6 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h3 className="text-sm uppercase tracking-wider mb-4 text-blue-600">ABOUT US</h3>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Welcome to Reels Petti!</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a team of creative video professionals dedicated to bringing your vision to life through compelling
            visual storytelling. Our agency specializes in reels, commercials, documentaries, and creative content that
            engages audiences and elevates brands.
          </p>
        </div>
        <div
          className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="w-full h-64 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="flex items-center space-x-2 text-blue-600">
              <Camera className="h-8 w-8" />
              <span className="font-semibold">Reels Petti Creative Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
