<script setup lang="ts">
import { useAttrs } from "vue";

// Utility function to merge classes
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

// Define props
const props = defineProps<{
  modelValue?: string;
  type?: string;
  className?: string;
}>();

const attrs = useAttrs();
</script>

<template>
  <input
    :type="props.type || 'text'"
    :class="
      cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        props.className
      )
    "
    v-bind="attrs"
  />
</template>
