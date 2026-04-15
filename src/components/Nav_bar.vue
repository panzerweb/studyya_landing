<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Get_app_button from './Get_app_button.vue'

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
      scrolled ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold text-gray-100">LOGO</span>
        </div>

        <!-- Center Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/" v-bind:class="navLinkStyle">Home</RouterLink>
          <RouterLink to="/about" v-bind:class="navLinkStyle">About</RouterLink>
          <RouterLink to="/team" v-bind:class="navLinkStyle">Team</RouterLink>
          <RouterLink to="/pricing" v-bind:class="navLinkStyle">Pricing</RouterLink>
          <RouterLink to="/contact" v-bind:class="navLinkStyle">Contact Us</RouterLink>

          <Get_app_button title="Get App"></Get_app_button>
        </div>

        <!-- Hamburger -->
        <div class="md:hidden flex items-center">
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
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <RouterLink to="/" v-bind:class="mobileNavLink" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/about" v-bind:class="mobileNavLink" @click="toggleMenu">About</RouterLink>
      <RouterLink to="/team" v-bind:class="mobileNavLink" @click="toggleMenu">Team</RouterLink>
      <RouterLink to="/pricing" v-bind:class="mobileNavLink">Pricing</RouterLink>
      <RouterLink to="/contact" v-bind:class="mobileNavLink" @click="toggleMenu"
        >Contact Us</RouterLink
      >

      <button class="w-full bg-sky-600 text-white py-2 rounded-xl mt-2 cursor-pointer">
        Get StudyYa free
      </button>
    </div>
  </nav>
</template>
