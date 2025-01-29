import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#07031c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(13)-X7LHATZ9FWRomOwX2pq4EFOxIGhCPc.png"
              alt="Anjo Salva Logo"
              width={100}
              height={100}
              className="drop-shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold">Anjo Salva</h3>
              <p className="text-gray-400">Brigada de Emergência</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>(XX) XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>contato@anjosalva.com.br</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MapPin className="w-5 h-5" />
              <span>Localização</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anjo Salva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

