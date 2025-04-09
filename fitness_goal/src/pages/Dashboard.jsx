import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsCard from "../components/dashboard/StatsCard";
import ActiveGoalsSection from "../components/dashboard/ActiveGoalsSection";
import RecentActivitySection from "../components/dashboard/RecentActivitySection";
import Header from '../components/Header'
import Footer from '../components/Footer'

// Icônes réutilisables
const GoalIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>
);

const CheckIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ProgressIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const StreakIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function Dashboard() {
  // Données simulées
  const stats = [
    { title: "Objectifs actifs", value: "5", icon: GoalIcon, color: "primary" },
    {
      title: "Objectifs atteints",
      value: "3",
      icon: CheckIcon,
      color: "green",
    },
    {
      title: "Progression moyenne",
      value: "75%",
      icon: ProgressIcon,
      color: "blue",
    },
    {
      title: "Série actuelle",
      value: "7 jours",
      icon: StreakIcon,
      color: "purple",
    },
  ];

  const goals = [
    {
      id: 1,
      title: "10 000 pas quotidiens",
      description: "Objectif: 10 000 pas par jour",
      progress: 75,
      currentValue: "7 500 pas aujourd'hui",
    },
    {
      id: 2,
      title: "Hydratation",
      description: "Objectif: 8 verres d'eau par jour",
      progress: 50,
      currentValue: "4 verres aujourd'hui",
    },
  ];

  const activities = [
    {
      type: "success",
      text: "Objectif '10 000 pas' atteint",
      time: "Il y a 2 heures",
    },
    { type: "add", text: "Nouvel objectif créé", time: "Il y a 5 heures" },
    { type: "reminder", text: "Rappel quotidien", time: "Il y a 1 jour" },
  ];

  const handleAddGoal = () => {
    console.log("Ajouter un nouvel objectif");
    // Logique pour ajouter un objectif
  };

  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <Header />
      <main className="pt-16 container">
        <WelcomeBanner userName="Sarah" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              colorClass={stat.color}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ActiveGoalsSection goals={goals} onAddGoal={handleAddGoal} />
          </div>

          <div className="lg:col-span-1">
            <RecentActivitySection activities={activities} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
