export default function FormInput({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  value,
  onChange,
  error 
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text mb-2">
        {label}
      </label>
      <input 
        type={type} 
        id={id} 
        name={id}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition`}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}