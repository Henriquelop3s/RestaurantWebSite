"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Mail, Navigation, Star, Heart } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contato" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/8"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-primary/30 text-primary border-primary/40 backdrop-blur-sm shadow-lg">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Entre em Contato
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
              Venha nos
              <span className="gradient-text"> Visitar</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Estamos localizados no coração da cidade, prontos para recebê-lo 
              com o melhor da nossa culinária e hospitalidade.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              {/* Contact Info Card */}
              <Card className="border-0 bg-gradient-to-br from-primary/15 to-primary/25 hover:from-primary/25 hover:to-primary/35 transition-all duration-700 card-hover animate-fade-in-left rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-foreground">Informações de Contato</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">Telefone</p>
                            <p className="text-muted-foreground text-lg">+351 21 123 4567</p>
                            <p className="text-muted-foreground text-lg">+351 91 234 5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">E-mail</p>
                            <p className="text-muted-foreground text-lg">contato@saboresportugal.pt</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-muted/20 to-muted/30 rounded-xl flex items-center justify-center mt-1">
                        <MapPin className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">Endereço</p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                              Rua Augusta, 123<br />
                              Chiado - Lisboa, Portugal<br />
                              CEP: 1200-001
                            </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-primary/20">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 h-14 text-lg font-semibold"
                          onClick={() => window.open('https://wa.me/351211234567', '_blank')}
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      Fale Conosco no WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours Card */}
              <Card className="border-0 bg-gradient-to-br from-secondary/15 to-secondary/25 hover:from-secondary/25 hover:to-secondary/35 transition-all duration-700 card-hover animate-fade-in-left rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-foreground">Horário de Funcionamento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                        <div className="flex justify-between items-center py-4 border-b border-secondary/20">
                          <span className="font-bold text-foreground text-lg">Segunda - Quinta</span>
                          <span className="text-muted-foreground text-lg font-semibold">12:00 - 15:00 | 19:00 - 23:00</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-secondary/20">
                          <span className="font-bold text-foreground text-lg">Sexta - Sábado</span>
                          <span className="text-muted-foreground text-lg font-semibold">12:00 - 15:00 | 19:00 - 24:00</span>
                        </div>
                        <div className="flex justify-between items-center py-4">
                          <span className="font-bold text-foreground text-lg">Domingo</span>
                          <span className="text-muted-foreground text-lg font-semibold">12:00 - 15:00 | 19:00 - 22:00</span>
                        </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Special Offers */}
            <div className="space-y-10">
              {/* Map Card */}
              <Card className="border-0 bg-gradient-to-br from-muted/15 to-muted/25 hover:from-muted/25 hover:to-muted/35 transition-all duration-700 card-hover animate-fade-in-right rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted/80 rounded-2xl flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-foreground">Nossa Localização</span>
                  </CardTitle>
                </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-muted/20 to-muted/30 flex items-center justify-center relative overflow-hidden">
                        {/* Mapa Real */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.123456789!2d-9.1393!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934a1c4c7b8b5%3A0x8b5b8b5b8b5b8b5b!2sRua%20Augusta%2C%20Lisboa%2C%20Portugal!5e0!3m2!1spt!2spt!4v1234567890123!5m2!1spt!2spt"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        ></iframe>
                        
                        {/* Overlay com informações */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-bold text-foreground text-sm">Sabores Portugal</p>
                              <p className="text-xs text-muted-foreground">Rua Augusta, 123</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Botão de ação */}
                        <div className="absolute bottom-4 right-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="bg-white/90 backdrop-blur-sm border-primary/30 hover:bg-primary/10 text-primary hover:text-primary-foreground transition-all duration-300"
                            onClick={() => window.open('https://maps.google.com/?q=Rua+Augusta,+123,+Chiado,+Lisboa,+Portugal', '_blank')}
                          >
                            <Navigation className="w-4 h-4 mr-2" />
                            Abrir no Maps
                          </Button>
                        </div>
                      </div>
                    </CardContent>
              </Card>

              {/* Special Offers Card */}
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 transition-all duration-700 card-hover animate-fade-in-right rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Ofertas Especiais
                    </h3>
                  </div>
                  <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-muted-foreground text-lg">Happy Hour: 17h às 19h</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <span className="text-muted-foreground text-lg">Menu executivo com desconto</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                          <span className="text-muted-foreground text-lg">Entrega grátis acima de €25</span>
                        </div>
                  </div>
                  <Button 
                    className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 h-14 text-lg font-semibold"
                          onClick={() => window.open('https://wa.me/351211234567', '_blank')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Fazer Pedido Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <Card className="max-w-5xl mx-auto border-0 bg-gradient-to-br from-primary/15 to-primary/25 hover:from-primary/25 hover:to-primary/35 transition-all duration-700 card-hover animate-fade-in-up rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Pronto para uma Experiência Gastronômica
                  <span className="gradient-text"> Única?</span>
                </h3>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Faça sua reserva ou peça delivery e descubra por que somos 
                  o restaurante mais amado da região.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 h-16 px-10 text-lg font-semibold"
                          onClick={() => window.open('https://wa.me/351211234567', '_blank')}
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Fazer Reserva
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-card/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 text-primary hover:text-primary-foreground transition-all duration-300 h-16 px-10 text-lg font-semibold"
                          onClick={() => window.open('https://wa.me/351211234567', '_blank')}
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Pedir Delivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
