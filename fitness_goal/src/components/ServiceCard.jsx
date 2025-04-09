export default function ServiceCard({ icon, title, description }) {
    return (
      <div 
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        style={{ 
          border: "1px",
          borderRadius: "14% 86% 12% 88% / 82% 12% 88% 18%" 
        }}
      >
        <div className="text-primary text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-text">{description}</p>
      </div>
    )
  }