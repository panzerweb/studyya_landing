<script setup lang="ts">
import { ref } from 'vue'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const activeDay = ref('Mon')

const tasks = ref([
  { id: 1, text: 'Watch lesson videos', done: true },
  { id: 2, text: 'Review study notes', done: false },
  { id: 3, text: 'Practice exercises', done: false },
])

const toggleTask = (id: number) => {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.done = !task.done
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <!-- Efficient Workspace -->
    <div class="flex flex-col gap-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h1 class="text-6xl font-bold text-gray-900">Efficient Workspace</h1>
      </div>

      <!-- Main Goal Card -->
      <div class="bg-gray-100 rounded-3xl p-6 md:p-7 w-full">
        <!-- Label -->
        <div class="mb-3">
          <span class="text-xs bg-teal-100 text-teal-600 px-3 py-1 rounded-full font-medium">
            TARGET: DEC 15
          </span>
        </div>

        <!-- Title -->
        <h2 class="text-lg md:text-xl font-semibold text-gray-800">Pass AWS Exam</h2>

        <!-- Subtitle -->
        <p class="text-sm text-gray-500 mt-1">Cloud Practitioner certification journey.</p>

        <!-- Progress -->
        <div class="mt-4 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-full bg-linear-to-r from-teal-500 to-cyan-500 rounded-full w-[40%] transition-all"
          ></div>
        </div>
      </div>

      <!-- Shared Spaces -->
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-800">Shared Spaces</h2>

        <button
          class="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black font-bold shadow hover:scale-105 transition"
        >
          +
        </button>
      </div>

      <!-- Cards -->
      <div class="space-y-4">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition w-full"
        >
          <!-- Top -->
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-gray-800">Capstone Defense</h3>

            <!-- Avatars -->
            <div class="flex -space-x-2">
              <div class="w-6 h-6 bg-gray-300 rounded-full border"></div>
              <div class="w-6 h-6 bg-gray-400 rounded-full border"></div>
              <div
                class="w-6 h-6 bg-gray-500 rounded-full border text-[10px] flex items-center justify-center text-white"
              >
                +3
              </div>
            </div>
          </div>

          <!-- Tag + Date -->
          <div class="flex items-center gap-3 mt-2 text-xs">
            <span class="bg-teal-100 text-teal-600 px-2 py-1 rounded-full"> Research </span>
            <span class="text-gray-500"> June 22 </span>
          </div>

          <!-- Progress -->
          <div class="mt-4 flex items-center gap-3">
            <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-teal-600 rounded-full w-[78%]"></div>
            </div>
            <span class="text-xs text-gray-600 font-medium"> 78% </span>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition w-full"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-gray-800">Atelier Launch</h3>

            <div class="flex -space-x-2">
              <div class="w-6 h-6 bg-gray-400 rounded-full border"></div>
              <div
                class="w-6 h-6 bg-gray-500 rounded-full border text-[10px] flex items-center justify-center text-white"
              >
                +1
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 mt-2 text-xs">
            <span class="bg-purple-100 text-purple-600 px-2 py-1 rounded-full"> Design </span>
            <span class="text-gray-500"> July 10 </span>
          </div>

          <div class="mt-4 flex items-center gap-3">
            <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-teal-600 rounded-full w-[45%]"></div>
            </div>
            <span class="text-xs text-gray-600 font-medium"> 45% </span>
          </div>
        </div>
      </div>

      <!-- 🔘 Action Button -->
      <button
        class="mt-2 w-full bg-teal-700 text-white py-3 rounded-2xl font-medium hover:bg-teal-800 transition shadow-md"
      >
        Generate Schedule
      </button>
    </div>

    <!-- Smart Scheduler -->
    <div class="flex flex-col gap-6">
      <h1 class="text-6xl font-bold text-gray-900">Smart Scheduler</h1>

      <!-- Main Container Card -->
      <div
        class="bg-white rounded-3xl shadow-lg p-6 md:p-7 border border-gray-100 w-full max-w-full"
      >
        <!-- 📅 Weekly Horizon -->
        <div class="bg-gray-100 rounded-2xl p-4">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-sm font-semibold text-gray-700">Weekly Horizon</h2>
            <span class="text-xs text-gray-500">October 2023</span>
          </div>

          <!-- Calendar Cells -->
          <div class="flex justify-between">
            <div
              v-for="day in days"
              :key="day"
              @click="activeDay = day"
              class="flex flex-col items-center cursor-pointer"
            >
              <span class="text-xs text-gray-500 mb-1">
                {{ day.slice(0, 1) }}
              </span>

              <div
                :class="[
                  'w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition',
                  activeDay === day
                    ? 'bg-teal-700 text-white shadow scale-105'
                    : 'text-gray-700 hover:bg-gray-200',
                ]"
              >
                {{ day.slice(0, 1) }}
              </div>
            </div>
          </div>
        </div>

        <!-- 🧠 Today’s Flow -->
        <div class="mt-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-gray-800">{{ activeDay }}’s Flow</h2>
            <span class="text-xs text-green-600">
              {{ tasks.filter((t) => t.done).length }} of {{ tasks.length }} Complete
            </span>
          </div>

          <!-- Task Cards -->
          <div class="space-y-4">
            <div
              v-for="task in tasks"
              :key="task.id"
              class="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-start gap-3 transition hover:shadow-md"
            >
              <!-- Accent Line -->
              <div class="w-1 rounded-full bg-teal-600 h-full"></div>

              <!-- Checkbox -->
              <div
                @click="toggleTask(task.id)"
                class="mt-1 w-5 h-5 rounded-md border flex items-center justify-center cursor-pointer"
                :class="task.done ? 'bg-green-600 border-green-600' : 'border-gray-300'"
              >
                <span v-if="task.done" class="text-white text-xs">✓</span>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <div class="flex justify-between items-center">
                  <h3
                    :class="[
                      'text-sm md:text-base font-semibold',
                      task.done ? 'line-through text-gray-400' : 'text-gray-800',
                    ]"
                  >
                    {{ task.text }}
                  </h3>

                  <!-- Example Tag -->
                  <span
                    class="text-[10px] px-2 py-1 rounded-full font-medium bg-yellow-100 text-yellow-700"
                  >
                    MEDIUM
                  </span>
                </div>

                <p class="text-xs text-gray-500 mt-1">09:00 - 10:30 AM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 🔔 Notification -->
        <div class="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
          <span class="text-blue-500 text-lg">🔔</span>
          <p class="text-sm text-blue-700">You have a scheduled session today. Stay consistent!</p>
        </div>

        <!-- 🔄 Button -->
        <button
          class="mt-6 w-full bg-teal-700 text-white py-3 rounded-xl font-medium hover:bg-teal-800 transition"
        >
          Regenerate Schedule
        </button>
      </div>
    </div>
  </div>
</template>
