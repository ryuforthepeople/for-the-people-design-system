<template>
  <div
    class="divider"
    :class="additionalClasses"
    role="separator"
    :aria-orientation="layout"
  >
    <span v-if="$slots.default" class="divider__content">
      <slot />
    </span>
  </div>
</template>

<style src="./Divider.scss"></style>

<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
  layout: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v),
  },
  align: {
    type: String,
    default: "center",
    validator: (v) => ["left", "center", "right", "top", "bottom"].includes(v),
  },
  type: {
    type: String,
    default: "solid",
    validator: (v) => ["solid", "dashed", "dotted"].includes(v),
  },
});

const slots = useSlots();

const additionalClasses = computed(() => {
  const classes = [];

  if (props.layout === "vertical") {
    classes.push("divider--vertical");
  }

  if (props.type !== "solid") {
    classes.push(`divider--${props.type}`);
  }

  // Only add alignment classes when there's content
  if (slots.default) {
    classes.push("divider--with-content");
    classes.push(`divider--align-${props.align}`);
  }

  return classes.join(" ");
});
</script>
