import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services"
import EventTypes from "./components/event-types"
import ContactForm from "./components/contact-form"
import Footer from "./components/footer"
import About from "./components/about"
import Gallery from "./components/gallery"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Services />
        <EventTypes />
        <About />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

