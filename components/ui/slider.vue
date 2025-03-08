<script setup>
import { ref } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css"; // Default styles

const value = ref([20, 80]); // Default slider range
</script>

<template>
  <div class="relative flex w-full touch-none select-none items-center">
    <VueSlider
      v-model="value"
      :min="0"
      :max="100"
      :dotSize="20"
      :railStyle="{ background: '#E2E8F0', height: '8px', borderRadius: '9999px' }"
      :processStyle="{ background: '#6366F1', height: '8px' }"
      :dotStyle="{
        background: '#FFFFFF',
        border: '2px solid #6366F1',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
      }"
      class="w-full"
    />
  </div>
</template>
