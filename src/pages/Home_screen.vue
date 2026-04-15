<script lang="ts" setup>
import Hero_section from '@/components/home/Hero_section.vue'
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
  <div class="bg-gray-200 py-8 px-16"></div>
</template>
