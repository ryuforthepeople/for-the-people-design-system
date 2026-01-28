<template>
  <button
    class="button"
    :class="additionalClasses"
    :disabled="isDisabled || isLoading"
    :aria-disabled="isDisabled || isLoading"
    :aria-busy="isLoading"
    type="button"
  >
    <span v-if="isLoading" class="button__spinner" aria-hidden="true">
      <svg class="button__spinner-icon" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="31.4 31.4"
        />
      </svg>
    </span>
    <i
      v-else-if="icon && iconPos === 'left'"
      :class="icon"
      class="button__icon button__icon--left"
      aria-hidden="true"
    ></i>
    <span v-if="label" class="button__label">{{ label }}</span>
    <slot v-else />
    <i
      v-if="icon && iconPos === 'right' && !isLoading"
      :class="icon"
      class="button__icon button__icon--right"
      aria-hidden="true"
    ></i>
  </button>
</template>

<style src="./Button.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconPos: {
    type: String,
    default: "left",
    validator: (v) => ["left", "right"].includes(v),
  },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary", "outlined", "text"].includes(v),
  },
  pill: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const additionalClasses = computed(() =>
  [
    `button--size-${props.size}`,
    `button--variant-${props.variant}`,
    props.pill && "button--pill",
    props.isDisabled && "button--disabled",
    props.isLoading && "button--loading",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
