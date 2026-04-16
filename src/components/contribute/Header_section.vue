<script setup lang="ts">
import Contributors_section from './Contributors_section.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="w-full">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
        Build <span class="text-brand">StudyYa</span> Together
      </h1>
      <p class="text-lg text-justify text-gray-600 max-w-lg leading-relaxed">
        At StudyYa, we believe productivity should never come at the cost of burnout. Help us build
        something meaningful whether you are a developer, designer, or a content creator. Together,
        we will continue to improve for better user experience and help students globally achieve
        the best version of themselves.
      </p>
    </div>
    <div>
      <Contributors_section></Contributors_section>
    </div>
  </div>
</template>
