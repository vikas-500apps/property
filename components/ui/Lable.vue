<script setup lang="ts">
import { useAttrs } from "vue";

// Utility function to merge classes
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

// Define props
const props = defineProps<{ className?: string; for?: string }>();
const attrs = useAttrs();
</script>

<template>
  <label
    :for="props.for"
    :class="cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      props.className
    )"
    v-bind="attrs"
  >
    <slot />
  </label>
</template>
