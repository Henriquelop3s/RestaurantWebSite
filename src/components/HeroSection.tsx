"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, ArrowRight, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden -pt-20 pb-12 sm:-pt-24 sm:pb-20 floating-particles">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-left text-center lg:text-left">
              {/* Badge */}
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-2 animate-pulse-slow">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Restaurante Premiado
              </Badge>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                Sabores que
                <span className="gradient-text block">Encantam</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Uma experiência gastronómica única com ingredientes frescos,
                preparados com amor e tradição familiar há mais de 15 anos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 group animate-shimmer"
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Cardápio
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 glass hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/351211234567', '_blank')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Fazer Pedido
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative w-full overflow-hidden">
                {/* Main Image */}
                <img 
                  src="/hero-image.png" 
                  alt="Prato gourmet delicioso" 
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-none object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
