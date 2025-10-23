"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, Clock } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  isPopular?: boolean
  prepTime?: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Picanha na Chapa",
    description: "Corte nobre grelhado na chapa, acompanhada de arroz, feijão e batata frita",
    price: "R$ 45,90",
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isPopular: true,
    prepTime: "25 min"
  },
  {
    id: 2,
    name: "Frango Grelhado",
    description: "Peito de frango temperado e grelhado, servido com salada verde e purê de batata",
    price: "R$ 32,90",
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    prepTime: "20 min"
  },
  {
    id: 3,
    name: "Salmão Grelhado",
    description: "Filé de salmão fresco grelhado com molho de ervas, acompanhado de legumes grelhados",
    price: "R$ 52,90",
    category: "Peixes",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isPopular: true,
    prepTime: "30 min"
  },
  {
    id: 4,
    name: "Moqueca de Camarão",
    description: "Camarões frescos cozidos no leite de coco com dendê, servida com arroz e farofa",
    price: "R$ 48,90",
    category: "Peixes",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    prepTime: "35 min"
  },
  {
    id: 5,
    name: "Risotto de Cogumelos",
    description: "Arroz cremoso com cogumelos porcini e parmesão, finalizado com trufa",
    price: "R$ 38,90",
    category: "Vegetariano",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    prepTime: "25 min"
  },
  {
    id: 6,
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar caseiro",
    price: "R$ 24,90",
    category: "Saladas",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    prepTime: "15 min"
  }
]

const categories = ["Todos", "Carnes", "Peixes", "Vegetariano", "Saladas"]

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredItems = selectedCategory === "Todos" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <section id="cardapio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 animate-pulse-slow">
              <Star className="w-4 h-4 mr-2" />
              Nosso Cardápio
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Sabores que 
              <span className="gradient-text">Encantam</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Descubra nossa seleção de pratos preparados com ingredientes frescos 
              e técnicas tradicionais que fazem a diferença.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-8 py-3 text-base font-medium rounded-xl"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  {item.isPopular && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Popular
                    </Badge>
                  )}
                  {item.prepTime && (
                    <Badge variant="outline" className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border-border">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.prepTime}
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {item.name}
                    </CardTitle>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Separator className="mb-6" />
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Pedir pelo WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/15 border-primary/20 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Não encontrou o que procura?
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Temos muito mais opções disponíveis! Entre em contato conosco 
                  e faça seu pedido personalizado.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ver Cardápio Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
