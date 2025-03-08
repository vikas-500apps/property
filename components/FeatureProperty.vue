<script setup>
import { ref } from "vue";
import { Bed, Bath, MapPin, Maximize } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

// Mock data for featured properties
const featuredProperties = ref([
  {
    id: 1,
    title: "Modern Downtown Apartment",
    address: "123 Main St, Newark, NJ",
    price: 1850,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/029/783/916/small/beautiful-cozy-family-country-house-in-summer-real-estate-concept-photo.jpg",
    isNew: true,
  },
  {
    id: 2,
    title: "Spacious Family Home",
    address: "456 Oak Ave, Newark, NJ",
    price: 2400,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    imageUrl: "https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg?from=mdr",
    isNew: false,
  },
  {
    id: 3,
    title: "Luxury Waterfront Condo",
    address: "789 River Rd, Newark, NJ",
    price: 2100,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1350,
    imageUrl: "https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433",
    isNew: true,
  },
]);

// Navigate to property details
const goToProperty = (id) => {
  router.push(`/properties/${id}`);
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="property in featuredProperties"
      :key="property.id"
      @click="goToProperty(property.id)"
      class="cursor-pointer overflow-hidden h-full hover:shadow-lg transition-shadow bg-white rounded-lg"
    >
      <div class="relative">
        <img
          :src="property.imageUrl || '/placeholder.svg'"
          :alt="property.title"
          class="w-full h-[200px] object-cover"
        />
        <button
          v-if="property.isNew"
          class="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-md"
        >
          New
        </button>
      </div>

      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-lg truncate">{{ property.title }}</h3>
          <p class="font-bold text-blue-600">${{ property.price }}/mo</p>
        </div>

        <div class="flex items-center text-gray-500 mb-4">
          <MapPin class="h-4 w-4 mr-1" />
          <p class="text-sm">{{ property.address }}</p>
        </div>

        <div class="grid grid-cols-3 gap-2 text-sm">
          <div class="flex items-center">
            <Bed class="h-4 w-4 mr-2 text-gray-500" />
            <span>{{ property.bedrooms }} Beds</span>
          </div>
          <div class="flex items-center">
            <Bath class="h-4 w-4 mr-2 text-gray-500" />
            <span>{{ property.bathrooms }} Baths</span>
          </div>
          <div class="flex items-center">
            <Maximize class="h-4 w-4 mr-2 text-gray-500" />
            <span>{{ property.sqft }} sqft</span>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 p-4 border-t text-center">
        <p class="text-sm text-gray-500">View Details</p>
      </div>
    </div>
  </div>
</template>
