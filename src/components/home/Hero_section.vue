<script setup lang="ts">
import Get_app_button from '../Get_app_button.vue'
import Outline_button from '../Outline_button.vue'
import Mobile_mockup from './Mobile_mockup.vue'
import googlePlayStore from '@/assets/icons/playstore.png'
import appStore from '@/assets/icons/appstore.png'
</script>

<template>
  <div class="overflow-x-hidden w-full">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto text-center">
        <div class="heading-texts">
          <h1
            class="text-gray-100 font-bold mt-6 mb-4 text-4xl sm:text-5xl md:text-6xl leading-tight"
          >
            Bring clarity into your student life
          </h1>
          <p class="text-gray-300 font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
            Enhance your time management and productivity through curated resources, smart
            scheduling, and gamified task management.
          </p>
        </div>

        <div class="button-group flex justify-center gap-4 mt-8 flex-wrap">
          <Get_app_button title="Get StudyYa App" />
          <Outline_button title="Why StudyYa?" />
        </div>
      </div>

      <div class="mt-16">
        <div class="flex justify-center items-center gap-4">
          <h1 class="text-gray-200 text-2xl font-bold text-center">Available at:</h1>
          <img :src="googlePlayStore" alt="" />
          <img :src="appStore" alt="" />
        </div>

        <div class="mt-48 relative flex justify-center w-full">
          <div
            class="flex flex-row gap-6 justify-center translate-y-[-18] md:translate-y-[-22] w-full"
          >
            <Mobile_mockup></Mobile_mockup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
