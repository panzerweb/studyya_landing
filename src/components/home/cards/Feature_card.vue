<script setup lang="ts">
export interface OtherFeatureProps {
  id: number
  icon: string
  title: string
  content: string
  color: string
}

const props = defineProps<OtherFeatureProps>()
</script>

<template>
  <div
    class="p-6 shadow-md bg-gray-100 rounded-xl hover:shadow-lg transition hover:scale-101 cursor-pointer"
  >
    <!-- Icon -->
    <div class="flex justify-start">
      <span class="material-symbols-outlined mb-3" :class="props.color">
        {{ props.icon }}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-xl font-bold text-gray-800 mb-2">
      {{ props.title }}
    </h2>

    <!-- Content -->
    <p class="text-gray-600 text-md">
      {{ props.content }}
    </p>
  </div>
</template>
