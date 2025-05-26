import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4">CasaBlanca Palace Hotel</h3>
            <address className="not-italic space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Atlântica, 1500 - Copacabana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+551199999999">+55 11 9999-9999</Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:contato@casablancapalace.com">contato@casablancapalace.com</Link>
              </div>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/quartos" className="hover:underline">
                  Quartos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:underline">
                  Notícias da Cidade
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary-foreground/80">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CasaBlanca Palace Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
