"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Falha ao enviar mensagem")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Houve um erro ao enviar sua mensagem. Tente novamente.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#07031c] ">
      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#07031c] mb-4">Entre em Contato</h2>
          <p className="text-center text-gray-600 mb-8">
            Estamos prontos para atender sua necessidade. Entre em contato conosco!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <Input id="name" name="name" required placeholder="Seu nome completo" className="w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" required placeholder="seu@email.com" className="w-full" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Como podemos ajudar?"
                className="w-full min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#07031c] hover:bg-blue-900 text-white" variant="default" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

