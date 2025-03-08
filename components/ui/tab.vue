<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const selectedIndex = ref(0);
</script>

<template>
  <TabGroup v-model="selectedIndex">
    <!-- Tab List -->
    <TabList class="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 p-1 text-gray-600">
      <Tab
        v-slot="{ selected }"
        v-for="(tab, index) in ['Tab 1', 'Tab 2', 'Tab 3']"
        :key="index"
      >
        <button
          :class="[
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all',
            'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            selected
              ? 'bg-white text-gray-900 shadow-sm'
              : 'bg-transparent text-gray-600',
          ]"
        >
          {{ tab }}
        </button>
      </Tab>
    </TabList>

    <!-- Tab Panels -->
    <TabPanels>
      <TabPanel v-for="(content, index) in ['Content 1', 'Content 2', 'Content 3']" :key="index">
        <div class="mt-2 p-4 bg-gray-100 rounded-md">{{ content }}</div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>
