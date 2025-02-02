import { Card, CardContent } from "@/components/ui/card"

const eventTypes = [
  {
    risk: "Risco Mínimo",
    description: "Eventos com capacidade até mil pessoas que atendam alguns requisitos.",
    capacity: "Até 1.000 pessoas",
  },
  {
    risk: "Risco Médio",
    description: "Eventos que não se enquadram com risco mínimo, com público até 10 mil pessoas.",
    capacity: "Até 10.000 pessoas",
  },
  {
    risk: "Risco Alto",
    description: "Eventos com público entre 10.001 até 40.000 mil pessoas.",
    capacity: "10.001 - 40.000 pessoas",
  },
  {
    risk: "Risco Especial",
    description: "Eventos com público acima de 40.000 mil pessoas.",
    capacity: "Acima de 40.000 pessoas",
  },
]

export default function EventTypes() {
  return (
    <section className="relative py-20 min-h-screen bg-[#07031c]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Classificação dos Eventos</h2>
        <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          Os eventos são classificados em níveis de risco aos espectadores, considerando o público estimado e as
          características específicas do evento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((type, index) => (
            <Card
              key={index}
              className="hover:shadow-xl  rounded-lg transition-all duration-300 hover:-translate-y-1 border-none bg-white backdrop-blur-sm"
            >
              <CardContent className="p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#07031c] mb-3">{type.risk}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-blue-600 font-semibold">{type.capacity}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
        <p className="text-center text-gray-200 mb-12 mt-14 max-w-3xl mx-auto text-2xl font-bold">
          Não importa o tamanho do evento e nem o número de pessoas, nossa frota de ambulâncias consegue atender com primazia as emergências no próprio local.
        </p>
        </div>
      </div>
    </section>
  )
}

