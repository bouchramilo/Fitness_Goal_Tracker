export default function StatsCard({ title, value, icon, colorClass }) {
    const colorVariants = {
      primary: 'bg-primary/10 text-primary',
      green: 'bg-green-100 text-green-500',
      blue: 'bg-blue-100 text-blue-500',
      purple: 'bg-purple-100 text-purple-500'
    }
  
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-text mt-1">{value}</h3>
          </div>
          <div className={`${colorVariants[colorClass]} p-3 rounded-full`}>
            {icon}
          </div>
        </div>
      </div>
    )
  }