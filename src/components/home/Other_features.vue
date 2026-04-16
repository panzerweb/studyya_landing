<script setup lang="ts">
import Feature_card, { type OtherFeatureProps } from './cards/Feature_card.vue'

const features: OtherFeatureProps[] = [
  {
    id: 1,
    icon: 'moon_stars',
    title: 'Protected Time',
    content:
      'You have tasks that are already set in motion even before you install the app? Protected time protects the tasks you do not want the application to modify with.',
    color: 'text-orange-600',
  },
  {
    id: 2,
    icon: 'local_library',
    title: 'Class Schedule Upload',
    content:
      'Upload your current class schedule, and let the application generate a schedule that will fit according to your needs, and preferences.',
    color: 'text-cyan-600',
  },
  {
    id: 3,
    icon: 'newsstand',
    title: 'Class Modules Upload',
    content:
      'Upload your class resources and study materials and the application is going to provide you supporting resources for you to study.',
    color: 'text-lime-600',
  },
  {
    id: 4,
    icon: 'library_books',
    title: 'Study Packs',
    content:
      'StudyYa offers in-app study packs for you to better equip you with knowledge in your field. Buy once and its yours for a lifetime.',
    color: 'text-yellow-600',
  },
  {
    id: 5,
    icon: 'colors',
    title: 'Theme Customization',
    content:
      'Your streaks became points that would allow you to customize the application that suits your preferences, want a moonlight theme for StudyYa? Start your challenge and complete it.',
    color: 'text-blue-600',
  },
  {
    id: 6,
    icon: 'rewarded_ads',
    title: 'Fun Challenges',
    content:
      'StudyYa is not just about being productive with no motivation. Prove yourself by winning daily, weekly and monthly challenges.',
    color: 'text-red-600',
  },
]
</script>

<template>
  <div>
    <h1 class="text-4xl text-center font-bold text-gray-900">We offer more features</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-4">
      <Feature_card v-for="feat in features" :key="feat.id" v-bind="feat" />
    </div>
  </div>
</template>
