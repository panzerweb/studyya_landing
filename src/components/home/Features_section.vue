<script setup lang="ts">
import { ref } from 'vue'
import Feature_button from './buttons/Feature_button.vue'

const activeOption = ref(1)

const features = [
  { id: 1, feature: 'Roadmap', desc: 'Step-by-step learning path', color: 'text-orange-700' },
  {
    id: 2,
    feature: 'Videos and Articles',
    desc: 'Curated learning resources',
    color: 'text-green-700',
  },
  { id: 3, feature: 'Study Guide', desc: 'Organized notes and summaries', color: 'text-blue-700' },
  {
    id: 4,
    feature: 'AI Assistant Tutor',
    desc: 'Get help anytime with AI',
    color: 'text-cyan-700',
  },
]

async function selectOption(id: number) {
  activeOption.value = id
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl sm:text-4xl md:text-6xl font-bold">Learn the best way</h1>
  </div>
  <div class="flex justify-between">
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
    </div>
    <div>
      <!-- RIGHT SIDE (DYNAMIC CONTENT) -->
      <div class="flex-1 flex items-center justify-center">
        <div v-for="item in features" :key="item.id">
          <div
            v-if="activeOption === item.id"
            class="p-6 rounded-xl bg-white shadow-lg transition-all duration-300"
          >
            <h2 class="text-xl font-bold mb-2">
              {{ item.feature }}
            </h2>
            <p class="text-gray-600">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
