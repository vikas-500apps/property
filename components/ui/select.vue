<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { Check, ChevronDown, ChevronUp } from "lucide-vue-next";

// Utility function to merge classes
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

// Props
const props = defineProps<{ modelValue: string; options: { value: string; label: string }[]; className?: string }>();
const isOpen = ref(false);
const selectedValue = ref(props.modelValue || "");

// Computed selected label
const selectedLabel = computed(() => {
  return props.options.find((option) => option.value === selectedValue.value)?.label || "Select an option";
});

// Emit event
const emit = defineEmits(["update:modelValue"]);
const selectOption = (value: string) => {
  selectedValue.value = value;
  emit("update:modelValue", value);
  isOpen.value = false;
};
</script>

<template>
  <div class="relative w-full">
    <button
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      @click="isOpen = !isOpen"
    >
      <span class="truncate">{{ selectedLabel }}</span>
      <ChevronDown v-if="!isOpen" class="h-4 w-4 opacity-50" />
      <ChevronUp v-else class="h-4 w-4 opacity-50" />
    </button>

    <div
      v-if="isOpen"
      class="absolute z-50 mt-1 w-full max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md"
    >
      <div class="p-1">
        <button
          v-for="option in options"
          :key="option.value"
          class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm focus:bg-accent focus:text-accent-foreground"
          @click="selectOption(option.value)"
        >
          <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Check v-if="selectedValue === option.value" class="h-4 w-4" />
          </span>
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<!-- usage
<template>
    <Select v-model="selectedOption" :options="options" />
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const selectedOption = ref("");
  const options = [
    { value: "apple", label: "Apple 🍏" },
    { value: "banana", label: "Banana 🍌" },
    { value: "cherry", label: "Cherry 🍒" }
  ];
  </script> -->
  