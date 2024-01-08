import Image from "next/image"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Latest from "@/components/Latest"
import Footer from "@/components/Footer"

const pages = () => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Latest />
      <Footer />
    </main>
  )
}

export default pages