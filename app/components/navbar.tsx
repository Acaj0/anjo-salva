'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent text-white" : "bg-white shadow-sm text-[#07031c]"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Anjo Salva Logo" width={50} height={50} className="mr-2" />
          <span className="text-2xl font-bold">Anjo Salva</span>
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            Sobre
          </Link>
          <Link href="/services" className="hover:underline">
            Serviços
          </Link>
          <Button
            className={`rounded-full ${
              isTransparent ? "bg-white text-[#07031c]" : "bg-[#07031c] text-white"
            } hover:opacity-90`}
          >
            Contato
          </Button>
        </div>
      </div>
      {!isTransparent && <div className="h-px bg-[#07031c] opacity-20" />}
    </nav>
  )
}

