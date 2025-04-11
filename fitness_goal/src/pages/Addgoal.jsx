import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoalFormHeader from "../components/goals/GoalFormHeader";
import FormInput from "../components/goals/FormInput";
import FormSelect from "../components/goals/FormSelect";
import TargetInput from "../components/goals/TargetInput";
import FormActions from "../components/goals/FormActions";

export default function AddGoal() {
  const [formData, setFormData] = useState({
    goalName: "",
    category: "",
    goalTarget: "",
    unit: "steps",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const categories = [
    { value: "", label: "Sélectionnez une catégorie" },
    { value: "steps", label: "Pas" },
    { value: "water", label: "Eau" },
    { value: "exercise", label: "Exercice" },
    { value: "sleep", label: "Sommeil" },
    { value: "nutrition", label: "Nutrition" },
  ];

  const units = [
    { value: "steps", label: "pas" },
    { value: "glasses", label: "verres" },
    { value: "minutes", label: "minutes" },
    { value: "hours", label: "heures" },
    { value: "sessions", label: "séances" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.goalName.trim()) {
      newErrors.goalName = "Le nom de l'objectif est requis";
    }

    if (!formData.category) {
      newErrors.category = "Veuillez sélectionner une catégorie";
    }

    if (
      !formData.goalTarget ||
      isNaN(formData.goalTarget) ||
      Number(formData.goalTarget) <= 0
    ) {
      newErrors.goalTarget = "Veuillez entrer une valeur valide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const saveGoalToLocalStorage = (goal) => {
    try {
      const existingGoals =
        JSON.parse(localStorage.getItem("fitnessGoals")) || [];

      const newGoal = {
        ...goal,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        progress: 0,
        completed: false,
      };

      const updatedGoals = [...existingGoals, newGoal];
      localStorage.setItem("fitnessGoals", JSON.stringify(updatedGoals));

      return true;
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      const goalToSave = {
        name: formData.goalName,
        category: formData.category,
        target: Number(formData.goalTarget),
        unit: formData.unit,
        progress: 0,
      };

      if (saveGoalToLocalStorage(goalToSave)) {
        setSuccessMessage("Objectif ajouté avec succès !");
        setFormData({
          goalName: "",
          category: "",
          goalTarget: "",
          unit: "steps",
        });

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        setErrors({ submit: "Une erreur est survenue lors de la sauvegarde" });
      }
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <GoalFormHeader
            title="Ajouter un objectif"
            subtitle="Créez un nouvel objectif de fitness personnalisé"
          />

          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              {successMessage}
            </div>
          )}

          {errors.submit && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {errors.submit}
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <FormInput
                id="goalName"
                label="Nom de l'objectif"
                value={formData.goalName}
                onChange={handleChange}
                placeholder="Ex: Marcher 10 000 pas"
                error={errors.goalName}
              />

              <FormSelect
                id="category"
                label="Catégorie"
                value={formData.category}
                onChange={handleChange}
                options={categories}
                error={errors.category}
              />

              <TargetInput
                targetValue={formData.goalTarget}
                unitValue={formData.unit}
                onTargetChange={handleChange}
                onUnitChange={handleChange}
                unitOptions={units}
                error={errors.goalTarget}
              />

              <FormActions
                onSave={handleSubmit}
                onCancel={() => window.history.back()}
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
