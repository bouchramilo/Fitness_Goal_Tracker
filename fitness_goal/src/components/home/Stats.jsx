export default function Stats() {
    const stats = [
      { value: '10k+', label: 'Utilisateurs actifs' },
      { value: '95%', label: 'Objectifs atteints' },
      { value: '24/7', label: 'Support disponible' }
    ]
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-text/60">{stat.label}</p>
          </div>
        ))}
      </div>
    )
  }