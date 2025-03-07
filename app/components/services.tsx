import { FireExtinguisher, Flame, BriefcaseMedical, Ambulance } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: FireExtinguisher,
    title: "Brigada de Emergência",
    description: "Serviço profissional de bombeiro civil e brigadistas",
  },
  {
    icon: BriefcaseMedical,
    title: "Atendimento de Emergência",
    description: "Profissionais capacitados para primeiros socorros",
  },
  {
    icon: Ambulance,
    title: "Remoção de Pacientes",
    description: "Serviço especializado de remoção e transporte",
  },
  {
    icon: Flame,
    title: "Prevenção de Incêndios",
    description: "Combate direto e prevenção de incêndios",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen py-20 pattern-cross pattern-blue-50 pattern-bg-white 
  pattern-size-6 pattern-opacity-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#07031c] mb-12 !opacity-100 pt-8">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 !opacity-100"
            >
              <service.icon className="w-12 h-12 text-[#07031c] mb-4" />
              <h3 className="text-xl font-semibold text-[#07031c] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#07031c] mt-14 mb-10 !opacity-100">
          Atendimento Rápido e Seguro para Eventos
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="lg:w-1/2 flex">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 flex items-center">
              <p className="text-xl leading-relaxed">
                A ambulância para eventos promove mais segurança, conforto e bem-estar aos participantes e profissionais
                envolvidos. Levando a uma experiência mais agradável e segura durante todo o decorrer do seu evento.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/gallery7.jpg"
                alt="Profissionais da Brigada de Emergência em evento"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#07031c]/80 to-transparent p-4">
                <p className="text-white font-medium">Profissionais qualificados em ação durante eventos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

