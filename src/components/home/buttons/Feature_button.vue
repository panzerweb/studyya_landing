<script setup lang="ts">
defineProps(['index', 'buttonTitle', 'buttonColor', 'active'])

const emit = defineEmits(['select-option'])

function selectOption(index: number) {
  emit('select-option', index)
}
</script>

<template>
  <button
    class="py-4 px-12 shadow-md border-t-4 text-left font-semibold text-lg cursor-pointer transition-all duration-300"
    :class="[
      buttonColor,
      active ? 'scale-105 bg-gray-100 shadow-lg' : 'scale-100 opacity-80 bg-gray-200',
    ]"
    @click="selectOption(index)"
  >
    {{ buttonTitle }}
  </button>
</template>
