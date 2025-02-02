import Image from "next/image";
import { MapPin } from "lucide-react";

const eventTypes = [
  {
    risk: "Risco Mínimo",
    description:
      "Eventos com capacidade até mil pessoas que atendam alguns requisitos.",
    capacity: "Até 1.000 pessoas",
  },
  {
    risk: "Risco Médio",
    description:
      "Eventos que não se enquadram com risco mínimo, com público até 10 mil pessoas.",
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
];

const ServiceAreaAndEventTypes = () => {
  return (
    <section id="cover" className="relative py-20 min-h-screen bg-[#07031c]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 pt-10">
          Nossa Área de Atendimento
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          Com orgulho, a Anjo Salva atende exclusivamente a cidade de Cuiabá,
          nossa terra querida. Nosso compromisso é oferecer o melhor serviço
          para nossa comunidade cuiabana.
        </p>

        <div className="grid  md:grid-cols-2 max-h-[220px] gap-2 md:gap-8 items-center md:mb-16 mb-64">
          <div className="space-y-6">
            <div className="bg-white h-[220px] backdrop-blur-sm rounded overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#07031c] mb-4">
                  Por que apenas Cuiabá?
                </h3>
                <ul className="space-y-2">
                  {[
                    "Foco em excelência no atendimento local",
                    "Conhecimento profundo da nossa região",
                    "Resposta rápida em emergências",
                    "Relacionamento próximo com a comunidade cuiabana",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-blue-900 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative h-[220px] rounded overflow-hidden shadow-lg">
            <Image
              src="/cuiaba.jpeg"
              alt="Mapa de Cuiabá"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-blue-800 bg-opacity-20" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-white rounded-full p-3 shadow-lg inline-block">
                <MapPin className="h-8 w-8 text-blue-900" />
              </div>
              <p className="mt-2 text-lg font-semibold text-white shadow-text">
                Cuiabá
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Classificação dos Eventos
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          Os eventos são classificados em níveis de risco aos espectadores,
          considerando o público estimado e as características específicas do
          evento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((type, index) => (
            <div
              key={index}
              className="hover:shadow-xl rounded transition-all duration-300 hover:-translate-y-1 border-none bg-white backdrop-blur-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#07031c] mb-3">
                  {type.risk}
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-blue-600 font-semibold">
                  {type.capacity}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <p className="text-center text-gray-200 mt-10 max-w-3xl mx-auto text-2xl font-bold">
            Não importa o tamanho do evento e nem o número de pessoas, nossa
            frota de ambulâncias consegue atender com primazia as emergências no
            próprio local.
          </p>
    </section>
  );
};

export default ServiceAreaAndEventTypes;
