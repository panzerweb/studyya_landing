<script setup lang="ts">
import { ref } from 'vue'
import workspace_img from '@/assets/img/workspace.png'
import scheduler_img from '@/assets/img/scheduler.png'
import learning_img from '@/assets/img/learning.png'

// Array to manage image order. The middle item (index 1) is always the focused one.
const images = ref([
  {
    id: 1,
    src: workspace_img,
    title: 'Personal Workspace',
    content: 'Dive in to your personal workspace and create goals you want to complete.',
  },
  {
    id: 2,
    src: learning_img,
    title: 'Curated Learning',
    content: 'Arrive at topics that is most suited to your interest and curiousity.',
  },
  {
    id: 3,
    src: scheduler_img,
    title: 'Smart Scheduling',
    content: 'Schedule your days and weeks effectively through our AI-Assisted schedules.',
  },
])

// Shift the array based on which image is clicked
const focusImage = (index: number) => {
  if (index === 0) {
    // Clicked left: Move the last item to the front
    const last = images.value.pop()
    if (last) images.value.unshift(last)
  } else if (index === 2) {
    // Clicked right: Move the first item to the back
    const first = images.value.shift()
    if (first) images.value.push(first)
  }
}

// Dynamically assign your exact CSS classes based on position
const getClasses = (index: number) => {
  // Added flex-shrink-0 to prevent them from squishing on mobile
  const baseClasses =
    'mx-auto bg-black rounded-[2.5rem] border-[6px] border-gray-800 overflow-hidden transition-all duration-500 cursor-pointer flex-shrink-0'

  if (index === 1) {
    // CENTER FOCUS
    return `${baseClasses} w-65 h-130 sm:w-75 sm:h-160 shadow-2xl scale-100 opacity-100 z-10 mt-4`
  } else {
    // SIDES
    return `${baseClasses} w-65 h-120 sm:w-72 sm:h-160 shadow-xl scale-90 opacity-70 translate-y-6 blur-[0.3px]`
  }
}

const getHeadingClass = (index: number) => {
  const baseClasses =
    'text-xl sm:text-2xl md:text-4xl  text-gray-300 text-center font-bold leading-tight mb-4'

  if (index === 1) {
    return `${baseClasses}`
  } else {
    return `hidden`
  }
}

const getContentClass = (index: number) => {
  const baseClasses =
    'text-lg sm:text-md md:text-lg w-75 text-gray-400 text-center mb-4 leading-tight'

  if (index === 1) {
    return `${baseClasses}`
  } else {
    return `hidden`
  }
}
</script>

<template>
  <div class="flex items-center justify-center gap-4 sm:gap-6 w-full">
    <TransitionGroup name="carousel">
      <div class="flex flex-col justify-center" v-for="(img, index) in images" :key="img.id">
        <h2 :class="getHeadingClass(index)">
          {{ img.title }}
        </h2>
        <p :class="getContentClass(index)">
          {{ img.content }}
        </p>

        <div :class="getClasses(index)" @click="focusImage(index)">
          <img :src="img.src" class="w-full h-full object-cover pointer-events-none" />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
/* Ensures the swap animation is smooth instead of instantly snapping */
.carousel-move {
  transition: transform 0.5s ease;
}
</style>
