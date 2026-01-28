<template>
  <div class="input-group" :class="additionalClasses">
    <slot />
  </div>
</template>

<style src="./InputGroup.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  fluid: {
    type: Boolean,
    default: false,
  },
});

const additionalClasses = computed(() =>
  [props.fluid && "input-group--fluid"].filter(Boolean).join(" ")
);
</script>
