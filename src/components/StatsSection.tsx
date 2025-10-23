"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Award, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    comment: "Melhor restaurante de Lisboa! A comida é deliciosa e o atendimento é excecional.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    comment: "Ambiente acolhedor e pratos saborosos. Recomendo a todos!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 5,
    comment: "Tradição familiar que se sente no sabor. Volto sempre!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
]

export default function StatsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 overflow-visible">
        <div className="max-w-6xl mx-auto overflow-visible">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-2 animate-pulse-slow">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Nossos Números
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Reconhecimento e 
              <span className="gradient-text"> Qualidade</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 overflow-visible">
            <div className="relative group">
              {/* Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 rounded-2xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="border-0 bg-gradient-to-br from-secondary/20 to-secondary/30 hover:from-secondary/30 hover:to-secondary/40 transition-all duration-300 card-hover">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center animate-pulse-slow">
                    <Star className="w-8 h-8 text-secondary-foreground fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
                <div className="text-sm text-secondary/80 font-medium">Avaliação Média</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
              </CardContent>
              </Card>
            </div>

            <div className="relative group">
              {/* Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-2xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="border-0 bg-gradient-to-br from-primary/20 to-primary/30 hover:from-primary/30 hover:to-primary/40 transition-all duration-300 card-hover">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-primary/80 font-medium">Anos de Tradição</div>
              </CardContent>
              </Card>
            </div>

            <div className="relative group">
              {/* Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/10 rounded-2xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="border-0 bg-gradient-to-br from-muted/20 to-muted/30 hover:from-muted/30 hover:to-muted/40 transition-all duration-300 card-hover">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Clientes Satisfeitos</div>
              </CardContent>
              </Card>
            </div>

            <div className="relative group">
              {/* Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 rounded-2xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="border-0 bg-gradient-to-br from-secondary/15 to-secondary/25 hover:from-secondary/25 hover:to-secondary/35 transition-all duration-300 card-hover">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary/80 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-secondary-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                <div className="text-sm text-secondary/80 font-medium">Prêmios Recebidos</div>
              </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-muted-foreground">
              Depoimentos reais de quem conhece nossa qualidade
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible">
            {reviews.map((review, index) => (
            <div key={review.id} className="relative group">
              {/* Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-card/30 to-card/20 rounded-2xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="border-0 bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm hover:from-card/70 hover:to-card/90 transition-all duration-300 card-hover">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-foreground text-lg mb-2">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#C9A227] fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      "{review.comment}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
