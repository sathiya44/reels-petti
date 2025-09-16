"use client"

import { useEffect, useRef, useState } from "react"

export default function PortfolioSection() {
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

  const works = [
    { image: "/fashion-photography-model-in-red-coat.jpg", alt: "Fashion Reel" },
    { image: "/person-with-surfboard-at-beach-sunset.jpg", alt: "Lifestyle Commercial" },
    { image: "/elegant-woman-in-flowing-dress.jpg", alt: "Portrait Video" },
    { image: "/gourmet-food-dish-presentation.jpg", alt: "Food Commercial" },
    { image: "/luxury-product-photography.jpg", alt: "Product Showcase" },
    { image: "/architectural-interior-design.jpg", alt: "Architecture Documentary" },
  ]

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`py-20 px-6 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-lg border border-blue-200 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ClientsSection() {
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

  const clients = ["Netflix", "YouTube", "Instagram", "TikTok", "Vimeo"]

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-6 bg-blue-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`text-blue-600 text-center font-bold transition-all duration-1000 ${
                isVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
