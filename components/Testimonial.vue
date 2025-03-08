<script setup>
import { Star } from "lucide-vue-next";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tenant since 2021",
    content:
      "I've been renting with PropertyPortal for over 2 years and the experience has been fantastic. The online portal makes paying rent and submitting maintenance requests so easy!",
    rating: 5,
    avatar: "https://avatar.iran.liara.run/public/39",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Tenant since 2022",
    content:
      "The application process was smooth and the property manager was very responsive. I love the convenience of the tenant portal for all my needs.",
    rating: 5,
    avatar: "https://avatar.iran.liara.run/public/28",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Tenant since 2020",
    content:
      "Finding my apartment was so easy with their website. The comparison tool helped me find exactly what I was looking for, and maintenance requests are always handled promptly. I couldn't be happier!",
    rating: 4,
    avatar: "https://avatar.iran.liara.run/public/40",
  },
];
</script>

<template>
  <section class="py-16 px-4 md:px-6 lg:px-8">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-2 text-center">What Our Tenants Say</h2>
      <p class="text-text-light text-center mb-12">
        Hear from the people who call our properties home
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="h-full border rounded-lg p-6 shadow-sm bg-white"
        >
          <!-- Star Ratings -->
          <div class="flex mb-4" aria-label="Rating">
            <Star
              v-for="i in 5"
              :key="i"
              class="h-5 w-5"
              :class="
                i <= testimonial.rating
                  ? 'text-yellow-500 fill-yellow-500'
                  : 'text-gray-300'
              "
            />
          </div>

          <!-- Testimonial Content -->
          <p class="mb-6 text-text-light">"{{ testimonial.content }}"</p>

          <!-- User Info -->
          <div class="flex items-center">
            <NuxtImg
              :src="testimonial.avatar"
              :alt="`Avatar of ${testimonial.name}`"
              width="50"
              height="50"
              class="rounded-full mr-4"
              loading="lazy"
            />
            <div>
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm text-text-light">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
