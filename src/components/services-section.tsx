"use client"

import { useEffect, useRef, useState } from "react"
import { Film, Video, Camera } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    { icon: <Film className="h-6 w-6" />, title: "REELS PRODUCTION" },
    { icon: <Video className="h-6 w-6" />, title: "COMMERCIALS" },
    { icon: <Camera className="h-6 w-6" />, title: "DOCUMENTARIES" },
    { icon: "🎬", title: "MUSIC VIDEOS" },
    { icon: "📱", title: "SOCIAL CONTENT" },
    { icon: "🎨", title: "CREATIVE DIRECTION" },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-12 md:py-20 px-4 md:px-6 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-gray-900 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Your Story, Our Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-blue-200 p-4 md:p-6 rounded-lg text-center hover:shadow-lg transition-all duration-100 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${10 + index * 10}ms` }}
            >
              <div className="text-blue-600 mb-2 md:mb-3 flex justify-center">
                {typeof service.icon === "string" ? (
                  <span className="text-xl md:text-2xl">{service.icon}</span>
                ) : (
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">{service.icon}</div>
                )}
              </div>
              <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-700 leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
