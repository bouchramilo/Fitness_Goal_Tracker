const iconVariants = {
    success: { bg: 'bg-green-100', icon: 'text-green-500', svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> },
    add: { bg: 'bg-blue-100', icon: 'text-blue-500', svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /> },
    reminder: { bg: 'bg-yellow-100', icon: 'text-yellow-500', svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
  }
  
  export default function ActivityItem({ type, text, time }) {
    const variant = iconVariants[type] || iconVariants.reminder
  
    return (
      <div className="flex items-start space-x-3">
        <div className={`${variant.bg} p-2 rounded-full`}>
          <svg className={`w-5 h-5 ${variant.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {variant.svg}
          </svg>
        </div>
        <div>
          <p className="text-sm text-text">{text}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
    )
  }