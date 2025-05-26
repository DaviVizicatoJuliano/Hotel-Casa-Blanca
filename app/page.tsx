import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Coffee, Utensils, Wifi, Car, PocketIcon as Pool, SpadeIcon as Spa } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="CasaBlanca Palace Hotel"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CasaBlanca Palace Hotel</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experimente o luxo e conforto em um dos hotéis mais prestigiados da cidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/quartos">Ver Quartos</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="tel:+551199999999">Reservar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenidades */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Comodidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Wifi className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Wi-Fi Gratuito</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Pool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Piscina</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Spa className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Spa</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Restaurante</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Café da Manhã</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Estacionamento</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quartos em Destaque */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Quartos em Destaque</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conheça nossos quartos luxuosos projetados para proporcionar o máximo de conforto durante sua estadia
          </p>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredRooms.map((room, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={room.image || "/placeholder.svg"}
                          alt={room.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{room.name}</h3>
                        <p className="text-muted-foreground mb-4">{room.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">R$ {room.price}/noite</span>
                          <Button asChild variant="outline" size="sm">
                            <Link href="/quartos">Ver Detalhes</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Hóspedes Dizem</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Reserve Sua Estadia Hoje</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de desfrutar de uma experiência inesquecível no CasaBlanca Palace Hotel
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="tel:+551199999999">Fazer Reserva</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const featuredRooms = [
  {
    name: "Suíte Presidencial",
    description: "Nossa suíte mais luxuosa com vista panorâmica para o mar",
    price: "1.500",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Suíte Executiva",
    description: "Espaçosa e elegante, perfeita para viagens de negócios",
    price: "800",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Deluxe",
    description: "Conforto e sofisticação com varanda privativa",
    price: "600",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Família",
    description: "Amplo espaço para toda a família com duas camas de casal",
    price: "750",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    name: "Thaisa Carla Mota",
    location: "Avaliação feita pelo Google",
    text: "Pessoal acolhedor desde a recepção até às copeiras. Café da manhã impecável. Eu adorei o café da manhã, muita variedade e muito delicioso. Parabéns! ",
  },
  {
    name: "Tati Lacerda",
    location: "Avaliação feita pelo Google",
    text: "Melhor café da manhã que já comi! Quartos limpos e muito confortáveis, bem distribuídos, recepcionistas atenciosos, roupa de cama muito cheirosa, estacionamento amplo.",
  },
  {
    name: "Polyana Martins",
    location: "Avaliação feita pelo Google",
    text: "Hotel aconchegante, Quartos novos, ar condicionado E chuveiro bons! E o atendimento foi Top, pessoal super preocupado com sua preferência! Alguns quartos tem sacada",
  },
]
