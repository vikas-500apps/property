<script setup>
import { Building, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-gray-900 text-gray-200">
    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand and Social Links -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <Building class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold text-white">PropertyPortal</span>
          </div>
          <p class="text-gray-400 mb-6">
            Finding you the perfect place to call home with professional property management services.
          </p>
          <div class="flex gap-4">
            <NuxtLink to="https://www.facebook.com" class="text-gray-400 hover:text-white">
              <Facebook class="h-5 w-5" />
              <span class="sr-only">Facebook</span>
            </NuxtLink>
            <NuxtLink to="https://x.com" class="text-gray-400 hover:text-white">
              <Twitter class="h-5 w-5" />
              <span class="sr-only">Twitter</span>
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com" class="text-gray-400 hover:text-white">
              <Instagram class="h-5 w-5" />
              <span class="sr-only">Instagram</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/properties" class="text-gray-400 hover:text-white">Properties</NuxtLink></li>
            <li><NuxtLink to="/compare" class="text-gray-400 hover:text-white">Compare Properties</NuxtLink></li>
            <li><NuxtLink to="/tenant-portal" class="text-gray-400 hover:text-white">Tenant Portal</NuxtLink></li>
            <li><NuxtLink to="/apply" class="text-gray-400 hover:text-white">Apply for Rental</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-400 hover:text-white">About Us</NuxtLink></li>
          </ul>
        </div>

        <!-- Property Types -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Property Types</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/properties?type=apartment" class="text-gray-400 hover:text-white">Apartments</NuxtLink></li>
            <li><NuxtLink to="/properties?type=house" class="text-gray-400 hover:text-white">Houses</NuxtLink></li>
            <li><NuxtLink to="/properties?type=condo" class="text-gray-400 hover:text-white">Condos</NuxtLink></li>
            <li><NuxtLink to="/properties?type=townhouse" class="text-gray-400 hover:text-white">Townhouses</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <MapPin class="h-5 w-5 text-primary mt-0.5" />
              <span class="text-gray-400">
                123 Property Street
                <br />
                Newark, NJ 07102
              </span>
            </li>
            <li class="flex items-center gap-3">
              <Phone class="h-5 w-5 text-primary" />
              <span class="text-gray-400">(555) 123-4567</span>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="h-5 w-5 text-primary" />
              <span class="text-gray-400">info@propertyportal.com</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Copyright -->
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} PropertyPortal. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
