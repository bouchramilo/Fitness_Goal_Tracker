export default function StatsCard({ title, value, subValue, icon, progress }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-primary/15" >
      <div className="flex items-center justify-between mb-2" >
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-text mt-1">{value}</h3>
          {subValue && (
            <p className="text-sm text-gray-400 mt-1">{subValue}</p>
          )}
        </div>
        <div className="bg-primary/10 text-primary p-3 rounded-full">
          {icon}
        </div>
      </div>
      
      {progress !== undefined && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}