import Header from '../components/Header'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Contact from '../components/home/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}