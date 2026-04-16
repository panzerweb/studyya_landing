<script setup lang="ts">
import Gallery_section from '@/components/team/Gallery_section.vue'
import Member_section from '@/components/team/Member_section.vue'
import Team_header_section from '@/components/team/Team_header_section.vue'
</script>

<template>
  <div class="pt-28 px-16">
    <Team_header_section></Team_header_section>
  </div>
  <div class="pt-8 pb-16 px-16">
    <Member_section></Member_section>
  </div>
  <div class="pt-8 pb-16 px-16">
    <Gallery_section></Gallery_section>
  </div>
</template>
