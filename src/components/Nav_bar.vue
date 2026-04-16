<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Get_app_button from './Get_app_button.vue'

defineProps(['logo'])

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50 // 👈 change threshold here
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// CONSTANT STYLES
const navLinkStyle = 'text-gray-200 hover:text-sky-600 font-medium transition'
const mobileNavLink = 'block text-gray-200 hover:text-sky-600 py-2 font-medium'
</script>

<template>
  <nav
    :class="[
      'fixed w-full shadow-md transition-all duration-300 z-50',
      scrolled ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-slate-900',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <img :src="logo" alt="StudyYa Logo" class="w-14" />
        </div>

        <!-- Center Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            to="/"
            v-bind:class="navLinkStyle"
            activeClass="text-sky-500"
            exactActiveClass="text-sky-500"
            >Home</RouterLink
          >
          <RouterLink
            to="/contribute"
            v-bind:class="navLinkStyle"
            activeClass="text-sky-500"
            exactActiveClass="text-sky-500"
            >Contribute</RouterLink
          >
          <RouterLink
            to="/team"
            v-bind:class="navLinkStyle"
            activeClass="text-sky-500"
            exactActiveClass="text-sky-500"
            >Team</RouterLink
          >
          <RouterLink
            to="/pricing"
            v-bind:class="navLinkStyle"
            activeClass="text-sky-500"
            exactActiveClass="text-sky-500"
            >Pricing</RouterLink
          >
          <RouterLink
            to="/contact"
            v-bind:class="navLinkStyle"
            activeClass="text-sky-500"
            exactActiveClass="text-sky-500"
            >Contact Us</RouterLink
          >

          <Get_app_button title="Get App"></Get_app_button>
        </div>

        <!-- Hamburger -->
        <div class="md:hidden flex items-center text-gray-100">
          <button @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2 z-50">
      <RouterLink to="/" class="text-center" v-bind:class="mobileNavLink">Home</RouterLink>
      <RouterLink
        to="/contribute"
        class="text-center"
        v-bind:class="mobileNavLink"
        activeClass="text-sky-500"
        exactActiveClass="text-sky-500"
        >Contribute</RouterLink
      >
      <RouterLink
        to="/team"
        class="text-center"
        v-bind:class="mobileNavLink"
        activeClass="text-sky-500"
        exactActiveClass="text-sky-500"
        >Team</RouterLink
      >
      <RouterLink
        to="/pricing"
        class="text-center"
        v-bind:class="mobileNavLink"
        activeClass="text-sky-500"
        exactActiveClass="text-sky-500"
        >Pricing</RouterLink
      >
      <RouterLink
        to="/contact"
        class="text-center"
        v-bind:class="mobileNavLink"
        activeClass="text-sky-500"
        exactActiveClass="text-sky-500"
        >Contact Us</RouterLink
      >

      <div class="flex justify-center">
        <Get_app_button title="Get App"></Get_app_button>
      </div>
    </div>
  </nav>
</template>
