import ActivityItem from './ActivityItem'

export default function RecentActivitySection({ activities }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-text mb-6">Activités récentes</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            type={activity.type}
            text={activity.text}
            time={activity.time}
          />
        ))}
      </div>
    </div>
  )
}