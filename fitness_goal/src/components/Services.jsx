import ServiceCard from './ServiceCard'

export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'Suivi des Objectifs',
      description: 'Définissez et suivez vos objectifs personnalisés de fitness avec notre interface intuitive.'
    },
    {
      icon: '📊',
      title: 'Statistiques Détaillées',
      description: 'Visualisez vos progrès avec des graphiques et statistiques détaillés.'
    },
    {
      icon: '📱',
      title: 'Application Mobile',
      description: 'Accédez à vos objectifs et suivez vos progrès où que vous soyez.'
    }
  ]

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}