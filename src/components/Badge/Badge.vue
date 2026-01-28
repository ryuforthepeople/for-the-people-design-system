<template>
  <span v-if="!isEmpty" class="badge" :class="additionalClasses">
    <slot>{{ value }}</slot>
  </span>
</template>

<style src="./Badge.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: null,
  },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  severity: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "success", "warning", "danger", "info"].includes(v),
  },
});

const slots = defineSlots();

const isEmpty = computed(() => {
  return props.value === null && !slots.default;
});

const isSingleChar = computed(() => {
  const val = String(props.value ?? "");
  return val.length === 1;
});

const additionalClasses = computed(() =>
  [
    `badge--size-${props.size}`,
    `badge--severity-${props.severity}`,
    isSingleChar.value ? "badge--circle" : "",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
