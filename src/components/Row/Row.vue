<template>
  <tr class="row" :class="additionalClasses">
    <slot />
  </tr>
</template>

<style src="./Row.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
  isStriped: {
    type: Boolean,
    default: false,
  },
  isHoverable: {
    type: Boolean,
    default: true,
  },
});

const additionalClasses = computed(() =>
  [
    props.isSelected && "row--selected",
    props.isStriped && "row--striped",
    props.isHoverable && "row--hoverable",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
