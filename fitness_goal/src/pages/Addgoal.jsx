import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <AddForm />
      </main>
      <Footer />
    </div>
  )
}