export default function Dashboard() {
  return (
    <div class="container mx-auto px-4">
      <div class="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-8 text-white">
        <h1 class="text-3xl font-bold mb-2">Bonjour, Sarah 👋</h1>
        <p class="text-white/80">Voici un aperçu de vos objectifs du jour</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Objectifs actifs</p>
              <h3 class="text-2xl font-bold text-text mt-1">5</h3>
            </div>
            <div class="bg-primary/10 p-3 rounded-full">
              <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Objectifs atteints</p>
              <h3 class="text-2xl font-bold text-text mt-1">3</h3>
            </div>
            <div class="bg-green-100 p-3 rounded-full">
              <svg
                class="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Progression moyenne</p>
              <h3 class="text-2xl font-bold text-text mt-1">75%</h3>
            </div>
            <div class="bg-blue-100 p-3 rounded-full">
              <svg
                class="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Série actuelle</p>
              <h3 class="text-2xl font-bold text-text mt-1">7 jours</h3>
            </div>
            <div class="bg-purple-100 p-3 rounded-full">
              <svg
                class="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-sm p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-text">Objectifs actifs</h2>
              <button class="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Nouvel objectif
              </button>
            </div>

            <div class="space-y-4">
              <div class="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h3 class="font-semibold text-text">
                      10 000 pas quotidiens
                    </h3>
                    <p class="text-sm text-gray-500">
                      Objectif: 10 000 pas par jour
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-2 text-gray-500 hover:text-primary transition">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button class="p-2 text-gray-500 hover:text-red-500 transition">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="relative pt-1">
                  <div class="flex mb-2 items-center justify-between">
                    <div>
                      <span class="text-xs font-semibold inline-block text-primary">
                        75%
                      </span>
                    </div>
                  </div>
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style="width:75%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    ></div>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-2">7 500 pas aujourd'hui</p>
              </div>

              <div class="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h3 class="font-semibold text-text">Hydratation</h3>
                    <p class="text-sm text-gray-500">
                      Objectif: 8 verres d'eau par jour
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-2 text-gray-500 hover:text-primary transition">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button class="p-2 text-gray-500 hover:text-red-500 transition">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="relative pt-1">
                  <div class="flex mb-2 items-center justify-between">
                    <div>
                      <span class="text-xs font-semibold inline-block text-primary">
                        50%
                      </span>
                    </div>
                  </div>
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style="width:50%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    ></div>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-2">4 verres aujourd'hui</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-sm p-6">
            <h2 class="text-xl font-bold text-text mb-6">Activités récentes</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="bg-green-100 p-2 rounded-full">
                  <svg
                    class="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-text">Objectif "10 000 pas" atteint</p>
                  <p class="text-xs text-gray-500">Il y a 2 heures</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="bg-blue-100 p-2 rounded-full">
                  <svg
                    class="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-text">Nouvel objectif créé</p>
                  <p class="text-xs text-gray-500">Il y a 5 heures</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="bg-yellow-100 p-2 rounded-full">
                  <svg
                    class="w-5 h-5 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-text">Rappel quotidien</p>
                  <p class="text-xs text-gray-500">Il y a 1 jour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
