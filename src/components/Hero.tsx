"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-video-production.jpg"
import logoOfficial from "@/assets/spot48-logo-official.png"
import InteractiveBackground from "./InteractiveBackground"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20"></div>
        <img
          src={heroImage || "/placeholder.svg"}
          alt="Professional video production studio"
          className="w-full h-full object-cover opacity-10"
        />
        <InteractiveBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30"></div>
      </div>

      <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-0">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={logoOfficial || "/placeholder.svg"}
                alt="Spot48 - Vídeos que venden en 48h"
                className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Vídeos que&nbsp;venden
              </span>
              <br />
              <span className="text-foreground/90">en&nbsp;48h</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium px-2">
              Transforma tu&nbsp;presencia&nbsp;digital con vídeos&nbsp;profesionales creados con
              <span className="text-primary font-semibold"> inteligencia&nbsp;artificial </span>
              en&nbsp;tiempo&nbsp;récord para impulsar tus&nbsp;resultados&nbsp;de&nbsp;marketing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button
              onClick={scrollToPricing}
              className="group relative bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full max-w-xs sm:max-w-none sm:w-auto sm:min-w-64"
            >
              <span className="relative z-10">Comienza ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-primary/50 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <a
              href="https://instagram.com/spot48.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              <Button
                variant="outline"
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:min-w-64 bg-transparent"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Ver Instagram
              </Button>
            </a>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">48h</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Entrega&nbsp;garantizada</div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">149€</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Pack&nbsp;completo</div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
              </div>
            </div>

            <div className="group relative sm:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">3X</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Más eficiente</div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 bg-primary rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
