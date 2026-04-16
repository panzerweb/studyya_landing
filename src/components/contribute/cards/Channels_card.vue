<script setup lang="ts">
export interface ChannelsProps {
  icon: string
  name: string
  desc: string
  buttonText: string
  path: string
}

const emit = defineEmits<{
  (e: 'navigate', path: string): void
}>()

const props = defineProps<ChannelsProps>()

function handleClick(path: string): void {
  emit('navigate', path)
}
</script>

<template>
  <div class="w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4 shadow-md">
    <span class="material-symbols-outlined text-3xl text-cyan-700">
      {{ props.icon }}
    </span>
  </div>
  <h3 class="font-bold text-lg text-gray-100">{{ props.name }}</h3>
  <p class="text-sm text-gray-300 mt-2">{{ props.desc }}</p>

  <div class="my-4">
    <button
      class="px-6 py-4 bg-slate-800 text-sm text-gray-100 tracking-wider hover:bg-cyan-900 font-bold rounded-2xl cursor-pointer shadow-lg hover:-translate-y-1 transition-all duration-300"
      @click="handleClick(props.path)"
    >
      {{ props.buttonText }}
    </button>
  </div>
</template>
