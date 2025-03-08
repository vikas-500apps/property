<script setup>
import { Building, Home, LandPlot } from "lucide-vue-next";
// import { useRouter } from "vue-router";

// const router = useRouter();

const propertyTypes = [
  {
    name: "Apartments",
    icon: Building,
    count: 24,
    href: "/properties?type=apartment",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Houses",
    icon: Home,
    count: 18,
    href: "/properties?type=house",
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Condos",
    icon: Building,
    count: 12,
    href: "/properties?type=condo",
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Townhouses",
    icon: LandPlot,
    count: 8,
    href: "/properties?type=townhouse",
    color: "bg-amber-50 text-amber-600",
  },
];

// const navigateTo = (href) => {
//   router.push(href);
// };
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      v-for="type in propertyTypes"
      :key="type.name"
      class="group border rounded-lg p-6 h-full flex flex-col items-center text-center transition-all hover:shadow-md hover:border-blue-500 cursor-pointer"
    >
      <div :class="[type.color, 'p-4 rounded-full mb-4']">
        <component :is="type.icon" class="h-8 w-8" />
      </div>
      <h3 class="font-semibold text-lg mb-1">{{ type.name }}</h3>
      <p class="text-gray-500">{{ type.count }} Properties</p>
    </div>
  </div>
</template>
