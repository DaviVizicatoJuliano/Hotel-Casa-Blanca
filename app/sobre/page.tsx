import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SobreNos() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Sobre o CasaBlanca Palace Hotel"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl max-w-2xl mx-auto">Conheça a história e os valores do CasaBlanca Palace Hotel</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4">
                <p>
                  Fundado em 1985, o CasaBlanca Palace Hotel nasceu da visão de criar uma experiência de hospedagem que
                  combinasse luxo, conforto e atendimento personalizado. Desde então, temos sido referência em
                  excelência hoteleira.
                </p>
                <p>
                  Ao longo dos anos, o hotel passou por diversas renovações para manter-se atualizado com as mais
                  modernas tendências de hospitalidade, sempre preservando sua elegância clássica e o charme que o
                  tornou famoso.
                </p>
                <p>
                  Hoje, o CasaBlanca Palace Hotel é reconhecido internacionalmente como um dos melhores hotéis do
                  Brasil, tendo recebido diversos prêmios e reconhecimentos pela qualidade de seus serviços e
                  instalações.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="História do CasaBlanca Palace Hotel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Missão</h3>
                <p>
                  Proporcionar experiências memoráveis aos nossos hóspedes através de um serviço de excelência, conforto
                  superior e atenção aos detalhes, superando suas expectativas em cada estadia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Visão</h3>
                <p>
                  Ser reconhecido como referência em hotelaria de luxo no Brasil, mantendo-se na vanguarda da inovação e
                  sustentabilidade, sem perder a essência do atendimento personalizado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <ul className="text-left space-y-2">
                  <li>• Excelência em serviços</li>
                  <li>• Hospitalidade genuína</li>
                  <li>• Sustentabilidade</li>
                  <li>• Inovação constante</li>
                  <li>• Respeito à diversidade</li>
                  <li>• Compromisso com a comunidade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Nossa Equipe</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conheça os profissionais dedicados que trabalham para tornar sua estadia inesquecível
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustentabilidade */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Práticas sustentáveis"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Compromisso com a Sustentabilidade</h2>
              <div className="space-y-4">
                <p>
                  No CasaBlanca Palace Hotel, acreditamos que o luxo pode e deve ser sustentável. Por isso,
                  implementamos diversas práticas para reduzir nosso impacto ambiental:
                </p>
                <ul className="space-y-2">
                  <li>• Sistema de energia solar que abastece 60% do hotel</li>
                  <li>• Programa de redução e reciclagem de resíduos</li>
                  <li>• Uso de produtos de limpeza biodegradáveis</li>
                  <li>• Horta orgânica que abastece nosso restaurante</li>
                  <li>• Programas de conscientização para hóspedes e funcionários</li>
                </ul>
                <p>
                  Nosso objetivo é oferecer uma experiência de luxo que não comprometa o futuro do planeta, mostrando
                  que conforto e responsabilidade ambiental podem caminhar juntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Roberto Almeida",
    position: "Diretor Geral",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Carla Mendes",
    position: "Gerente de Hospitalidade",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "André Santos",
    position: "Chef Executivo",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Juliana Costa",
    position: "Gerente de Eventos",
    image: "/placeholder.svg?height=400&width=300",
  },
]
