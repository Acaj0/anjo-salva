import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services"
import EventTypes from "./components/event-types"
import ContactForm from "./components/contact-form"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Services />
        <EventTypes />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

