export default function FormActions({ onSave }) {
  return (
    <div className="flex space-x-4 pt-4">
      <button
        type="button"
        onClick={onSave}
        className="flex-1 bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Enregistrer
      </button>
      <a href="/home">
        <button
          type="button"
          className="px-6 py-3 border border-gray-200 hover:border-primary text-text rounded-lg transition duration-300"
        >
          Annuler
        </button>
      </a>
    </div>
  );
}
