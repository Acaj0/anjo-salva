import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 bg">
            <Image
              src="/logo.png"
              alt="Anjo Salva Logo"
              width={100}
              height={100}
              className="drop-shadow-lg bg-[#07031c] rounded-lg"
            />
            <div>
              <h3 className="text-xl text-[#07031c] font-bold">Anjo Salva</h3>
              <p className="text-gray-400">Brigada de Emergência</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-[#07031c] gap-2 hover:text-blue-400 transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-[#07031c]" />
              <span>(65) 99216-7706</span>
            </div>
            <div className="flex items-center gap-2 text-[#07031c] hover:text-blue-400 transition-colors cursor-pointer">
              <Mail className="w-5 h-5 text-[#07031c]" />
              <span>anjossalvabrigadadeemergencia@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#07031c] hover:text-blue-400 transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 text-[#07031c]" />
              <span>Localização</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-left text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Anjo Salva. Todos os direitos
            reservados.
          </p>
          <a
            href="https://www.lumenweb.com.br/"
            className="hover:underline"
            target="_blank"
          >
            Lumen Desenvolvimento Web
          </a>
        </div>
      </div>
    </footer>
  );
}
