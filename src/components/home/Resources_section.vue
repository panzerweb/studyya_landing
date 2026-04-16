<script setup lang="ts">
import { ref } from 'vue'
import Feature_button from './buttons/Feature_button.vue'
import roadmapImg from '@/assets/features/roadmap.png'
import videosImg from '@/assets/features/videos_articles.png'
import studyAssistantImg from '@/assets/features/Study_Assistant.png'
import aiAssistantImg from '@/assets/features/AI_Assistant.png'

const activeOption = ref(1)

const features = [
  {
    id: 1,
    feature: 'Roadmap',
    desc: 'Follow a structured, step-by-step path tailored to your goals so you always know what to learn next.',
    color: 'text-orange-700',
    image: roadmapImg,
  },
  {
    id: 2,
    feature: 'Videos and Articles',
    desc: 'Access carefully curated videos and articles that simplify complex topics and accelerate your learning.',
    color: 'text-green-700',
    image: videosImg,
  },
  {
    id: 3,
    feature: 'Study Guide',
    desc: 'Stay organized with clear notes, summaries, and key concepts designed for efficient review and retention.',
    color: 'text-blue-700',
    image: studyAssistantImg,
  },
  {
    id: 4,
    feature: 'AI Assistant Tutor',
    desc: 'Ask questions anytime and get instant, personalized explanations to help you understand faster.',
    color: 'text-cyan-700',
    image: aiAssistantImg,
  },
]

async function selectOption(id: number) {
  activeOption.value = id
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-6xl font-bold">Learn the best way</h1>
  </div>
  <div class="flex flex-col md:flex-row justify-between items-start">
    <div>
      <p class="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800">
        Set of curated resources, videos, articles for your needs
      </p>

      <div class="features-button-group flex flex-col mt-8 gap-2">
        <Feature_button
          v-for="f in features"
          :key="f.id"
          :button-title="f.feature"
          :button-color="f.color"
          :index="f.id"
          :active="activeOption === f.id"
          @select-option="selectOption"
        />
      </div>
      <div v-for="item in features" :key="item.id">
        <div v-if="activeOption === item.id">
          <div class="mt-8">
            <h2 class="text-2xl font-bold text-gray-900">
              {{ item.feature }}
            </h2>

            <p class="text-gray-600 text-lg mt-2 leading-relaxed text-wrap">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-xl">
      <!-- RIGHT SIDE (DYNAMIC CONTENT) -->
      <div class="flex flex-col items-center justify-center text-center w-full">
        <div v-for="item in features" :key="item.id" class="w-full">
          <div v-if="activeOption === item.id" class="transition-all duration-300">
            <!-- IMAGE -->
            <img
              :src="item.image"
              :alt="item.feature"
              class="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain opacity-90 hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
