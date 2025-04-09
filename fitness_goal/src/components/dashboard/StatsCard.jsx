export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-text mt-1">{value}</h3>
        </div>
        <div className="bg-primary/10 text-primary p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  )
}