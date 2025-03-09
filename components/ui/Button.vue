<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cva } from "class-variance-authority";

// Define button variants using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-destructive hover:bg-blue-50",
        secondary:
          "bg-secondary text-secondary hover:bg-secondary/80",
        ghost: "hover:bg-destructive hover:bg-blue-50",
        link: "text-primary underline-offset-4 hover:bg-blue-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define the expected props
const props = defineProps<{
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}>();

const attrs = useAttrs();

// Compute class names dynamically
const buttonClasses = computed(() =>
  buttonVariants({ variant: props.variant, size: props.size })
);
</script>

<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    v-bind="attrs"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>
