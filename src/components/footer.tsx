"use client"

import { useState, useEffect, useRef } from "react"
import { Video } from "lucide-react"

export default function Footer() {
  const [logoVisible, setLogoVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)
  const [copyrightVisible, setCopyrightVisible] = useState(false)

  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setLogoVisible(true), 100)
            setTimeout(() => setContactVisible(true), 300)
            setTimeout(() => setCopyrightVisible(true), 500)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-blue-600 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div
          className={`transition-all duration-1000 ${logoVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="mb-4 flex items-center space-x-2 text-xl font-bold">
            <img src={"/logo.png"} alt={""} className="h-8" />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${contactVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h4 className="mb-4 font-semibold">CONTACT</h4>
          <p className="text-sm text-blue-200">
            <a href="tel:9876543210" className="text-white hover:underline">
              {" "}
              +91 9876543210
            </a>
            <br />
            <a href="mailto:hello@reelspetti.com" className="text-white hover:underline">hello@reelspetti.com</a>
            <br />
            <br />
            REACH US
            <br />
            Tamil Nadu,
            <br />
            Vellore - 632002
          </p>
        </div>

        <div
          className={`text-right transition-all duration-1000 ${copyrightVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p className="text-sm text-blue-200">© 2024 Reels Petti</p>
        </div>
      </div>
    </footer>
  );
}
