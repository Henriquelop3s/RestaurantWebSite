"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Home, Info, Utensils, Image, MessageCircle, Star } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const menuContainer = document.querySelector('.mobile-menu-container')
      
      if (isMenuOpen && menuContainer && !menuContainer.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const menuItems = [
    { href: "#inicio", label: "Início", icon: Home },
    { href: "#sobre", label: "Sobre", icon: Info },
    { href: "#cardapio", label: "Cardápio", icon: Utensils },
    { href: "#galeria", label: "Galeria", icon: Image },
    { href: "#contato", label: "Contato", icon: MessageCircle },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-primary-foreground font-bold text-lg sm:text-xl">R</span>
            </div>
            <span className="text-lg sm:text-2xl font-bold text-foreground">Restaurante</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </Link>
            <Link href="#cardapio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Cardápio
            </Link>
            <Link href="#galeria" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Galeria
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contato
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs xl:text-sm text-muted-foreground">
            <div className="flex items-center space-x-1 xl:space-x-2">
              <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">+351 21 123 4567</span>
              <span className="xl:hidden">+351 21 123</span>
            </div>
            <div className="flex items-center space-x-1 xl:space-x-2">
              <MapPin className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">Lisboa, Portugal</span>
              <span className="xl:hidden">Lisboa</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50 bg-primary/10 hover:bg-primary/20 transition-all duration-300 rounded-xl"
            onClick={toggleMenu}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background mobile-menu-container">
            <nav className="flex flex-col space-y-1 py-4">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="flex items-center space-x-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
            
            {/* Mobile Contact Info */}
            <div className="border-t border-border px-4 py-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+351 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Lisboa, Portugal</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
