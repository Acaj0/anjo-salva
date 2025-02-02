'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTransparent(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const heroSection = document.querySelector("#hero")
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection)
      }
    }
  }, [])

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Serviços" },
    { href: "#cover", label: "Cobertura" },
    { href: "#about", label: "Sobre" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent text-white" : "bg-white text-[#07031c]"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Anjo Salva Logo" width={50} height={50} className="mr-2" />
          <span className="text-2xl font-bold">Anjo Salva</span>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          <a href="#contact"><Button
            className={`rounded-full ${
              isTransparent ? "bg-white text-[#07031c] hover:text-white" : "bg-[#07031c] text-white hover:text-[#07031c]"
            } hover:opacity-90`}
          >
            Contato
          </Button></a>
        </div>
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className=" bg-white " side="right">
            <SheetHeader>
              <SheetTitle>Menu de Navegação</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col bg-white space-y-4 mt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-lg bg-white hover:underline">
                  {item.label}
                </Link>
              ))}
              <a href="#contact"><Button className="rounded-full bg-[#07031c] text-white hover:opacity-90">Contato</Button></a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {!isTransparent && <div className="h-px bg-[#07031c] opacity-20" />}
    </nav>
  )
}

