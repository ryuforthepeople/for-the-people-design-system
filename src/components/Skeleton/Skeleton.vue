<template>
  <div
    class="skeleton"
    :class="additionalClasses"
    :style="containerStyle"
    aria-hidden="true"
  />
</template>

<style src="./Skeleton.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  shape: {
    type: String,
    default: "rectangle",
    validator: (v) => ["rectangle", "circle"].includes(v),
  },
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  borderRadius: {
    type: String,
    default: null,
  },
  animation: {
    type: String,
    default: "wave",
    validator: (v) => ["wave", "none"].includes(v),
  },
});

const additionalClasses = computed(() => {
  const classes = [];

  if (props.shape === "circle") {
    classes.push("skeleton--circle");
  }

  if (props.animation === "wave") {
    classes.push("skeleton--animated");
  }

  return classes.join(" ");
});

const containerStyle = computed(() => {
  const style = {};

  if (props.width) {
    style.width = props.width;
  }

  if (props.height) {
    style.height = props.height;
  }

  if (props.borderRadius) {
    style.borderRadius = props.borderRadius;
  }

  return style;
});
</script>
