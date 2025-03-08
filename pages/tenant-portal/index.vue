<template>
  <div class="container mx-auto py-12 px-4">
    <div class="flex flex-col items-center justify-center max-w-md mx-auto">
      <div class="flex items-center gap-2 mb-8">
        <Building class="h-8 w-8 text-indigo-600" />
        <h1 class="text-2xl font-bold">Tenant Properties</h1>
      </div>

      <div class="w-full">
        <!-- Tabs -->
        <div class="w-full mb-8">
          <div class="grid w-full grid-cols-2 bg-blue-50 p-1 text-gray-600">
            <button
              @click="activeTab = 'login'"
              :class="[
                'px-3 py-1.5 text-sm font-medium',
                activeTab === 'login'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'bg-blue-50 text-gray-600',
              ]"
            >
              Login
            </button>
            <button
              @click="activeTab = 'register'"
              :class="[
                'px-3 py-1.5 text-sm font-medium',
                activeTab === 'register'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'bg-blue-50 text-gray-600',
              ]"
            >
              Register
            </button>
          </div>
        </div>

        <!-- Login Tab Content -->
        <div v-if="activeTab === 'login'" class="w-full">
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-6">
              <h2 class="text-xl font-semibold">Login to your account</h2>
              <p class="text-gray-500 mt-1">
                Access your tenant properties to pay rent, submit maintenance
                requests, and more.
              </p>
            </div>
            <div class="p-6 pt-0">
              <form @submit.prevent="handleLogin">
                <div class="grid gap-4">
                  <div class="grid gap-2">
                    <label for="email" class="text-sm font-medium">Email</label>
                    <div class="relative">
                      <Mail
                        class="absolute left-3 top-3 h-4 w-4 text-gray-400"
                      />
                      <input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        class="w-full pl-9 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <div class="flex items-center justify-between">
                      <label for="password" class="text-sm font-medium"
                        >Password</label
                      >
                      <NuxtLink
                        to="/forgot-password"
                        class="text-sm text-indigo-600 hover:underline"
                      >
                        Forgot password?
                      </NuxtLink>
                    </div>
                    <div class="relative">
                      <Lock
                        class="absolute left-3 top-3 h-4 w-4 text-gray-400"
                      />
                      <input
                        id="password"
                        type="password"
                        placeholder="enter your password"
                        class="w-full pl-9 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                  type="submit"
                  :disabled="isLoading"
                >
                  {{ isLoading ? "Logging in..." : "Login" }}
                </button>
              </form>
            </div>
            <div
              class="p-6 pt-0 border-t flex flex-col items-center justify-center"
            >
              <p class="text-sm text-gray-500 mt-2">
                Don't have an account? Contact your property manager for
                registration details.
              </p>
            </div>
          </div>
        </div>

        <!-- Register Tab Content -->
        <div v-if="activeTab === 'register'" class="w-full">
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-6">
              <h2 class="text-xl font-semibold">Create an account</h2>
              <p class="text-gray-500 mt-1">
                Register for the tenant properties using the information provided by
                your property manager.
              </p>
            </div>
            <div class="p-6 pt-0">
              <form @submit.prevent="handleRegister">
                <div class="grid gap-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="grid gap-2">
                      <label for="first-name" class="text-sm font-medium"
                        >First name</label
                      >
                      <input
                        id="first-name"
                        placeholder="first name"
                        class="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div class="grid gap-2">
                      <label for="last-name" class="text-sm font-medium"
                        >Last name</label
                      >
                      <input
                        id="last-name"
                        class="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="last name"
                        required
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <label for="register-email" class="text-sm font-medium"
                      >Email</label
                    >
                    <div class="relative">
                      <Mail
                        class="absolute left-3 top-3 h-4 w-4 text-gray-400"
                      />
                      <input
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        class="w-full pl-9 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <label for="property-id" class="text-sm font-medium"
                      >Property ID</label
                    >
                    <input
                      id="property-id"
                      placeholder="property-id"
                      class="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <p class="text-sm text-gray-500">
                      This is the unique ID provided by your property manager.
                    </p>
                  </div>
                  <div class="grid gap-2">
                    <label for="new-password" class="text-sm font-medium"
                      >Password</label
                    >
                    <div class="relative">
                      <Lock
                        class="absolute left-3 top-3 h-4 w-4 text-gray-400"
                      />
                      <input
                        id="new-password"
                        type="password"
                        placeholder="enter your password"
                        class="w-full pl-9 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  <div class="grid gap-2">
                    <label for="confirm-password" class="text-sm font-medium"
                      >Confirm Password</label
                    >
                    <div class="relative">
                      <Lock
                        class="absolute left-3 top-3 h-4 w-4 text-gray-400"
                      />
                      <input
                        id="confirm-password"
                        type="password"
                        placeholder="confirm your password"
                        class="w-full pl-9 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
            <div
              class="p-6 pt-0 border-t flex flex-col items-center justify-center"
            >
              <p class="text-sm text-gray-500 mt-2">
                Already have an account?
                <a
                  href="#"
                  class="text-indigo-600 hover:underline ml-1"
                  @click.prevent="activeTab = 'login'"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Building, Lock, Mail } from "lucide-vue-next";

const activeTab = ref("login");
const isLoading = ref(false);

const handleLogin = () => {
  isLoading.value = true;
  // Simulate login process
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
};

const handleRegister = () => {
  // Handle registration logic here
  console.log("Registration submitted");
};
</script>

<style scoped>
/* Add any additional custom styles here */
input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
