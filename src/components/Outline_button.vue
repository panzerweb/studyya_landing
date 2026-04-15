<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <button
    class="relative inline-flex items-center justify-center font-semibold rounded-xl text-white border border-transparent bg-linear-to-r from-cyan-500 to-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300"
  >
    <span
      class="w-full h-full bg-gray-900 rounded-xl px-6 py-3 flex items-center justify-center hover:bg-gray-800 transition"
    >
      {{ title }}
    </span>
  </button>
</template>
