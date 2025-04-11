// import { useState } from 'react';
import GoalItem from './GoalItem';

export default function ActiveGoalsSection({ goals, onAddGoal, onGoalUpdate }) {
  const handleCompleteGoal = (goalId) => {
    onGoalUpdate(goalId, { completed: true, progress: 100 });
  };

  const handleDeleteGoal = (goalId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet objectif ?")) {
      const updatedGoals = goals.filter(goal => goal.id !== goalId);
      onGoalUpdate(null, updatedGoals);
    }
  };

  const handleUpdateProgress = (goalId, newProgress) => {
    onGoalUpdate(goalId, { progress: newProgress });
  };

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

      <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              onComplete={() => handleCompleteGoal(goal.id)}
              onDelete={() => handleDeleteGoal(goal.id)}
              onUpdateProgress={handleUpdateProgress}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">Aucun objectif pour le moment</p>
        )}
      </div>
    </div>
  );
}