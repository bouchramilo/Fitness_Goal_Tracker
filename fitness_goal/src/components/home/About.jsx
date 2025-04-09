
export default function About() {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">À propos de nous</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/img_7.jpg" 
                alt="About Us" 
                className="shadow-2xl shadow-gray-700"
                style={{ 
                  border: "1px",
                  borderRadius: "53% 47% 24% 76% / 47% 64% 36% 53%" 
                }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Notre Mission</h3>
              <p className="text-text mb-6">
                Nous croyons que chacun mérite d'avoir les outils nécessaires pour atteindre ses objectifs
                de fitness. Notre plateforme a été conçue pour rendre le suivi de vos objectifs de santé
                simple et efficace.
              </p>
              <p className="text-text">
                Avec des fonctionnalités intuitives et un design moderne, nous vous aidons à rester motivé
                et à atteindre vos objectifs de santé.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }