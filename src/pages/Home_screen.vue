<script lang="ts" setup>
import Hero_section from '@/components/home/Hero_section.vue'
import Other_features from '@/components/home/Other_features.vue'
import Resources_section from '@/components/home/Resources_section.vue'
import Scheduler_Workspace from '@/components/home/Scheduler_Workspace.vue'
</script>

<template>
  <div class="bg-slate-900 flex justify-center items-center pt-34 pb-16">
    <Hero_section></Hero_section>
  </div>
  <div class="bg-gray-200 py-16 px-16">
    <Resources_section></Resources_section>
  </div>
  <div class="bg-gray-200 py-8 px-16">
    <Scheduler_Workspace></Scheduler_Workspace>
  </div>
  <div class="bg-gray-200 pt-28 pb-36 px-16">
    <Other_features></Other_features>
  </div>

  <!-- Quote -->
  <section class="py-24 px-6 bg-gray-50">
    <div class="max-w-3xl mx-auto text-center">
      <blockquote class="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
        “Be productive enough to move forward, but gentle enough to keep going— because a burnt-out
        mind builds nothing that lasts.”
      </blockquote>

      <!-- Optional divider -->
      <div class="mt-6 w-16 h-1 bg-brand mx-auto rounded-full"></div>

      <!-- Optional author -->
      <p class="mt-4 text-sm text-gray-500">— StudyYa Philosophy</p>
    </div>
  </section>
</template>
