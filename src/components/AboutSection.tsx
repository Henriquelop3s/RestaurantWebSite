"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Users, Clock, Star, ChefHat, Wine, Sparkles, Crown } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/8"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-32 left-20 w-2 h-2 bg-secondary/60 rounded-full animate-pulse"></div>
      <div className="absolute top-64 right-32 w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-secondary/60 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-24 lg:mb-32 animate-fade-in-up">
            <div className="inline-flex items-center justify-center mb-8">
              <Badge variant="secondary" className="text-xs sm:text-sm px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-secondary/20 to-secondary/30 text-secondary border-secondary/40 backdrop-blur-sm shadow-lg">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Nossa História
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3" />
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 leading-tight tracking-tight">
              Tradição e 
              <span className="shimmer-text text-[#000000]"> Sabor</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 px-4">
                Há mais de 15 anos, nossa família dedica-se a criar experiências gastronómicas 
                memoráveis, combinando receitas tradicionais portuguesas com ingredientes frescos e muito amor.
              </p>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto"></div>
            </div>
          </div>

          {/* Enhanced Main Story Section */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              {/* Story Content */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in-left">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                      <ChefHat className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-6xl font-bold text-foreground leading-tight">
                        Uma Jornada de 
                        <span className="gradient-text"> Sabores</span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></div>
                    <p>
                      Nossa história começou com uma paixão simples: compartilhar os sabores 
                      autênticos da culinária brasileira. Cada prato é preparado com cuidado 
                      artesanal, usando ingredientes selecionados e técnicas tradicionais 
                      passadas de geração em geração.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-secondary rounded-full"></div>
                    <p>
                      Hoje, somos reconhecidos pela qualidade de nossos pratos e pelo 
                      ambiente acolhedor que criamos para nossos clientes. Cada visita 
                      é uma oportunidade de criar memórias especiais ao redor da mesa.
                    </p>
                  </div>
                </div>

                {/* Enhanced Achievement Stats */}
                <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-12">
                  <div className="group text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl border border-primary/30 backdrop-blur-sm hover:from-primary/30 hover:to-primary/40 transition-all duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4">15+</div>
                    <div className="text-muted-foreground font-semibold text-base sm:text-lg lg:text-xl">Anos de Tradição</div>
                  </div>
                  <div className="group text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-3xl border border-secondary/30 backdrop-blur-sm hover:from-secondary/30 hover:to-secondary/40 transition-all duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-foreground" />
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-3 sm:mb-4">50K+</div>
                    <div className="text-muted-foreground font-semibold text-base sm:text-lg lg:text-xl">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Image with Floating Elements */}
              <div className="relative animate-fade-in-right">
                <div className="relative group">
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src="/about-image.png" 
                      alt="Chef preparando prato" 
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Values Section */}
          <div className="text-center mb-0 sm:mb-1 md:-mb-8 lg:-mb-12 py-16 sm:py-20">
            <div className="text-center mb-0 sm:mb-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Nossos
                <span className="gradient-text"> Valores</span>
              </h3>
            </div>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mt-0 sm:mt-1"></div>
          </div>

          {/* Interactive Values Grid */}
          <div className="relative py-12 sm:py-16 lg:py-20 px-12 sm:px-16 lg:px-20">
            {/* Light Effects - Outside Grid */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-white/15 via-white/8 to-primary/25 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-white/15 via-white/8 to-secondary/25 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-white/15 via-white/8 to-muted/25 rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 relative z-10">
              {/* Value 1 - Feito com Amor */}
              <div className="relative group">
                <Card className="group text-center p-6 sm:p-8 lg:p-12 border border-white/20 bg-gradient-to-br from-white/10 via-primary/20 to-primary/30 hover:from-white/15 hover:via-primary/25 hover:to-primary/40 transition-all duration-700 card-hover animate-fade-in-up rounded-2xl sm:rounded-3xl relative shadow-2xl shadow-white/10">
                {/* Floating Hearts Animation */}
                
                <div className="absolute bottom-4 left-4 w-4 h-4 text-primary/20 animate-pulse" style={{ animationDelay: '1s' }}>
                  <Heart className="w-full h-full" />
                </div>
                
                <CardContent className="p-0 relative z-10">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg relative">
                    <Heart className="w-14 h-14 text-white" />
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-primary/20 animate-ping"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors duration-300">
                    Feito com Amor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xl">
                    Cada prato é preparado com carinho e dedicação, 
                    seguindo receitas familiares tradicionais que 
                    passam de geração em geração, criando sabores únicos.
                  </p>
                  
                  {/* Interactive Element */}
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                </Card>
              </div>

              {/* Value 2 - Ambiente Familiar */}
              <div className="relative group">
                <Card className="group text-center p-12 border border-white/20 bg-gradient-to-br from-white/10 via-secondary/20 to-secondary/30 hover:from-white/15 hover:via-secondary/25 hover:to-secondary/40 transition-all duration-700 card-hover animate-fade-in-up rounded-3xl relative shadow-2xl shadow-white/10" style={{ animationDelay: '0.1s' }}>
                {/* Floating Users Animation */}
                <div className="absolute bottom-6 left-6 w-3 h-3 text-secondary/20 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Users className="w-full h-full" />
                </div>
                
                <CardContent className="p-0 relative z-10">
                  <div className="w-28 h-28 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg relative">
                    <Users className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-8 group-hover:text-secondary transition-colors duration-300">
                    Ambiente Familiar
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xl">
                    Criamos um espaço acolhedor onde todos se sentem 
                    em casa, desde famílias até casais em momentos especiais,
                    proporcionando conforto e alegria.
                  </p>
                  
                  {/* Interactive Element */}
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-8 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                </Card>
              </div>

              {/* Value 3 - Serviço Rápido */}
              <div className="relative group">
                <Card className="group text-center p-12 border border-white/20 bg-gradient-to-br from-white/10 via-muted/20 to-muted/30 hover:from-white/15 hover:via-muted/25 hover:to-muted/40 transition-all duration-700 card-hover animate-fade-in-up rounded-3xl relative shadow-2xl shadow-white/10" style={{ animationDelay: '0.2s' }}>
                {/* Floating Clock Animation */}
                
                <div className="absolute bottom-4 left-4 w-4 h-4 text-foreground/20 animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <Clock className="w-full h-full" />
                </div>
                
                <CardContent className="p-0 relative z-10">
                  <div className="w-28 h-28 bg-gradient-to-br from-muted to-muted/80 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg relative">
                    <Clock className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-8 group-hover:text-muted-foreground transition-colors duration-300">
                    Serviço Rápido
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xl">
                    Garantimos que sua refeição seja servida rapidamente 
                    sem comprometer a qualidade e o sabor dos pratos,
                    respeitando seu tempo e expectativas.
                  </p>
                  
                  {/* Interactive Element */}
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-foreground/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
