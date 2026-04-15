<script setup lang="ts">
import Pricing_card from './cards/Pricing_card.vue'
import { type PricingProps } from './cards/Pricing_card.vue'

const pricingPlans: PricingProps[] = [
  {
    id: 1,
    plan: 'Free Tier',
    price: '0',
    features: ['Curated Interest-Based Resources', 'Smart Scheduler', '2 Limits of Protected Time'],
    popular: false,
  },
  {
    id: 2,
    plan: 'Premium Tier',
    price: '249',
    features: [
      'AI Assistant Tutor',
      'Class Schedule Upload',
      'Exclusive Class Module Upload',
      'Access Exclusive Study Packs',
      'Unlimited Protected Time',
    ],
    popular: true,
  },
  {
    id: 3,
    plan: 'Enterprise Tier',
    price: '1,200',
    features: ['All features unlocked'],
    popular: false,
  },
]
</script>

<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <h1 class="text-center font-bold text-5xl md:text-6xl mb-4">Pricing</h1>
      <p class="text-center text-gray-500 mb-12 max-w-xl mx-auto">
        Choose the plan that fits your needs. Simple, transparent pricing.
      </p>

      <!-- Cards -->
      <div class="grid gap-8 md:grid-cols-3">
        <Pricing_card
          v-for="pricing_plan in pricingPlans"
          :key="pricing_plan.id"
          v-bind="pricing_plan"
        />
      </div>
    </div>
  </section>
</template>
