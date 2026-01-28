<template>
  <div class="rating" :class="additionalClasses">
    <button
      v-if="cancel && !readonly && !isDisabled"
      type="button"
      class="rating__cancel"
      :tabindex="isDisabled ? -1 : 0"
      @click="onCancelClick"
      @keydown.enter.prevent="onCancelClick"
      @keydown.space.prevent="onCancelClick"
    >
      <svg
        class="rating__cancel-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
    <button
      v-for="star in stars"
      :key="star"
      type="button"
      class="rating__star"
      :class="{
        'rating__star--active': star <= currentValue,
        'rating__star--hover': !readonly && !isDisabled && star <= hoverValue && hoverValue > 0,
      }"
      :tabindex="readonly || isDisabled ? -1 : 0"
      :disabled="isDisabled"
      :aria-label="`${star} of ${stars} stars`"
      @click="onStarClick(star)"
      @mouseenter="onStarHover(star)"
      @mouseleave="onStarLeave"
      @keydown.enter.prevent="onStarClick(star)"
      @keydown.space.prevent="onStarClick(star)"
    >
      <svg
        class="rating__star-icon"
        viewBox="0 0 24 24"
        :fill="star <= currentValue ? 'currentColor' : 'none'"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  </div>
</template>

<style src="./Rating.scss"></style>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
  stars: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  cancel: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const hoverValue = ref(0);

const currentValue = computed(() => props.modelValue ?? 0);

const onStarClick = (value) => {
  if (props.readonly || props.isDisabled) return;

  // Toggle behavior: clicking the same value deselects
  const newValue = value === props.modelValue ? null : value;
  emit("update:modelValue", newValue);
  emit("change", { value: newValue });
};

const onCancelClick = () => {
  if (props.readonly || props.isDisabled) return;
  emit("update:modelValue", null);
  emit("change", { value: null });
};

const onStarHover = (value) => {
  if (props.readonly || props.isDisabled) return;
  hoverValue.value = value;
};

const onStarLeave = () => {
  hoverValue.value = 0;
};

const additionalClasses = computed(() =>
  [
    props.readonly && "rating--readonly",
    props.isDisabled && "rating--disabled",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
