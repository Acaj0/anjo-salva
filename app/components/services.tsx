import { Shield, Flame, AmbulanceIcon as FirstAid, Ambulance, Users } from "lucide-react"
import WaveDivider from "./wave-divider"

const services = [
  {
    icon: Shield,
    title: "Brigada de Emergência",
    description: "Serviço profissional de bombeiro civil e brigadistas",
  },
  {
    icon: FirstAid,
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
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#07031c] mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <service.icon className="w-12 h-12 text-[#07031c] mb-4" />
              <h3 className="text-xl font-semibold text-[#07031c] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

