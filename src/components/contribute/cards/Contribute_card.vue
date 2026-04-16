<script setup lang="ts">
export interface ContributeProps {
  icon: string
  title: string
  desc: string
}

const role = defineProps<ContributeProps>()
</script>

<template>
  <div
    class="bg-white p-4 rounded-2xl text-gray-900 hover:bg-sky-950 hover:text-gray-200 cursor-pointer hover:shadow-lg transition-all duration-300"
  >
    <span class="material-symbols-outlined text-4xl text-brand mb-4 block">
      {{ role.icon }}
    </span>
    <h3 class="text-xl font-bold">{{ role.title }}</h3>
    <p class="mt-3 leading-relaxed">{{ role.desc }}</p>
  </div>
</template>
