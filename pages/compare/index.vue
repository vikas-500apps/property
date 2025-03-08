<template>
  <div class="container mx-auto py-8 px-4">
    <Link href="/properties" class="flex items-center text-primary mb-6">
      <ChevronLeft class="h-4 w-4 mr-1" />
      Back to Properties
    </Link>

    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Compare Properties</h1>
      <p class="text-text-light">
        Compare features and amenities to find your perfect home
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="w-1/4 p-4 text-left bg-muted/50 border-b">Property</th>

            <th
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center bg-muted/50 border-b"
            >
              <div class="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  class="absolute top-0 right-0"
                >
                  <X class="h-4 w-4" />
                  <span class="sr-only">Remove from comparison</span>
                </Button>
                <div class="mb-3">
                  <img
                    :src="property.imageUrl || '/placeholder.svg'"
                    :alt="property.title"
                    width="200"
                    height="120"
                    class="w-full h-[120px] object-cover rounded-md mx-auto"
                  />
                </div>
                <h3 class="font-semibold text-base">
                  {{ property.title }}
                </h3>
                <p class="text-sm text-text-light">
                  {{ property.address }}
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-4 border-b font-medium">Price</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              <span class="font-semibold text-primary"
                >${{ property.price }}</span
              >/month
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Bedrooms</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              <div class="flex items-center justify-center">
                <Bed class="h-4 w-4 mr-2 text-text-light" />
                {{ property.bedrooms }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Bathrooms</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              <div class="flex items-center justify-center">
                <Bath class="h-4 w-4 mr-2 text-text-light" />
                {{ property.bathrooms }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Square Feet</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              <div class="flex items-center justify-center">
                <Maximize class="h-4 w-4 mr-2 text-text-light" />
                {{ property.sqft }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Availability</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              {{ property.availability }}
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Pet Friendly</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              <Check
                v-if="property.petFriendly"
                class="h-5 w-5 text-green-500 mx-auto"
              />
              <X v-else class="h-5 w-5 text-red-500 mx-auto" />
            </td>
          </tr>

          <tr>
            <td class="p-4 border-b font-medium">Parking</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              {{ property.parking }}
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Utilities</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              {{ property.utilities }}
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b font-medium">Features</td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center border-b"
            >
              <ul class="text-left">
                <li
                  v-for="(feature, index) in property.features"
                  :key="index"
                  class="flex items-center mb-1"
                >
                  <Check class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="p-4"></td>
            <td
              v-for="property in properties"
              :key="property.id"
              class="p-4 text-center"
            >
              <div class="flex flex-col gap-2">
                <NuxtLink href="/properties/${property.id}">
                  <Button class="w-full">View Details</Button>
                </NuxtLink>
                <NuxtLink href="/apply?property=${property.id}">
                  <Button variant="outline" class="w-full"> Apply Now </Button>
                </NuxtLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-8 text-center">
      <p class="text-text-light mb-4">Want to compare more properties?</p>
      <NuxtLink href="/properties">
        <Button>Browse More Properties</Button>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { Bath, Bed, Check, ChevronLeft, Maximize, X } from "lucide-vue-next";
import { ref } from "vue";
import Button from "~/components/ui/Button.vue";

const properties = ref([
  {
    id: 1,
    title: "Modern Downtown Apartment",
    address: "123 Main St, Newark, NJ",
    price: 1850,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    features: [
      "In-unit Washer/Dryer",
      "Stainless Steel Appliances",
      "Hardwood Floors",
      "Central AC",
      "Fitness Center",
    ],
    availability: "Available Now",
    petFriendly: true,
    parking: "Underground ($150/mo)",
    utilities: "Water included",
  },

  {
    id: 1,
    title: "Modern Downtown Apartment",
    address: "123 Main St, Newark, NJ",
    price: 1850,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    features: [
      "In-unit Washer/Dryer",
      "Stainless Steel Appliances",
      "Hardwood Floors",
      "Central AC",
      "Fitness Center",
    ],
    availability: "Available Now",
    petFriendly: true,
    parking: "Underground ($150/mo)",
    utilities: "Water included",
  },
]);
</script>