import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 py-10 bg-bottom bg-[url(/fundo.jpg)]">
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center ">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(13)-X7LHATZ9FWRomOwX2pq4EFOxIGhCPc.png"
            alt="Anjo Salva Logo"
            width={300}
            height={300}
            className=" rounded-lg"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
            Anjo Salva
          </h1>
          <h1 className="text-2xl mt-2 md:text-4xl font-bold text-white max-w-4xl leading-tight">
            Brigada de Emergencia
          </h1>
          <h1 className="text-2xl mt-10 md:text-4xl font-bold text-white max-w-4xl leading-tight">
            Garanta a segurança do seu público!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Atendimento personalizado para o seu evento, com a nossa brigada de emergência.
          </p>
          <Button className="mt-6 mb-36 bg-transparent outline outline-1 hover:bg-blue-900 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
            Entre em Contato
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

