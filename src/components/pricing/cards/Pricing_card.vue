<script setup lang="ts">
export interface PricingProps {
  id: number
  plan: string
  price: string
  features: string[]
  popular?: boolean
}

const props = defineProps<PricingProps>()
</script>

<template>
  <div
    class="relative flex flex-col justify-between h-full p-10 bg-white border rounded-3xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    :class="props.popular ? 'border-brand ring-2 ring-brand/20 scale-105' : 'border-gray-200'"
  >
    <!-- Top Content -->
    <div>
      <!-- Badge -->
      <span
        v-if="props.popular"
        class="absolute top-5 right-5 text-xs font-semibold bg-sky-500 text-white px-3 py-1 rounded-full"
      >
        Most Popular
      </span>

      <!-- Plan -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">
        {{ props.plan }}
      </h3>

      <!-- Price -->
      <div class="flex items-end gap-2 mb-8">
        <span class="text-5xl font-extrabold text-gray-900"> ₱{{ props.price }} </span>
        <span class="text-sm text-gray-500 mb-1">/month</span>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-100 mb-6"></div>

      <!-- Features -->
      <ul class="space-y-4">
        <li
          v-for="item in props.features"
          :key="item"
          class="flex items-start gap-3 text-base text-gray-600"
        >
          <svg
            class="w-5 h-5 text-brand mt-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <!-- CTA -->
    <button
      class="mt-10 w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-200"
      :class="
        props.popular
          ? 'bg-slate-900 text-gray-100 hover:bg-brand-strong shadow-md'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-200'
      "
    >
      Choose plan
    </button>
  </div>
</template>
