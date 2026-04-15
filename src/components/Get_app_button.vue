<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <button
    class="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-emerald-500 hover:from-cyan-400 hover:via-blue-400 hover:to-emerald-400 transition-all duration-300 ease-in-out shadow-lg hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
  >
    {{ title }}
  </button>
</template>
