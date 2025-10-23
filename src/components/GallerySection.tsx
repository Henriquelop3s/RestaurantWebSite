"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/picanha-chapa.jpeg",
    alt: "Picanha na Chapa",
    category: "Carnes",
    description: "Picanha suculenta grelhada na chapa com temperos especiais"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Salmão Grelhado",
    category: "Peixes",
    description: "Salmão fresco grelhado com legumes e molho de ervas"
  },
  {
    id: 4,
    src: "/moqueca-camarao.jpg",
    alt: "Moqueca de Camarão",
    category: "Peixes",
    description: "Moqueca tradicional de camarão com leite de coco e dendê"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Risotto de Cogumelos",
    category: "Vegetariano",
    description: "Risotto cremoso com cogumelos frescos e queijo parmesão"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Salada Caesar",
    category: "Saladas",
    description: "Salada Caesar clássica com alface crocante e molho especial"
  },
  {
    id: 7,
    src: "/costela-porco.webp",
    alt: "Costela de Porco",
    category: "Carnes",
    description: "Costela de porco assada lentamente com temperos da casa"
  },
  {
    id: 8,
    src: "/peixe-frito.jpg",
    alt: "Peixe Frito",
    category: "Peixes",
    description: "Peixe fresco frito na hora com acompanhamentos especiais"
  },
  {
    id: 9,
    src: "/lasanha-vegetariana.jpg",
    alt: "Lasanha Vegetariana",
    category: "Vegetariano",
    description: "Lasanha de vegetais frescos com molho de tomate caseiro"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hambúrguer Artesanal",
    category: "Carnes",
    description: "Hambúrguer artesanal com carne selecionada e ingredientes frescos"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Salada Tropical",
    category: "Saladas",
    description: "Salada tropical com frutas frescas e molho de iogurte"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Camarão Grelhado",
    category: "Peixes",
    description: "Camarão grelhado com alho e pimenta, acompanhado de arroz"
  },
  {
    id: 13,
    src: "/bife-parmegiana.avif",
    alt: "Bife à Parmegiana",
    category: "Carnes",
    description: "Bife à parmegiana com molho de tomate e queijo derretido"
  },
  {
    id: 16,
    src: "/frango-grelhado.jpeg",
    alt: "Frango Grelhado",
    category: "Carnes",
    description: "Peito de frango grelhado com temperos especiais e acompanhamentos"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Pizza Margherita",
    category: "Vegetariano",
    description: "Pizza margherita com molho de tomate, mussarela e manjericão"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Panqueca de Carne",
    category: "Carnes",
    description: "Panqueca de carne moída com molho branco e queijo"
  }
]

const categories = ["Todos", "Carnes", "Peixes", "Vegetariano", "Saladas"]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
      setSelectedImage(filteredImages[prevIndex].id)
    }
  }

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeLightbox()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when lightbox is closed
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  return (
    <section id="galeria" className="-py-20 sm:-py-24 lg:-py-32">
      <div className="container mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-primary/30 text-primary border-primary/40 backdrop-blur-sm shadow-lg">
              Nossos Pratos
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
              Pratos que
              <span className="gradient-text"> Encantam</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Explore a nossa seleção de pratos cuidadosamente preparados com ingredientes frescos 
              e técnicas tradicionais portuguesas que fazem de cada refeição uma experiência única.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mt-4 sm:mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-3 sm:px-6 py-2 text-xs sm:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="cursor-pointer hover:shadow-2xl transition-all duration-500 group card-hover animate-fade-in-up rounded-2xl sm:rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 sm:h-60 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {image.alt}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                    {image.description}
                  </p>
                  
                  {/* Interactive Element */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      Clique para ampliar
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Lightbox */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={closeLightbox}
            >
              <div 
                className="relative w-full max-w-5xl max-h-full bg-card/95 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 bg-red-500/80 hover:bg-red-600 text-white backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"
                  onClick={closeLightbox}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={filteredImages.find(img => img.id === selectedImage)?.src}
                      alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                      className="w-full h-64 sm:h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg text-xs">
                        {filteredImages.find(img => img.id === selectedImage)?.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                      {filteredImages.find(img => img.id === selectedImage)?.alt}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                      {filteredImages.find(img => img.id === selectedImage)?.description}
                    </p>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                        Prato especial da casa
                      </div>
                    </div>
                    
                    {/* Mobile hint */}
                    <div className="mt-4 sm:hidden text-center">
                      <p className="text-xs text-muted-foreground/70">
                        Toque fora da imagem para fechar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
