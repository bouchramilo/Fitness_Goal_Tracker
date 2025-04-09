export default function TargetInput({ 
  targetValue,
  unitValue,
  onTargetChange,
  onUnitChange,
  unitOptions,
  error 
}) {
  return (
    <div>
      <label htmlFor="goalTarget" className="block text-sm font-medium text-text mb-2">
        Objectif total
      </label>
      <div className="flex space-x-4">
        <input 
          type="number" 
          id="goalTarget" 
          name="goalTarget"
          value={targetValue}
          onChange={onTargetChange}
          className={`flex-1 px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition`}
          placeholder="Ex: 10000"
        />
        <select 
          id="unit" 
          name="unit"
          value={unitValue}
          onChange={onUnitChange}
          className="w-32 px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
        >
          {unitOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}