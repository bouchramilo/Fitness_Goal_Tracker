import Header from "../components/Header";
import Footer from "../components/Footer";
// import Error404 from "../components/404";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-20 pb-4">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <svg
              className="w-48 h-48 mx-auto text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-6xl font-bold text-text mb-4">404</h1>
          <h2 className="text-2xl font-medium text-text/80 mb-6">
            Page non trouvée
          </h2>
          <p className="text-text/60 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/home"
              className="bg-primary hover:bg-accent text-white font-medium px-8 py-3 rounded-xl transition duration-300 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Retour à l'accueil
            </a>
            <a
              href="/dashboard"
              className="bg-white hover:bg-gray-50 text-text font-medium px-8 py-3 rounded-xl transition duration-300 flex items-center border border-gray-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Tableau de bord
            </a>
          </div>

          <div className="mt-12 text-text/60">
            <p className="mb-4">Vous cherchez peut-être :</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/dashboard"
                className="hover:text-primary transition duration-300"
              >
                Tableau de bord
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/goals"
                className="hover:text-primary transition duration-300"
              >
                Mes objectifs
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/performance"
                className="hover:text-primary transition duration-300"
              >
                Performances
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/profile"
                className="hover:text-primary transition duration-300"
              >
                Profil
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
