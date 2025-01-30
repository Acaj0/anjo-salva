import "./globals.css"
import { Montserrat} from "next/font/google"

const jakarta = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}

