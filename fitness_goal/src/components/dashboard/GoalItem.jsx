export default function GoalItem({ 
    title, 
    description, 
    progress, 
    currentValue,
    onEdit,
    onDelete
  }) {
    return (
      <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-text">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={onEdit}
              className="p-2 text-gray-500 hover:text-primary transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button 
              onClick={onDelete}
              className="p-2 text-gray-500 hover:text-red-500 transition"
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
              style={{width: `${progress}%`}}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{currentValue}</p>
      </div>
    )
  }