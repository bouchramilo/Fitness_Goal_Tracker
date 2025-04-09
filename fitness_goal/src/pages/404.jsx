import Header from '../components/Header'
import Footer from '../components/Footer'
import Error404 from '../components/404'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* <Header /> */}
      <main className="pt-16">
        <Error404 />
    
      </main>
      {/* <Footer /> */}
    </div>
  )
}