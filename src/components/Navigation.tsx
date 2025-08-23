"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import logoOfficial from "@/assets/spot48-logo-official.png"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navHeight = 80
      const targetPosition = section.offsetTop - navHeight

      // Animación de scroll personalizada más visible
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 800 // Duración en milisegundos para que sea visible pero no lenta
      let start: number | null = null

      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = timestamp - start
        const percentage = Math.min(progress / duration, 1)

        // Función de easing para suavizar la animación
        const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

        const currentPosition = startPosition + distance * easeInOutCubic(percentage)
        window.scrollTo(0, currentPosition)

        if (progress < duration) {
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToPricing = () => {
    scrollToSection("pricing")
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <div className="flex items-center">
              <img
                src={logoOfficial || "/placeholder.svg"}
                alt="Spot48"
                className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("problem-solution")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                Proceso
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                Testimonios
              </button>
              <Button
                onClick={scrollToPricing}
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Comenzar Ahora
              </Button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-1.5 rounded-md hover:bg-primary/10 transition-colors duration-200"
                aria-label="Abrir menú"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12M6 12h12"
                    />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/98 backdrop-blur-md border-t border-border/50 px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection("problem-solution")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-medium py-3 px-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-medium py-3 px-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-medium py-3 px-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              Testimonios
            </button>
            <div className="pt-3 border-t border-border/30">
              <Button
                onClick={scrollToPricing}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Comenzar Ahora
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
