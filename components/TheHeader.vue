<script setup>
import { ref } from "vue";
import { Building, Menu, X } from "lucide-vue-next";

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between px-4 md:px-6">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Building class="h-6 w-6 text-primary" />
          <span class="text-xl font-bold text-primary">Property Portal</span>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink to="/about" class="text-sm font-medium hover:text-primary">About Us</NuxtLink>
        <NuxtLink to="/properties" class="text-sm font-medium hover:text-primary">Properties</NuxtLink>
        <NuxtLink to="/compare" class="text-sm font-medium hover:text-primary">Compare</NuxtLink>
        <NuxtLink to="/contact" class="text-sm font-medium hover:text-primary">Contact</NuxtLink>
      </nav>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex items-center gap-4">
        <NuxtLink to="/tenant-portal">
          <button class="border px-4 py-2 rounded transition hover:bg-gray-100">Tenant Portal</button>
        </NuxtLink>
        <NuxtLink to="/apply">
          <button class="bg-primary text-white px-4 py-2 rounded transition hover:bg-primary/90">Apply Now</button>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" @click="mobileMenuOpen = !mobileMenuOpen">
        <X v-if="mobileMenuOpen" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
        <span class="sr-only">Toggle menu</span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      class="fixed inset-x-0 top-16 z-50 bg-background border-b md:hidden transition-all duration-300 ease-in-out transform"
      :class="mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'"
    >
      <div class="container py-4 flex flex-col gap-4">
        <NuxtLink to="/about" class="py-2 text-sm font-medium hover:text-primary" @click="mobileMenuOpen = false">
          About Us
        </NuxtLink>
        <NuxtLink to="/properties" class="py-2 text-sm font-medium hover:text-primary" @click="mobileMenuOpen = false">
          Properties
        </NuxtLink>
        <NuxtLink to="/compare" class="py-2 text-sm font-medium hover:text-primary" @click="mobileMenuOpen = false">
          Compare
        </NuxtLink>
        <NuxtLink to="/contact" class="py-2 text-sm font-medium hover:text-primary" @click="mobileMenuOpen = false">
          Contact
        </NuxtLink>
        <div class="flex flex-col gap-2 pt-2 border-t">
          <NuxtLink to="/tenant-portal">
            <button class="border px-4 py-2 w-full rounded transition hover:bg-gray-100">Tenant Portal</button>
          </NuxtLink>
          <NuxtLink to="/apply">
            <button class="bg-primary text-white px-4 py-2 w-full rounded transition hover:bg-primary/90">Apply Now</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
