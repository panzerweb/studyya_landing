<script setup lang="ts">
import { ref, computed } from 'vue'
import teamImage from '@/assets/img/team_photo.jpg'
import Header_section from '@/components/contribute/Header_section.vue'
import Channels_section from '@/components/contribute/Channels_section.vue'

const activeTab = ref<'dev' | 'design' | 'content'>('dev')

const devSteps = [
  'Clone the repository from GitHub',
  'Install dependencies and run the project locally',
  'Explore the codebase and understand the architecture',
  'Pick an issue or feature to work on',
  'Submit a pull request for review',
]

const designSteps = [
  'Review the current UI/UX of StudyYa',
  'Identify areas for improvement',
  'Create wireframes or prototypes',
  'Collaborate with developers for implementation',
]

const contentSteps = [
  'Understand StudyYa’s learning philosophy',
  'Create educational or study materials',
  'Submit content for review',
  'Help expand the learning ecosystem',
]

const opportunities = [
  'Improve onboarding experience',
  'Enhance AI tutor responses',
  'Design better scheduling UI',
  'Contribute educational content',
  'Help test and report bugs',
]

const activeSteps = computed(() => {
  if (activeTab.value === 'dev') return devSteps
  if (activeTab.value === 'design') return designSteps
  return contentSteps
})

const tabClass = (active: boolean) => {
  return active
    ? 'px-6 py-2.5 bg-slate-900 text-white shadow-md rounded-full transition-all duration-300 font-medium'
    : 'px-6 py-2.5 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-all duration-300 font-medium'
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen font-sans text-gray-900">
    <!-- Header section -->
    <div class="pt-32 pb-24 px-16">
      <Header_section></Header_section>
    </div>

    <!-- Channels section -->
    <div class="pt-8 pb-24 px-6 text-center bg-gray-900 mt-10">
      <Channels_section></Channels_section>
    </div>

    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          <button
            @click="activeTab = 'dev'"
            class="cursor-pointer"
            :class="tabClass(activeTab === 'dev')"
          >
            Developers
          </button>
          <button
            @click="activeTab = 'design'"
            class="cursor-pointer"
            :class="tabClass(activeTab === 'design')"
          >
            Designers
          </button>
          <button
            @click="activeTab = 'content'"
            class="cursor-pointer"
            :class="tabClass(activeTab === 'content')"
          >
            Content Creators
          </button>
        </div>

        <div class="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
          <ul class="space-y-5">
            <li v-for="(step, i) in activeSteps" :key="i" class="flex items-start gap-4">
              <span
                class="shrink-0 w-8 h-8 rounded-full bg-cyan-300 text-cyan-900 flex items-center justify-center font-bold shadow-sm"
              >
                {{ i + 1 }}
              </span>
              <p class="text-gray-700 mt-1 text-lg">{{ step }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 bg-gray-50">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-3xl font-bold mb-6">Current Opportunities</h2>
          <ul class="space-y-4">
            <li
              v-for="(task, i) in opportunities"
              :key="i"
              class="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <span class="material-symbols-outlined text-brand">check_circle</span>
              <span class="text-gray-700 font-medium">{{ task }}</span>
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <img
            :src="teamImage"
            alt="The StudyYa team collaborating"
            class="w-full h-100 object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  </div>
</template>
