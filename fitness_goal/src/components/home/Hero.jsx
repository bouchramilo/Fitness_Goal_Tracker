import Stats from './Stats'
import heroImage from '/public/images/img_3.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239bbe50\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' 
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-text leading-tight">
              Suivez vos objectifs de fitness<br />
              <span className="text-primary">avec précision</span>
            </h2>
            
            <p className="text-lg text-text/70 max-w-lg">
              Une application complète pour suivre vos progrès, définir des objectifs et atteindre vos résultats de fitness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/register" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-accent transition duration-300"
              >
                Commencer gratuitement
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-text hover:bg-gray-50 transition duration-300"
              >
                En savoir plus
              </a>
            </div>

            <Stats />
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Fitness tracking" 
                className="w-full h-auto bg-red-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-text">Progression</p>
                  <p className="text-xs text-text/60">+25% ce mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}