<script setup lang="ts"></script>

<template>
  <section class="pt-32 pb-20 px-6 bg-white">
    <div class="max-w-5xl mx-auto text-center">
      <div class="w-full text-center bg-white py-16 px-6">
        <div class="max-w-3xl mx-auto">
          <!-- Title -->
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your future matters — protect it with how you learn today.
          </h2>

          <!-- Subtitle -->
          <p class="text-gray-600 text-base md:text-lg mb-10 leading-relaxed">
            Stay up to date and move work forward with StudyYa on iOS & Android. Download the app
            today and start building better study habits without burnout.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <!-- Apple -->
            <a
              href="#"
              class="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition shadow-sm"
            >
              <!-- Apple Icon -->
              <svg class="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                <path
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                />
              </svg>

              <div class="text-left">
                <div class="text-xs text-gray-300">Download on the</div>
                <div class="text-sm font-semibold">App Store</div>
              </div>
            </a>

            <!-- Google Play -->
            <a
              href="#"
              class="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition shadow-sm"
            >
              <!-- Play Icon -->
              <svg class="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
                <path
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                />
              </svg>

              <div class="text-left">
                <div class="text-xs text-gray-300">Get it on</div>
                <div class="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Optional Section: QR -->
      <div class="grid md:grid-cols-2 gap-12 items-center text-left">
        <!-- Left: QR -->
        <div class="bg-gray-50 p-10 text-center">
          <div class="w-40 h-40 mx-auto bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500 text-sm">QR Code</span>
          </div>
          <p class="text-gray-600 mt-4">
            Scan to download the app instantly on your mobile device.
          </p>
        </div>

        <!-- Right: Features -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Why Download StudyYa?</h2>

          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand">check_circle</span>
              Smart AI-powered study assistant
            </li>

            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand">check_circle</span>
              Built-in scheduling system with protected time
            </li>

            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand">check_circle</span>
              Personalized learning experience
            </li>

            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand">check_circle</span>
              Designed to prevent burnout and improve focus
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
