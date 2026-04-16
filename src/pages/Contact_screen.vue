<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    message: message.value,
  })

  // Reset form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="pt-32 pb-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-gray-600 max-w-xl mx-auto">
          Have questions, feedback, or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left: Info -->
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">Get in touch</h2>
            <p class="text-gray-600">
              Whether you're a student, contributor, or institution, we're open to conversations
              that help improve StudyYa.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-brand">mail</span>
              <span class="text-gray-700">studyya@email.com</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-brand">forum</span>
              <span class="text-gray-700">Join our Discord community</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-brand">photo_camera</span>
              <span class="text-gray-700">@studyya</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <form @submit.prevent="handleSubmit" class="bg-white p-8 shadow-sm space-y-6">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Name </label>
            <input
              v-model="name"
              type="text"
              required
              class="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Message </label>
            <textarea
              v-model="message"
              rows="4"
              required
              class="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full bg-brand text-white py-3 font-semibold hover:bg-brand-strong transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
