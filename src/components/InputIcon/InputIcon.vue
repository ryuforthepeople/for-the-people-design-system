<template>
  <span class="input-icon" :class="additionalClasses" aria-hidden="true">
    <slot />
  </span>
</template>

<style src="./InputIcon.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  position: {
    type: String,
    default: "left",
    validator: (v) => ["left", "right"].includes(v),
  },
});

const additionalClasses = computed(() =>
  [
    `input-icon--size-${props.size}`,
    `input-icon--position-${props.position}`,
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
