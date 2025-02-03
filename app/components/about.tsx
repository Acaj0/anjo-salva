import {
  Building2,
  Siren,
  Stethoscope,
  CalendarFold,
  MapPin,
} from "lucide-react";

const infoCards = [
  {
    icon: Building2,
    title: "Quem Somos",
    description:
      "Somos uma empresa especializada em grandes eventos, formada por uma brigada de emergência e  profissionais de enfermagem. Uma excelente opção para quem procura profissionais qualificados e ambulância particular.",
  },
  {
    icon: MapPin,
    title: "Onde Atuamos",
    description:
      "Cobrimos vários tipos de eventos em diversos lugares, como casas de shows, shopping centers, hospitais, hotéis, igrejas e condomínios.",
  },
  {
    icon: Siren,
    title: "Serviço de Enfermagem em Eventos",
    description:
      "É uma exigência regulamentada por leis a cobertura de eventos por equipes de saúde com ambulância.",
  },
  {
    icon: CalendarFold,
    title: "Tipos de Eventos",
    description:
      "Atendemos eventos de todas as modalidades e de todos os portes, sejam esportivos, equestres, festas, formaturas, shows, rodeios, entre outros.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-white overflow-hidden pattern-cross pattern-blue-50 pattern-bg-white pattern-size-6 pattern-opacity-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-[#07031c] mb-10 pt-10">
          Sobre Nossa Empresa
        </h2>


        <div className="relative lg:flex hidden">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-full md:w-2/3 lg:w-1/2 ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}
              style={{ top: `${index * 10 + 5}rem` }}
            >
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 !opacity-100 mx-10">
                <card.icon className="w-16 h-16 text-[#07031c] mb-6" />
                <h3 className="text-2xl font-semibold text-[#07031c] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 lg:hidden">
        {infoCards.map((card, index) => (
          <div key={index} className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 !opacity-100 mx-10">
            <card.icon className="w-16 h-16 text-[#07031c] mb-6" />
            <h3 className="text-2xl font-semibold text-[#07031c] mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600 text-lg">{card.description}</p>
          </div>))}
        </div>
        <div className="hidden lg:flex " style={{ height: `${infoCards.length * 10 + 10}rem` }}></div>

        <div className="mt-24 bg-[#07031c] text-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Nosso Objetivo
          </h2>
          <div className="flex flex-col md-flex-row items-center justify-center">
            <Stethoscope className="w-16 h-16 md:mb-0 mb-4 md:mr-6" />
            <p className="text-xl max-w-3xl text-center pt-6">
              Garantir o pronto atendimento rápido por profissionais da saúde em
              situações que necessitem de primeiros socorros imediatos, e quando
              necessário, encaminhamento à unidade hospitalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
