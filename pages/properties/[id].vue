<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Heart,
  Share2,
  Bath,
  Bed,
  Calendar,
  Check,
  ChevronLeft,
  Home,
  Info,
  Maximize,
  MapPin,
} from "lucide-vue-next";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Button from "~/components/ui/Button.vue";
import Card from "~/components/ui/Card.vue";

const route = useRoute();
const router = useRouter();

const property = ref({
  id: 1,
  title: "Modern Downtown Apartment",
  address: "123 Main St, Newark, NJ 07102",
  price: 1850,
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1200,
  description:
    "This beautiful modern apartment is located in the heart of downtown. It features hardwood floors, stainless steel appliances, and a spacious open floor plan. The building offers amenities including a fitness center, rooftop terrace, and 24-hour security.",
  features: [
    "In-unit Washer/Dryer",
    "Stainless Steel Appliances",
    "Hardwood Floors",
    "Central Air Conditioning",
    "High Ceilings",
    "Walk-in Closets",
    "Fitness Center",
    "Rooftop Terrace",
    "Pet Friendly",
    "24-hour Security",
  ],
  images: [
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://img.freepik.com/premium-photo/apartment-house-home-residential-building-complex-with-gate-concept_250132-4865.jpg",
    "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  availability: "Available Now",
  yearBuilt: 2018,
  petPolicy: "Cats and dogs welcome with deposit",
  parkingInfo: "Underground parking available for $150/month",
  nearbyAmenities: [
    "Grocery store within 0.2 miles",
    "Public transportation within 0.1 miles",
    "Parks within 0.5 miles",
    "Restaurants within 0.3 miles",
  ],
});

const similarProperties = ref([
  {
    id: 2,
    title: "Luxury Condo in Downtown",
    address: "456 Elm St, Newark, NJ 07102",
    price: 2200,
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
  },
  {
    id: 3,
    title: "Spacious Suburban Home",
    address: "789 Oak St, Newark, NJ 07102",
    price: 2500,
    image:
      "https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg",
  },
  {
    id: 4,
    title: "Cozy Loft in Arts District",
    address: "321 Pine St, Newark, NJ 07102",
    price: 1800,
    image:
      "https://img.freepik.com/free-photo/painted-ladies-san-francisco-usa_53876-63463.jpg",
  },
]);

const filteredSimilarProperties = computed(() => {
  return similarProperties.value.filter(
    (property) => property.id !== Number(route.params.id)
  );
});
const goBack = () => {
  router.push("/properties");
};
</script>

<template>
  <div class="container mx-auto py-8 px-4">
    <!-- Back Button -->
    <div class="mb-6">
      <button @click="goBack" class="flex items-center text-primary mb-4">
        <ChevronLeft class="h-4 w-4 mr-1" />
        Back to Properties
      </button>

      <!-- Title & Actions -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 class="text-2xl md:text-3xl font-bold mb-1">
            {{ property.title }}
          </h1>
          <div class="flex items-center text-text-light">
            <MapPin class="h-4 w-4 mr-1" />
            <p>{{ property.address }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="btn btn-outline">
            <Heart class="h-5 w-5" />
          </button>
          <button class="btn btn-outline">
            <Share2 class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Property Images -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="md:col-span-2">
        <img
          :src="property.images[0] || '/placeholder.svg'"
          :alt="property.title"
          class="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
      <img
        v-for="(image, index) in property.images.slice(1, 4)"
        :key="index"
        :src="image || '/placeholder.svg'"
        :alt="`${property.title} - Image ${index + 2}`"
        class="w-full h-[200px] object-cover rounded-lg"
      />
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <div class="w-full lg:w-2/3">
        <!-- Dynamic Tabs Component -->
        <TabGroup>
          <!-- Tab List -->
          <TabList
            class="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 p-1 text-gray-600"
          >
            <Tab v-slot="{ selected }">
              <button
                :class="[
                  selected
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'bg-transparent text-gray-600',
                ]"
                class="px-3 py-1.5 text-sm font-medium"
              >
                Details
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                :class="[
                  selected
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'bg-transparent text-gray-600',
                ]"
                class="px-3 py-1.5 text-sm font-medium"
              >
                Features
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                :class="[
                  selected
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'bg-transparent text-gray-600',
                ]"
                class="px-3 py-1.5 text-sm font-medium"
              >
                Location
              </button>
            </Tab>
          </TabList>

          <!-- Tab Panels -->
          <TabPanels>
            <!-- Details Tab -->
            <TabPanel>
              <div class="space-y-6 mt-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <Bed class="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p class="text-sm text-text-light">Bedrooms</p>
                    <p class="font-semibold">{{ property.bedrooms }}</p>
                  </div>
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <Bath class="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p class="text-sm text-text-light">Bathrooms</p>
                    <p class="font-semibold">{{ property.bathrooms }}</p>
                  </div>
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <Maximize class="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p class="text-sm text-text-light">Square Feet</p>
                    <p class="font-semibold">{{ property.sqft }}</p>
                  </div>
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <Home class="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p class="text-sm text-text-light">Year Built</p>
                    <p class="font-semibold">{{ property.yearBuilt }}</p>
                  </div>
                </div>

                <!-- Description -->
                <div>
                  <h2 class="text-xl font-semibold mb-3">Description</h2>
                  <p class="text-text-light">{{ property.description }}</p>
                </div>

                <div>
                  <h2 class="text-xl font-semibold mb-3">
                    Property Information
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-2">
                      <Calendar class="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p class="font-medium">Availability</p>
                        <p class="text-text-light">
                          {{ property.availability }}
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-2">
                      <Info class="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p class="font-medium">Pet Policy</p>
                        <p class="text-text-light">{{ property.petPolicy }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <!-- Features Tab -->
            <TabPanel>
              <div>
                <h2 class="text-xl font-semibold mt-4 mb-4">
                  Property Features
                </h2>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  <li
                    v-for="(feature, index) in property.features"
                    :key="index"
                    class="flex items-center gap-2"
                  >
                    <Check class="h-5 w-5 text-primary" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="text-xl font-semibold mt-4 mb-4">
                  Nearby Amenities
                </h2>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  <li
                    v-for="(amenity, index) in property.nearbyAmenities"
                    :key="index"
                    class="flex items-center gap-2"
                  >
                    <Check class="h-5 w-5 text-primary" />
                    <span>{{ amenity }}</span>
                  </li>
                </ul>
              </div>
            </TabPanel>

            <!-- Location Tab -->
            <TabPanel>
              <div>
                <h2 class="text-xl font-semibold mt-4 mb-4">Location</h2>
                <div
                  class="bg-muted h-[400px] rounded-lg flex items-center justify-center mb-4"
                >
                  <iframe
                    :src="`https://www.google.com/maps?q=${encodeURIComponent(
                      property.address
                    )}&output=embed`"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen
                  ></iframe>
                  <span class="sr-only">Map placeholder</span>
                </div>
                <p class="text-text-light mb-4">
                  Located at {{ property.address }}, this property offers
                  convenient access to public transportation, shopping, dining,
                  and entertainment.
                </p>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      <div class="w-full lg:w-1/3">
        <Card class="sticky top-20">
          <template #contentBody>
            <div class="mb-6">
              <p class="text-3xl font-bold text-primary">
                ${{ property.price }}
                <span class="text-base font-normal text-text-light"
                  >/month</span
                >
              </p>
              <div class="flex items-center gap-2 mt-2">
                <Bath class="h-4 w-4 text-text-light" />
                <span>{{ property.bathrooms }} ba</span>
                <span class="text-text-light">|</span>
                <Bed class="h-4 w-4 text-text-light" />
                <span>{{ property.bedrooms }} bd</span>
                <span class="text-text-light">|</span>
                <Maximize class="h-4 w-4 text-text-light" />
                <span>{{ property.sqft }} sqft</span>
              </div>
            </div>

            <div class="space-y-4">
              <Button class="w-full">Apply Now</Button>
              <Button variant="outline" class="w-full">Schedule a Tour</Button>
              <Button variant="outline" class="w-full"
                >Request Information</Button
              >
              <Button variant="outline" class="w-full">Add to Compare</Button>
            </div>

            <div class="mt-6 pt-6 border-t">
              <h3 class="font-semibold mb-2">Contact Property</h3>
              <p class="text-text-light mb-4">
                Have questions about this property? Contact our leasing team for
                more information.
              </p>
              <Button variant="outline" class="w-full"
                >Contact Leasing Office</Button
              >
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Similar Properties</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(property, index) in filteredSimilarProperties"
          :key="index"
          class="cursor-pointer overflow-hidden h-full hover:shadow-lg transition-shadow bg-white rounded-lg"
        >
          <NuxtLink :to="`/properties/${property.id}`">
            <div class="relative">
              <img
                :src="property.image || '/placeholder.svg'"
                :alt="`${property.title} - Image ${index + 1}`"
                class="w-full h-[200px] object-cover"
              />
            </div>
          </NuxtLink>

          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold">Similar Property {{ property.id }}</h3>
              <p class="font-bold text-blue-600">
                ${{ 1500 + property.id * 100 }}/mo
              </p>
            </div>

            <div class="flex items-center text-gray-500 mb-4">
              <MapPin class="h-4 w-4 mr-1" />
              <p class="text-sm">{{ 100 + property.id }} Oak St, Newark, NJ</p>
            </div>

            <div class="grid grid-cols-3 gap-2 text-sm">
              <div class="flex items-center">
                <Bed class="h-4 w-4 mr-2 text-gray-500" />
                <span>{{ property.id }} Beds</span>
              </div>
              <div class="flex items-center">
                <Bath class="h-4 w-4 mr-2 text-gray-500" />
                <span>{{ property.id - 0.5 }} Baths</span>
              </div>
              <div class="flex items-center">
                <Maximize class="h-4 w-4 mr-2 text-gray-500" />
                <span>{{ 800 + property.id * 100 }} sqft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
