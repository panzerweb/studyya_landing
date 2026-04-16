<script setup lang="ts">
import Channels_card, { type ChannelsProps } from './cards/Channels_card.vue'

const channels: ChannelsProps[] = [
  {
    name: 'Discord',
    icon: 'forum',
    desc: 'Join discussions and ask questions',
    buttonText: 'Join Discord',
  },
  // { name: 'Instagram', icon: 'photo_camera', desc: 'Follow updates and announcements' },
  {
    name: 'Email',
    icon: 'mail',
    desc: 'Reach out directly to the team',
    buttonText: 'Send us an Email',
  },
]
</script>

<template>
  <div class="my-4">
    <h1 class="text-4xl font-bold text-gray-100 text-center">Join our Team</h1>
  </div>
  <div class="my-4">
    <h1 class="text-2xl text-gray-300 text-center">Where can you contribute</h1>
  </div>
  <div class="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 mt-16">
    <div
      v-for="(channel, i) in channels"
      :key="i"
      class="p-8 bg-slate-950 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
    >
      <Channels_card
        :icon="channel.icon"
        :name="channel.name"
        :desc="channel.desc"
        :button-text="channel.buttonText"
      ></Channels_card>
    </div>
  </div>
</template>
