"use client"

import Link from "next/link"
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-background to-muted/20 text-foreground border-t border-border floating-particles">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Restaurante</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Tradição familiar há mais de 15 anos, oferecendo sabores únicos 
              e experiências gastronómicas inesquecíveis.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-blue-600 hover:text-white transition-colors border border-border hover:border-blue-600">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-pink-600 hover:text-white transition-colors border border-border hover:border-pink-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-blue-400 hover:text-white transition-colors border border-border hover:border-blue-400">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform text-sm">
                Início
              </Link>
              <Link href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform text-sm">
                Sobre Nós
              </Link>
              <Link href="#cardapio" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform text-sm">
                Cardápio
              </Link>
              <Link href="#galeria" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform text-sm">
                Galeria
              </Link>
              <Link href="#contato" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">+351 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">contato@saboresportugal.pt</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                  Rua Augusta, 123<br />
                  Lisboa, Portugal - 1200-001
                </span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Horário</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">Segunda - Sexta</div>
                  <div className="text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">12:00 - 15:00 | 19:00 - 23:00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">Sábado - Domingo</div>
                  <div className="text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">12:00 - 15:00 | 19:00 - 24:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Desktop: Copyright à esquerda */}
            <p className="text-muted-foreground text-sm hidden md:block">
              © 2025 Restaurante. Todos os direitos reservados.
            </p>
            
            {/* Desktop: Created by no centro */}
            <div className="flex items-center space-x-2 hidden md:flex">
              <span className="text-muted-foreground/70 text-xs">Created by</span>
              <img 
                src="/logopng1.png" 
                alt="logopng1" 
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            {/* Desktop: Botão à direita */}
            <Button 
              className="text-sm px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex"
              onClick={() => window.open('https://wa.me/351211234567', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco no WhatsApp
            </Button>

            {/* Mobile: Ordem específica */}
            <div className="flex flex-col items-center space-y-4 md:hidden w-full">
              {/* 1. Botão de contato */}
              <Button 
                className="text-sm px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://wa.me/351211234567', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco no WhatsApp
              </Button>
              
              {/* 2. Copyright 2025 */}
              <p className="text-muted-foreground text-sm">
                © 2025 Restaurante. Todos os direitos reservados.
              </p>
              
              {/* 3. Created by com logo */}
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground/70 text-xs">Created by</span>
                <img 
                  src="/logopng1.png" 
                  alt="logopng1" 
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
