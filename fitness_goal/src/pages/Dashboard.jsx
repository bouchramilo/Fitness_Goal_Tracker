import { useState, useEffect } from "react";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsCard from "../components/dashboard/StatsCard";
import ActiveGoalsSection from "../components/dashboard/ActiveGoalsSection";
import RecentActivitySection from "../components/dashboard/RecentActivitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  const [goals, setGoals] = useState([]);
  const [activities, setActivities] = useState([]);
  const [stats, setStats] = useState({
    activeGoals: 0,
    completedGoals: 0,
    averageProgress: 0,
    currentStreak: 0,
  });

  // Charger les données depuis localStorage au montage
  useEffect(() => {
    loadGoals();
    loadActivities();
  }, []);

  const loadGoals = () => {
    try {
      const savedGoals = JSON.parse(localStorage.getItem("fitnessGoals")) || [];
      setGoals(savedGoals);
      calculateStats(savedGoals);
    } catch (error) {
      console.error("Erreur lors du chargement des objectifs:", error);
    }
  };

  const loadActivities = () => {
    // Ici vous pourriez charger depuis une API ou localStorage
    const demoActivities = [
      {
        type: "success",
        text: "Objectif '10 000 pas' atteint",
        time: "Il y a 2 heures",
      },
      { type: "add", text: "Nouvel objectif créé", time: "Il y a 5 heures" },
      { type: "reminder", text: "Rappel quotidien", time: "Il y a 1 jour" },
    ];
    setActivities(demoActivities);
  };

  const calculateStats = (goalsList) => {
    const active = goalsList.filter((goal) => !goal.completed).length;
    const completed = goalsList.filter((goal) => goal.completed).length;
    const totalProgress = goalsList.reduce(
      (sum, goal) => sum + (goal.progress || 0),
      0
    );
    const average =
      goalsList.length > 0 ? Math.round(totalProgress / goalsList.length) : 0;

    // Calcul simplifié de la série (à adapter selon vos besoins)
    const streak = goalsList.length > 0 ? 7 : 0; // Exemple basique

    setStats({
      activeGoals: active,
      completedGoals: completed,
      averageProgress: average,
      currentStreak: streak,
    });
  };

  const handleAddGoal = () => {
    // Redirection vers la page d'ajout
    window.location.href = "/create";
  };

  const handleGoalUpdate = (goalId, updates) => {
    try {
      const updatedGoals = goals.map(goal => 
        goal.id === goalId ? { ...goal, ...updates } : goal
      );
      
      localStorage.setItem("fitnessGoals", JSON.stringify(updatedGoals));
      setGoals(updatedGoals);
      calculateStats(updatedGoals);
      return true;
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      return false;
    }
  };

  const statsCards = [
    {
      title: "Objectifs actifs",
      value: stats.activeGoals,
      icon: GoalIcon,
      color: "primary",
    },
    {
      title: "Objectifs atteints",
      value: stats.completedGoals,
      icon: CheckIcon,
      color: "primary",
    },
    {
      title: "Progression moyenne",
      value: `${stats.averageProgress}%`,
      icon: ProgressIcon,
      color: "primary",
    },
    {
      title: "Série actuelle",
      value: `${stats.currentStreak} jours`,
      icon: StreakIcon,
      color: "primary",
    },
  ];
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-4 container mx-auto px-4">
        <WelcomeBanner userName="Sarah" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              colorClass={stat.color}
              progress={stat.progress}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="lg:col-span-2">
            <ActiveGoalsSection
              goals={goals}
              onAddGoal={handleAddGoal}
              onGoalUpdate={handleGoalUpdate}
            />
          </div>

          {/* <div className="lg:col-span-1">
            <RecentActivitySection activities={activities} />
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
