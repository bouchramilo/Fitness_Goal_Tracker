export default function FormSelect({ 
  id, 
  label, 
  options, 
  value,
  onChange,
  error 
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text mb-2">
        {label}
      </label>
      <select 
        id={id} 
        name={id}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}