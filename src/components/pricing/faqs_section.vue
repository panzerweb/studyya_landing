<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Is StudyYa free?',
    answer:
      'Yes, StudyYa is completely free. However, StudyYa also offers a monthly subscription for those who want a huge variety of features and to maximize the true power of StudyYa.',
  },
  {
    question: 'What is protected time and why should I care?',
    answer:
      "StudyYa's smart scheduling develops schedules based on subtasks within a goal or project. Protected time ensures certain timeframes are never touched by the system, allowing uninterrupted focus.",
  },
  {
    question: 'Can I really upload my class modules?',
    answer:
      'Yes! With the premium plan, you can upload your class modules and StudyYa will generate an interface with resources and study materials based on them.',
  },
  {
    question: 'How do I apply in the Enterprise Plan?',
    answer:
      'The Enterprise Plan is for institutions like colleges and universities. You need to submit documents such as government IDs and business permits. The team will review and notify you after evaluation.',
  },
  {
    question: 'If a school applies, does that affect the students?',
    answer:
      'Yes. Schools can provide student accounts. Once activated, students can access full features depending on the school’s permissions.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Absolutely. StudyYa follows strict ethical standards and ensures your data is never misused. It is only used to improve the application and enhance your experience.',
  },
]

// Track open index
const openIndex = ref<number | null>(null)

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <!-- Title -->
      <h2 class="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p class="text-center text-gray-500 mb-12">Everything you need to know about StudyYa</p>

      <!-- FAQ List -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
        >
          <!-- Question -->
          <button
            @click="toggleFAQ(index)"
            class="w-full flex justify-between items-center text-left p-6 font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            <span>{{ faq.question }}</span>

            <!-- Icon -->
            <svg
              class="w-5 h-5 transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <!-- Answer -->
          <div v-show="openIndex === index" class="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
