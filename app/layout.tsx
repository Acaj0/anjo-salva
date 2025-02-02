import "./globals.css"
import { Montserrat } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" 

const jakarta = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anjo Salva | Brigada de Emergência em Cuiabá",
  description:
    "Anjo Salva - Brigada de Emergência em Cuiabá. Serviços profissionais de prevenção e combate a incêndios, primeiros socorros e resgate.",
  keywords: [
    "brigada de emergência",
    "Cuiabá",
    "combate a incêndio",
    "primeiros socorros",
    "resgate",
    "segurança",
    "treinamento",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}

