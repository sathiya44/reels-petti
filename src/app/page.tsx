"use client";

import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/hero-section";
import { StickyHeader, MenuOverlay, ScrollToTopButton } from "@/components/navigation";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection, { ClientsSection } from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function ReelsPettiPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
      console.log(isFlipped);
    const handleScroll = () => {
      console.log("inside", isFlipped)
      if (isFlipped) {
        const scrollContainer = document.querySelector(".flip-back .min-h-screen");
        if (scrollContainer) {
          const scrollY = scrollContainer.scrollTop;
          console.log(scrollY)
          setIsScrolled(scrollY > 50);
        }
      } else {
        setIsScrolled(window.scrollY > 50);
      }

      if (window.scrollY > 100 && !isFlipped) {
        setIsFlipped(true);
      } else if (window.scrollY <= 50 && isFlipped) {
        setIsFlipped(false);
      }
    };

    const addScrollListeners = () => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Add listener to scroll container when it exists
      const scrollContainer = document.querySelector(".flip-back .min-h-screen");
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      }
    };

    const removeScrollListeners = () => {
      window.removeEventListener("scroll", handleScroll);
      const scrollContainer = document.querySelector(".flip-back .min-h-screen");
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };

    addScrollListeners();

    // Re-add listeners when flip state changes
    const timer = setTimeout(addScrollListeners, 100);

    return () => {
      clearTimeout(timer);
      removeScrollListeners();
    };
  }, [isFlipped]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleFlip = () => {
    console.log("aa")
    setIsFlipped(!isFlipped);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".flip-back .min-h-screen");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 3D Flip Container */}
      <div
        className="flip-container relative h-full w-full"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className={`flip-inner relative h-full w-full transition-transform duration-1000 ease-in-out ${
            isFlipped ? "flipped" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side - Hero */}
          <div className="flip-front absolute inset-0 h-full w-full">
            <HeroSection
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              handleFlip={handleFlip}
              heroAnimated={heroAnimated}
            />
          </div>

          {/* Back Side - Full Website */}
          <div className="flip-back absolute inset-0 h-full w-full">
            {isFlipped && (
              <>
                <StickyHeader
                  isScrolled={isScrolled}
                  isMenuOpen={isMenuOpen}
                  toggleMenu={toggleMenu}
                  scrollToTop={scrollToTop}
                />
                <div
                  className="min-h-screen overflow-x-hidden overflow-y-auto bg-gray-50"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <div className="pt-16 md:pt-20">
                    <ScrollToTopButton handleFlip={handleFlip} />

                    <AboutSection />
                    <ServicesSection />
                    <PortfolioSection />
                    <ClientsSection />
                    <ContactSection />
                    <Footer />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Overlay */}
      <MenuOverlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
