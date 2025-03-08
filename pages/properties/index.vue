<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row">
        <!-- Filters Sidebar -->
        <div class="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
          <div class="bg-white p-6 border border-gray-200 rounded-md">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-semibold">Filters</h2>
              <button
                @click="resetFilters"
                class="text-indigo-600 text-sm hover:text-indigo-800"
              >
                Reset
              </button>
            </div>

            <!-- Location Filter -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Location</label
              >
              <div class="relative">
                <MapPinIcon
                  class="absolute left-3 top-3 h-5 w-5 text-gray-400"
                />
                <input
                  type="text"
                  v-model="filters.location"
                  placeholder="City, State"
                  class="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <!-- Property Type Filter -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Property Type</label
              >
              <div class="relative">
                <select
                  v-model="filters.propertyType"
                  class="w-full border border-gray-300 rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="">Any Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
            </div>

            <!-- Price Range Filter -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-medium text-gray-700"
                  >Price Range</label
                >
                <span class="text-sm text-gray-500"
                  >${{ filters.priceRange[0] }} - ${{
                    filters.priceRange[1]
                  }}</span
                >
              </div>
              <VueformSlider
                v-model="filters.priceRange"
                :min="500"
                :max="3000"
                :step="100"
                :tooltips="false"
                class="w-full"
              />
            </div>

            <!-- Bedrooms Filter -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Bedrooms</label
              >
              <div class="grid grid-cols-6 gap-2">
                <button
                  v-for="option in ['Any', '1', '2', '3', '4', '5+']"
                  :key="option"
                  @click="filters.bedrooms = option"
                  :class="[
                    'py-1 text-sm border rounded-md cursor-pointer',
                    filters.bedrooms === option
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-500',
                  ]"
                >
                  {{ option }}
                </button>
              </div>
            </div>

            <!-- Bathrooms Filter -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Bathrooms</label
              >
              <div class="grid grid-cols-5 gap-2">
                <button
                  v-for="option in ['Any', '1', '2', '3', '4+']"
                  :key="option"
                  @click="filters.bathrooms = option"
                  :class="[
                    'py-1 text-sm border rounded-md',
                    filters.bathrooms === option
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-500',
                  ]"
                >
                  {{ option }}
                </button>
              </div>
            </div>

            <!-- Apply Filters Button -->
            <button
              @click="applyFilters"
              class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
            >
              <MagnifyingGlassIcon class="h-5 w-5 mr-2" />
              Apply Filters
            </button>
          </div>
        </div>

        <!-- Properties List -->
        <div class="w-full md:w-3/4">
          <div class="mb-6">
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 class="text-2xl font-bold text-gray-900">
                  Available Properties
                </h2>
                <p class="text-gray-600">
                  Showing {{ filteredProperties.length }} properties
                </p>
              </div>
              <div class="flex items-center space-x-2 mt-4 md:mt-0">
                <div class="relative">
                  <select
                    v-model="sortOption"
                    class="pl-3 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Property Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="property in filteredProperties"
              :key="property.id"
              class="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <div class="relative">
                <img
                  :src="property.image"
                  :alt="property.name"
                  class="w-full h-48 object-cover"
                />
                <div
                  v-if="property.isNew"
                  class="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded"
                >
                  New
                </div>
                <button
                  @click="toggleFavorite(property.id)"
                  class="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md"
                >
                  <HeartIcon
                    :class="[
                      'h-6 w-6',
                      property.isFavorite ? 'text-red-500' : 'text-gray-400',
                    ]"
                  />
                </button>
              </div>

              <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ property.name }}
                  </h3>
                  <p class="text-indigo-600 font-bold">
                    ${{ property.price }}/mo
                  </p>
                </div>

                <div class="flex items-center text-gray-600 mb-4">
                  <MapPinIcon class="h-4 w-4 mr-1" />
                  <p class="text-sm">{{ property.address }}</p>
                </div>

                <div class="grid grid-cols-3 gap-2 mb-4">
                  <div class="flex items-center">
                    <BedDoubleIcon class="h-5 w-5 text-gray-500 mr-2" />
                    <span class="text-sm">{{ property.beds }} Beds</span>
                  </div>
                  <div class="flex items-center">
                    <ShowerHeadIcon class="h-5 w-5 text-gray-500 mr-2" />
                    <span class="text-sm">{{ property.baths }} Baths</span>
                  </div>
                  <div class="flex items-center">
                    <SquareIcon class="h-5 w-5 text-gray-500 mr-2" />
                    <span class="text-sm">{{ property.sqft }} sqft</span>
                  </div>
                </div>

                <div class="flex space-x-2">
                  <button
                    @click="viewDetails(property.id)"
                    class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm"
                  >
                    View Details
                  </button>
                  <button
                    @click="addToCompare(property.id)"
                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm"
                  >
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  HeartIcon,
  BedDoubleIcon,
  ShowerHeadIcon,
  SquareIcon,
} from "lucide-vue-next";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import VueformSlider from "@vueform/slider";
import "@vueform/slider/themes/default.css"; // Import the default theme

// Filter state
const filters = ref({
  location: "Newark, NJ",
  propertyType: "",
  priceRange: [500, 3000],
  bedrooms: "Any",
  bathrooms: "Any",
});

// const showMoreFilters = ref(false);
const sortOption = ref("price-low");

// Properties data
const properties = ref([
  {
    id: 1,
    name: "Modern Downtown Apartment",
    price: 1850,
    address: "123 Main St, Newark, NJ",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg",
    isNew: true,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Spacious Family Home",
    price: 2400,
    address: "456 Oak Ave, Newark, NJ",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    image: "https://img.freepik.com/premium-photo/apartment-house-home-residential-building-complex-with-gate-concept_250132-4865.jpg",
    isNew: false,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Luxury Waterfront Condo",
    price: 2100,
    address: "789 River Rd, Newark, NJ",
    beds: 2,
    baths: 2,
    sqft: 1350,
    image: "https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg",
    isNew: true,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Cozy Studio Apartment",
    price: 1200,
    address: "101 Pine St, Newark, NJ",
    beds: 0,
    baths: 1,
    sqft: 550,
    image: "https://img.freepik.com/premium-photo/large-house-with-large-front-door-large-tree-yard_1310085-3260.jpg",
    isNew: false,
    isFavorite: false,
  },
]);

// Computed properties
const filteredProperties = computed(() => {
  let result = [...properties.value];

  // Filter by location
  if (filters.value.location) {
    result = result.filter((p) => p.address.includes(filters.value.location));
  }

  // Filter by property type
  if (filters.value.propertyType) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(filters.value.propertyType)
    );
  }

  // Filter by price range
  result = result.filter(
    (p) =>
      p.price >= filters.value.priceRange[0] &&
      p.price <= filters.value.priceRange[1]
  );

  // Filter by bedrooms
  if (filters.value.bedrooms !== "Any") {
    const bedroomValue =
      filters.value.bedrooms === "5+" ? 5 : parseInt(filters.value.bedrooms);

    result = result.filter((p) =>
      filters.value.bedrooms === "5+"
        ? p.beds >= bedroomValue
        : p.beds === bedroomValue
    );
  }

  // Filter by bathrooms
  if (filters.value.bathrooms !== "Any") {
    const bathroomValue =
      filters.value.bathrooms === "4+" ? 4 : parseInt(filters.value.bathrooms);

    result = result.filter((p) =>
      filters.value.bathrooms === "4+"
        ? p.baths >= bathroomValue
        : p.baths === bathroomValue
    );
  }

  // Sort results
  if (sortOption.value === "price-low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === "price-high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sortOption.value === "newest") {
    result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return result;
});

// Methods
// const toggleMoreFilters = () => {
//   showMoreFilters.value = !showMoreFilters.value;
// };

const resetFilters = () => {
  filters.value = {
    location: "Newark, NJ",
    propertyType: "",
    priceRange: [500, 3000],
    bedrooms: "Any",
    bathrooms: "Any",
  };
};

const applyFilters = () => {
  // In a real app, this might trigger an API call
  console.log("Applying filters:", filters.value);
};

const toggleFavorite = (id) => {
  const property = properties.value.find((p) => p.id === id);
  if (property) {
    property.isFavorite = !property.isFavorite;
  }
};

const viewDetails = (id) => {
  // Navigate to property details page
  navigateTo(`/properties/${id}`);
};

const addToCompare = (id) => {
  // Add to compare list (would be implemented with state management in a real app)
  console.log("Added to compare:", id);
};

// Lifecycle hooks
onMounted(() => {
  // In a real app, you might fetch properties from an API here
  console.log("Component mounted");
});
</script>
