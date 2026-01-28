<template>
  <span class="input-group-addon" :class="additionalClasses">
    <slot />
  </span>
</template>

<style src="./InputGroupAddon.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
});

const additionalClasses = computed(() =>
  [`input-group-addon--size-${props.size}`].filter(Boolean).join(" ")
);
</script>
