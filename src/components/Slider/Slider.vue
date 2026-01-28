<template>
  <div class="slider" :class="additionalClasses">
    <input
      ref="inputRef"
      type="range"
      class="slider__input"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="isDisabled"
      :name="name"
      :aria-label="ariaLabel || 'Slider'"
      :aria-describedby="ariaDescribedby || undefined"
      :style="trackStyle"
      @input="onInput"
      @change="onChange"
    />
  </div>
</template>

<style src="./Slider.scss"></style>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  name: String,
  ariaLabel: String,
  ariaDescribedby: String,
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const inputRef = ref(null);

const percentage = computed(() => {
  const range = props.max - props.min;
  if (range === 0) return 0;
  return ((props.modelValue - props.min) / range) * 100;
});

const trackStyle = computed(() => ({
  "--slider-fill-percentage": `${percentage.value}%`,
}));

const onInput = (event) => {
  const value = parseFloat(event.target.value);
  emit("update:modelValue", value);
};

const onChange = (event) => {
  const value = parseFloat(event.target.value);
  emit("change", { value, originalEvent: event });
};

const additionalClasses = computed(() => [
  props.isDisabled && "slider--disabled",
].filter(Boolean).join(" "));
</script>
