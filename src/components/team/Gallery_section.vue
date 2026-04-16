<script setup lang="ts">
import teamImage from '@/assets/img/team_photo.jpg' // replace with your group photo
</script>

<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div class="w-full">
        <img
          :src="teamImage"
          alt="Team Photo"
          class="w-full h-[400px] md:h-[500px] object-cover border-4 border-gray-950 shadow-md"
        />
      </div>

      <!-- Content -->
      <div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-justify">
          Built by a Team That Understands Students
        </h2>

        <p class="text-gray-600 text-lg text-justify leading-relaxed mb-6">
          StudyYa is crafted by a passionate team dedicated to improving how students learn,
          organize, and succeed. We combine technology with real academic struggles to create a
          system that truly works in real life—not just in theory.
        </p>

        <p class="text-gray-600 text-lg text-justify leading-relaxed">
          From smart scheduling to AI-assisted learning, every feature is designed with one goal in
          mind: helping you stay productive without burning out.
        </p>
      </div>
    </div>
  </section>
</template>
