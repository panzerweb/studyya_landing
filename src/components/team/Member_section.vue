<script setup lang="ts">
import selwynImage from '@/assets/img/selwyn.jpg'
import charleneImage from '@/assets/img/charlene.jpg'
import alexImage from '@/assets/img/alex.jpg'

const team = [
  {
    id: 1,
    name: 'Romeo Selwyn Villar',
    role: 'StudyYa CEO & Founder',
    image: selwynImage,
  },
  {
    id: 2,
    name: 'Charlene Calamba',
    role: 'Chief Operating Officer',
    image: charleneImage,
  },
  {
    id: 3,
    name: 'Alex Arnais Aparece',
    role: 'Chief Technology Officer',
    image: alexImage,
  },
]
</script>

<template>
  <section class="px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <!-- <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Meet the Team</h2> -->

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="member in team" :key="member.id" class="group relative overflow-hidden">
          <!-- Image -->
          <img
            :src="member.image"
            alt=""
            class="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6"
          >
            <h3 class="text-white text-xl font-semibold">
              {{ member.name }}
            </h3>
            <p class="text-gray-300 text-sm">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
