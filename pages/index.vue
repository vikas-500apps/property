<script setup>
import { definePageMeta } from "#imports";
import { Search, MapPin, Building } from "lucide-vue-next";
import FeaturedProperties from "@/components/FeatureProperty.vue";
import PropertyTypeCards from "@/components/PropertyTypesCard.vue";
import TestimonialSection from "@/components/Testimonial.vue";

// Define Page Meta (Optional: Helps with SEO, Middleware, etc.)
definePageMeta({
  layout: "default", // Define if you have a custom layout
});

// Sample Property Types
const propertyTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
];
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70 z-10" />
      <div
        class="relative h-[600px] bg-cover bg-center"
        style="background-image: url('/placeholder.svg?height=600&width=1200')"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Find Your Perfect Home</h1>
        <p class="text-xl text-white/90 max-w-2xl mb-8">
          Browse our selection of quality properties and find the perfect place to call home.
        </p>

        <!-- Search Bar -->
        <div class="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="col-span-1 md:col-span-2">
              <div class="relative">
                <MapPin class="absolute left-3 top-3 h-5 w-5 text-text-light" />
                <input type="text" placeholder="Location" class="pl-10 input w-full border rounded-md p-2" />
              </div>
            </div>
            <div>
              <select class="input w-full border rounded-md p-2">
                <option value="" disabled selected>Property Type</option>
                <option v-for="type in propertyTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
              </select>
            </div>
            <div>
              <button class="btn w-full flex items-center gap-2 bg-blue-600 text-white rounded-md p-2">
                <Search class="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 class="text-3xl font-bold mb-2">Featured Properties</h2>
            <p class="text-text-light">Explore our handpicked selection of premium properties</p>
          </div>
          <NuxtLink to="/properties">
            <button class="btn border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
              View All Properties
            </button>
          </NuxtLink>
        </div>
        <FeaturedProperties />
      </div>
    </section>

    <!-- Property Types -->
    <section class="py-16 px-4 md:px-6 lg:px-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-2 text-center">Browse by Property Type</h2>
        <p class="text-text-light text-center mb-12">Find the perfect property that fits your needs</p>
        <PropertyTypeCards />
      </div>
    </section>

    <!-- Tenant Portal Promo -->
    <section class="py-16 px-4 md:px-6 lg:px-8 bg-blue-50">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-4">Tenant Portal</h2>
            <p class="text-lg mb-6">
              Access our convenient tenant portal to pay rent, submit maintenance requests, and communicate with property
              management.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn bg-blue-600 text-white px-4 py-2 rounded-md">Login to Portal</button>
              <button class="btn border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">
                Learn More
              </button>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              <Building class="h-16 w-16 text-blue-500/30" />
            </div>
            <div class="space-y-4">
              <div class="h-8 bg-gray-100 rounded-md w-3/4"></div>
              <div class="h-4 bg-gray-100 rounded-md"></div>
              <div class="h-4 bg-gray-100 rounded-md"></div>
              <div class="h-10 bg-blue-100 rounded-md w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <TestimonialSection />

    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-6 lg:px-8 bg-blue-900 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Browse our available properties and start your application process today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50">Browse Properties</button>
          <button class="btn border border-white text-white px-4 py-2 rounded-md hover:bg-blue-800">Contact Us</button>
        </div>
      </div>
    </section>
  </div>
</template>
