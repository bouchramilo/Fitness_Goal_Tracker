export default function WelcomeBanner({ userName }) {
    return (
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Bonjour, {userName} 👋</h1>
        <p className="text-white/80">Voici un aperçu de vos objectifs du jour</p>
      </div>
    )
  }