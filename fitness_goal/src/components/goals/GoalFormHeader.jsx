export default function GoalFormHeader({ title, subtitle }) {
    return (
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-white/80">{subtitle}</p>
      </div>
    )
  }