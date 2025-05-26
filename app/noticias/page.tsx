import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Noticias() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Notícias da Cidade"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notícias da Cidade</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fique por dentro dos eventos e atrações locais durante sua estadia
          </p>
        </div>
      </section>

      {/* Busca e Filtros */}
      <section className="py-8 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar notícias e eventos..." className="pl-10" />
            </div>
            <Button>Buscar</Button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="noticias" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="noticias">Notícias</TabsTrigger>
                <TabsTrigger value="eventos">Eventos</TabsTrigger>
                <TabsTrigger value="atracoes">Atrações Turísticas</TabsTrigger>
                <TabsTrigger value="gastronomia">Gastronomia</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="noticias">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item, index) => (
                  <NewsCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="eventos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((item, index) => (
                  <EventCard key={index} event={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="atracoes">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {attractions.map((item, index) => (
                  <AttractionCard key={index} attraction={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gastronomia">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {restaurants.map((item, index) => (
                  <RestaurantCard key={index} restaurant={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Receba Nossas Novidades</h2>
            <p className="mb-8 text-muted-foreground">
              Inscreva-se para receber informações sobre eventos, promoções especiais e notícias da cidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Seu melhor e-mail" className="flex-1" />
              <Button>Inscrever-se</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function NewsCard({ item }: { item: any }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{item.date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-muted-foreground">{item.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full">
          Ler mais
        </Button>
      </CardFooter>
    </Card>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2">{event.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <p className="text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Ver Detalhes</Button>
      </CardFooter>
    </Card>
  )
}

function AttractionCard({ attraction }: { attraction: any }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={attraction.image || "/placeholder.svg"} alt={attraction.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-1">
        <h3 className="font-bold text-xl mb-2">{attraction.name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>{attraction.location}</span>
        </div>
        <p className="text-muted-foreground mb-4">{attraction.description}</p>
        <div className="text-sm">
          <span className="font-medium">Horário:</span> {attraction.hours}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={attraction.mapLink} className="w-full" target="_blank">
          <Button variant="outline" className="w-full">
            Ver no Mapa
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-1">
        <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{restaurant.location}</span>
        </div>
        <div className="mb-4 flex gap-2">
          {restaurant.cuisine.map((type: string, index: number) => (
            <span key={index} className="bg-muted text-xs px-2 py-1 rounded-full">
              {type}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground">{restaurant.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-4 w-full">
          <Button variant="outline" className="flex-1">
            Reservar
          </Button>
          <Button variant="outline" className="flex-1">
            Ver Menu
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

const newsItems = [
  {
    title: "Festival de Verão começa neste fim de semana",
    excerpt: "O tradicional Festival de Verão da cidade terá início neste sábado com shows, gastronomia e muito mais.",
    date: "20 de Maio, 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Nova exposição de arte no Museu Municipal",
    excerpt: "O Museu Municipal inaugura nesta sexta-feira uma exposição com obras de artistas locais.",
    date: "18 de Maio, 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Prefeitura anuncia reforma da praça central",
    excerpt: "As obras de revitalização da praça central começarão no próximo mês e devem durar 60 dias.",
    date: "15 de Maio, 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Campeonato de surfe atrai turistas para a cidade",
    excerpt: "A etapa do campeonato nacional de surfe movimenta a economia local e as praias da região.",
    date: "12 de Maio, 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Restaurante tradicional comemora 50 anos",
    excerpt: "O Restaurante do Porto, um dos mais antigos da cidade, celebra seu cinquentenário com menu especial.",
    date: "10 de Maio, 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Novo parque ecológico será inaugurado em junho",
    excerpt: "O parque contará com trilhas, centro de visitantes e atividades de educação ambiental.",
    date: "5 de Maio, 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const events = [
  {
    title: "Show de Jazz na Praça",
    date: "25 de Maio, 2025 - 19h",
    location: "Praça Central",
    description: "Apresentação gratuita de jazz com músicos locais e convidados especiais.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Feira de Artesanato",
    date: "26-28 de Maio, 2025 - 10h às 20h",
    location: "Calçadão da Orla",
    description: "Exposição e venda de produtos artesanais da região, com oficinas e apresentações culturais.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Festival Gastronômico",
    date: "1-5 de Junho, 2025",
    location: "Centro de Convenções",
    description: "Degustação de pratos típicos, aulas de culinária e competições entre chefs.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Corrida Beneficente",
    date: "30 de Maio, 2025 - 7h",
    location: "Parque Municipal",
    description: "Corrida de 5km e 10km com renda revertida para instituições de caridade locais.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Exposição Fotográfica",
    date: "20-30 de Maio, 2025",
    location: "Galeria de Arte Municipal",
    description: "Mostra de fotografias históricas da cidade e região, com curadoria especial.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Teatro Infantil",
    date: "27 de Maio, 2025 - 15h",
    location: "Teatro Municipal",
    description: "Apresentação da peça 'O Pequeno Príncipe' para toda a família.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const attractions = [
  {
    name: "Praia do Forte",
    location: "Litoral Norte, 5km do centro",
    description:
      "Uma das praias mais bonitas da região, com águas cristalinas e infraestrutura completa para visitantes.",
    hours: "Acesso livre 24h",
    mapLink: "https://maps.google.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Museu de História Natural",
    location: "Centro Histórico, Rua das Flores, 123",
    description: "Acervo com mais de 5.000 peças que contam a história natural da região, incluindo fósseis raros.",
    hours: "Terça a Domingo, 9h às 18h",
    mapLink: "https://maps.google.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Mirante da Serra",
    location: "Serra do Mar, 12km do centro",
    description: "Vista panorâmica de toda a cidade e do litoral, com restaurante e área para piquenique.",
    hours: "Diariamente, 8h às 18h",
    mapLink: "https://maps.google.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Aquário Municipal",
    location: "Av. Beira Mar, 500",
    description: "Um dos maiores aquários da América Latina, com espécies marinhas locais e exóticas.",
    hours: "Terça a Domingo, 10h às 19h",
    mapLink: "https://maps.google.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Parque das Cachoeiras",
    location: "Estrada da Serra, km 8",
    description:
      "Complexo com sete cachoeiras, trilhas ecológicas e área para banho. Ideal para os amantes da natureza.",
    hours: "Diariamente, 8h às 16h",
    mapLink: "https://maps.google.com",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Centro Histórico",
    location: "Centro da cidade",
    description: "Conjunto arquitetônico preservado do século XIX, com casarões, igrejas e praças históricas.",
    hours: "Acesso livre 24h",
    mapLink: "https://maps.google.com",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const restaurants = [
  {
    name: "Cantina del Mare",
    location: "Av. Beira Mar, 300",
    cuisine: ["Italiana", "Frutos do Mar"],
    description: "Restaurante italiano com vista para o mar e especialidade em frutos do mar frescos.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Sabor da Terra",
    location: "Rua das Flores, 45 - Centro",
    cuisine: ["Brasileira", "Regional"],
    description: "Comida típica brasileira com ingredientes orgânicos produzidos na região.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Sushi Koi",
    location: "Shopping Central, Piso L3",
    cuisine: ["Japonesa", "Fusion"],
    description: "O melhor da culinária japonesa com toques contemporâneos e ambiente sofisticado.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "La Parrilla",
    location: "Av. Principal, 789",
    cuisine: ["Argentina", "Churrasco"],
    description: "Autêntica parrilla argentina com carnes nobres e vinhos selecionados.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Café da Vila",
    location: "Praça Central, 22",
    cuisine: ["Café", "Brunch"],
    description: "Cafeteria aconchegante com opções de café da manhã e brunch durante todo o dia.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Tempero Verde",
    location: "Rua das Palmeiras, 100",
    cuisine: ["Vegetariana", "Vegana"],
    description: "Restaurante especializado em culinária vegetariana e vegana com ingredientes frescos.",
    image: "/placeholder.svg?height=400&width=600",
  },
]
