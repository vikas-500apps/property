<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100"
  >
    <!-- Animated background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 5"
        :key="i"
        class="absolute rounded-full bg-primary/5 animate-float"
        :style="{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 15}s`,
        }"
      ></div>
    </div>

    <header class="relative z-10 bg-white/80 backdrop-blur-sm shadow-sm">
      <div class="container mx-auto px-4 py-4 flex items-center">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2">
            <Building class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold text-primary">Tenant Properties</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-grow flex items-center justify-center p-4 relative z-10">
      <div
        class="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
      >
        <div class="p-8 md:p-12">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <!-- Error content -->
            <div class="w-full md:w-5/5">
              <div
                class="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
              >
                Error {{ error.statusCode || 500 }}
              </div>

              <h1 class="text-3xl font-bold mb-4 text-gray-900">
                {{
                  error.statusCode === 404
                    ? "Page Not Found"
                    : "Something Unexpected Happened"
                }}
              </h1>

              <p class="text-gray-600 mb-6">
                {{
                  error.statusCode === 404
                    ? "We've searched all our properties, but couldn't find the page you're looking for."
                    : "Our team has been notified and is working to fix the issue. In the meantime, you can try again or return home."
                }}
              </p>

              <div class="space-y-3">
                <NuxtLink
                  to="/"
                  class="w-full px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-md flex items-center justify-center gap-2"
                >
                  <Icon name="heroicons:home" class="w-5 h-5" />
                  Back to Home
                </NuxtLink>
              </div>

              <div
                v-if="error.statusCode !== 404 && error.message"
                class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div class="flex items-start gap-3">
                  <Icon
                    name="heroicons:information-circle"
                    class="w-5 h-5 text-gray-400 mt-0.5"
                  />
                  <div>
                    <p class="text-sm font-medium text-gray-700 mb-1">
                      Error Details
                    </p>
                    <p class="text-sm text-gray-500 break-words">
                      {{ error.message }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom pattern -->
        <div
          class="h-2 bg-gradient-to-r from-primary/80 via-primary to-primary/80"
        ></div>
      </div>
    </main>

    <footer class="relative z-10 bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p>
          &copy; {{ new Date().getFullYear() }} PropertyHub. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Building } from "lucide-vue-next";

// Error is automatically injected into error pages
const props = defineProps({
  error: Object,
});
</script>

<style>
:root {
  --color-primary: #4f46e5;
  --color-primary-dark: #4338ca;
}

.text-primary {
  color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.border-primary {
  border-color: var(--color-primary);
}

.hover\:bg-primary:hover {
  background-color: var(--color-primary);
}

.hover\:bg-primary-dark:hover {
  background-color: var(--color-primary-dark);
}

.hover\:text-primary:hover {
  color: var(--color-primary);
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

.animate-float {
  animation: float ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.95);
  }
}
</style>
