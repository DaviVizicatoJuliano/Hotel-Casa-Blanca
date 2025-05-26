import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Users, Maximize, Wifi, Coffee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Quartos() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Quartos do CasaBlanca Palace Hotel"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Quartos</h1>
          <p className="text-xl max-w-2xl mx-auto">Descubra o conforto e a elegância dos nossos quartos e suítes</p>
        </div>
      </section>

      {/* Filtros e Quartos */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="todos">Todos os Quartos</TabsTrigger>
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="deluxe">Deluxe</TabsTrigger>
                <TabsTrigger value="suites">Suítes</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allRooms.map((room, index) => (
                  <RoomCard key={index} room={room} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="standard">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allRooms
                  .filter((room) => room.category === "Standard")
                  .map((room, index) => (
                    <RoomCard key={index} room={room} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="deluxe">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allRooms
                  .filter((room) => room.category === "Deluxe")
                  .map((room, index) => (
                    <RoomCard key={index} room={room} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="suites">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allRooms
                  .filter((room) => room.category === "Suíte")
                  .map((room, index) => (
                    <RoomCard key={index} room={room} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Informações Importantes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Políticas do Hotel</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Check-in: a partir das 14h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Check-out: até as 12h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Café da manhã incluso em todas as diárias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Aceitamos animais de estimação de pequeno porte (consulte taxas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Estacionamento com manobrista disponível</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Reservas e Cancelamentos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Garantia de reserva com cartão de crédito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Cancelamento gratuito até 48h antes do check-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Cancelamentos com menos de 48h: cobrança de uma diária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>No-show: cobrança integral da reserva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Alterações de datas sujeitas à disponibilidade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Reservar?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
            Entre em contato conosco para verificar disponibilidade e fazer sua reserva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="tel:+551199999999">Ligar Agora</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:reservas@casablancapalace.com">Enviar E-mail</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function RoomCard({ room }: { room: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {room.category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2">{room.name}</h3>
        <p className="text-muted-foreground mb-4">{room.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{room.capacity} pessoas</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{room.size} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Café da manhã</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">R$ {room.price}</span>
            <span className="text-muted-foreground">/noite</span>
          </div>
          <Button>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  )
}

const allRooms = [
  {
    name: "Quarto Standard",
    description: "Confortável e aconchegante, ideal para viajantes a negócios",
    category: "Standard",
    capacity: "2",
    size: "25",
    price: "350",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Standard Twin",
    description: "Duas camas de solteiro com todo o conforto que você precisa",
    category: "Standard",
    capacity: "2",
    size: "25",
    price: "350",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Deluxe",
    description: "Mais espaçoso, com vista para a cidade e amenidades premium",
    category: "Deluxe",
    capacity: "2",
    size: "35",
    price: "500",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Deluxe King",
    description: "Cama king size e banheira de hidromassagem para seu conforto",
    category: "Deluxe",
    capacity: "2",
    size: "40",
    price: "550",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Suíte Executiva",
    description: "Sala de estar separada e vista panorâmica da cidade",
    category: "Suíte",
    capacity: "2",
    size: "55",
    price: "800",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Suíte Presidencial",
    description: "Nossa acomodação mais luxuosa com serviço de mordomo",
    category: "Suíte",
    capacity: "4",
    size: "120",
    price: "1500",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Família",
    description: "Espaçoso quarto com duas camas de casal para toda a família",
    category: "Deluxe",
    capacity: "4",
    size: "45",
    price: "650",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Suíte Lua de Mel",
    description: "Romântica suíte com jacuzzi privativa e vista espetacular",
    category: "Suíte",
    capacity: "2",
    size: "60",
    price: "950",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Quarto Acessível",
    description: "Projetado para garantir conforto e acessibilidade para todos",
    category: "Standard",
    capacity: "2",
    size: "30",
    price: "350",
    image: "/placeholder.svg?height=400&width=600",
  },
]
