<script setup lang="ts">
import Contribute_card from './cards/Contribute_card.vue'
import type { ContributeProps } from './cards/Contribute_card.vue'

const roles: ContributeProps[] = [
  {
    title: 'Developers',
    desc: 'Build features, improve performance, and shape the core of StudyYa.',
    icon: 'code',
  },
  {
    title: 'Designers',
    desc: 'Craft intuitive interfaces and elevate the user experience.',
    icon: 'palette',
  },
  {
    title: 'Content Creators',
    desc: 'Create study materials and educational resources.',
    icon: 'edit_note',
  },
]
</script>

<template>
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    <div v-for="(role, i) in roles" :key="i" class="mt-4">
      <Contribute_card :icon="role.icon" :title="role.title" :desc="role.desc"></Contribute_card>
    </div>
  </div>
</template>
