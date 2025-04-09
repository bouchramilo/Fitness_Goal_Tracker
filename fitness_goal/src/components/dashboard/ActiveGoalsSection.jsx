import GoalItem from './GoalItem'

export default function ActiveGoalsSection({ goals, onAddGoal }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-text">Objectifs actifs</h2>
        <button 
          onClick={onAddGoal}
          className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Nouvel objectif
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <GoalItem
            key={index}
            title={goal.title}
            description={goal.description}
            progress={goal.progress}
            currentValue={goal.currentValue}
            onEdit={() => console.log('Edit', goal.id)}
            onDelete={() => console.log('Delete', goal.id)}
          />
        ))}
      </div>
    </div>
  )
}