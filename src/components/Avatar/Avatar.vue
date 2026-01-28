<template>
  <div class="avatar" :class="additionalClasses" role="img" :aria-label="ariaLabel || label || 'Avatar'">
    <img
      v-if="image && !imageError"
      :src="image"
      :alt="ariaLabel || label || 'avatar'"
      class="avatar__image"
      @error="onImageError"
    />
    <span v-else-if="label" class="avatar__label">{{ label }}</span>
    <i v-else-if="icon" :class="icon" class="avatar__icon"></i>
    <slot v-else />
  </div>
</template>

<style src="./Avatar.scss"></style>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  label: String,
  icon: String,
  image: String,
  size: {
    type: String,
    default: "medium",
    validator: (v) => ["small", "medium", "large", "xlarge"].includes(v),
  },
  shape: {
    type: String,
    default: "square",
    validator: (v) => ["square", "circle"].includes(v),
  },
  ariaLabel: String,
});

const emit = defineEmits(["error"]);

const imageError = ref(false);

const onImageError = (event) => {
  imageError.value = true;
  emit("error", event);
};

const additionalClasses = computed(() =>
  [
    `avatar--size-${props.size}`,
    `avatar--shape-${props.shape}`,
  ].join(" ")
);
</script>
