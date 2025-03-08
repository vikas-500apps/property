<script setup lang="ts">
import { defineProps, computed, useAttrs } from "vue";

// Utility function to merge classes
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

// Define props
const props = defineProps<{ className?: string }>();
const attrs = useAttrs();

// Compute class names dynamically
const cardClasses = computed(() => cn("rounded-lg border bg-card text-card-foreground shadow-sm", props.className));
const headerClasses = computed(() => cn("flex flex-col space-y-1.5 p-6", props.className));
const titleClasses = computed(() => cn("text-2xl font-semibold leading-none tracking-tight", props.className));
const descriptionClasses = computed(() => cn("text-sm text-text-light", props.className));
const contentClasses = computed(() => cn("p-6 pt-0", props.className));
const footerClasses = computed(() => cn("flex items-center p-6 pt-0", props.className));
</script>

<template>
  <div v-bind="attrs" :class="cardClasses">
    <slot name="header">
      <div :class="headerClasses">
        <slot name="title">
          <div :class="titleClasses">
            <slot name="titleContent" />
          </div>
        </slot>
        <slot name="description">
          <div :class="descriptionClasses">
            <slot name="descriptionContent" />
          </div>
        </slot>
      </div>
    </slot>

    <slot name="content">
      <div :class="contentClasses">
        <slot name="contentBody" />
      </div>
    </slot>

    <slot name="footer">
      <div :class="footerClasses">
        <slot name="footerContent" />
      </div>
    </slot>
  </div>
</template>


<!-- Example
<Card class="max-w-md mx-auto">
    <template #titleContent>My Card Title</template>
    <template #descriptionContent>This is a description of the card.</template>
    <template #contentBody>
      <p>This is the main content inside the card.</p>
    </template>
    <template #footerContent>
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
    </template>
  </Card> -->
  