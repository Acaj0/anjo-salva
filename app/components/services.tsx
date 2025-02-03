import { FireExtinguisher, Flame, BriefcaseMedical, Ambulance, Users } from "lucide-react"

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
    <section id="services" className="relative min-h-screen py-20 pattern-cross pattern-blue-50 pattern-bg-white 
  pattern-size-6 pattern-opacity-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#07031c] mb-12 !opacity-100 pt-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8">
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#07031c] mt-14 !opacity-100">Atendimento Rápido e Seguro para Eventos</h2>
      <div className="container mx-auto mt-10">
        <div className="p-10 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 !opacity-100">
          <p className="text-xl">A ambulância para eventos promove mais segurança, conforto e bem-estar aos participantes e profissionais envolvidos. Levando a uma experiência mais agradável e segura durante todo o decorrer do seu evento.</p>
        </div>
      </div>
    </section>
  )
}

