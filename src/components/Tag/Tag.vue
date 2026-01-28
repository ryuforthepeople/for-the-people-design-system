<template>
  <span class="tag" :class="additionalClasses">
    <slot name="icon">
      <i v-if="icon" :class="icon" class="tag__icon"></i>
    </slot>
    <span v-if="value || $slots.default" class="tag__value">
      <slot>{{ value }}</slot>
    </span>
  </span>
</template>

<style src="./Tag.scss"></style>

<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "neutral",
    validator: (v) => ["brand", "accent", "neutral", "success", "warning", "danger", "info"].includes(v),
  },
  icon: {
    type: String,
    default: null,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const $slots = useSlots();

const additionalClasses = computed(() =>
  [
    `tag--color-${props.color}`,
    props.rounded ? "tag--rounded" : "",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
