import { useState } from 'react';

export default function GoalItem({ goal, onComplete, onDelete, onUpdateProgress }) {
  const { id, name, category, target, unit, progress, currentValue } = goal;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProgress, setNewProgress] = useState(progress);

  const handleSaveProgress = () => {
    onUpdateProgress(id, newProgress);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-text">{name}</h3>
          <p className="text-sm text-gray-500">
            {category} • Objectif: {target} {unit}
          </p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-2 text-gray-500 hover:text-blue-500 transition"
            title="Modifier la progression"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button 
            onClick={onComplete}
            className="p-2 text-gray-500 hover:text-green-500 transition"
            title="Marquer comme terminé"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button 
            onClick={onDelete}
            className="p-2 text-gray-500 hover:text-red-500 transition"
            title="Supprimer l'objectif"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-primary">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
          />
        </div>
      </div>
      {currentValue && (
        <p className="text-sm text-gray-500 mt-2">{currentValue}</p>
      )}

      {/* Modal pour modifier la progression */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Modifier la progression</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Progression actuelle: {newProgress}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={newProgress}
                onChange={(e) => setNewProgress(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={handleSaveProgress}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}