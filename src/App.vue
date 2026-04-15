<script setup lang="ts">
import Footer_section from './components/Footer_section.vue'
import Nav_bar from './components/Nav_bar.vue'
// import logoSolid from '@/assets/logo/logo_solid.png'
import logoTransparent from '@/assets/logo/logo_transparent.png'
</script>

<template>
  <Nav_bar v-bind:logo="logoTransparent"></Nav_bar>
  <main>
    <RouterView />
  </main>
  <Footer_section v-bind:logo="logoTransparent"></Footer_section>
</template>

<style scoped></style>
