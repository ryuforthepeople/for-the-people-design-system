<template>
  <button
    type="button"
    class="toggle-button"
    :class="additionalClasses"
    :disabled="isDisabled"
    :aria-pressed="modelValue"
    @click="onClick"
  >
    <span v-if="currentIcon" class="toggle-button__icon">
      <slot name="icon" :value="modelValue">
        <i :class="currentIcon"></i>
      </slot>
    </span>
    <span v-if="currentLabel" class="toggle-button__label">
      {{ currentLabel }}
    </span>
  </button>
</template>

<style src="./ToggleButton.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  onLabel: {
    type: String,
    default: "",
  },
  offLabel: {
    type: String,
    default: "",
  },
  onIcon: {
    type: String,
    default: "",
  },
  offIcon: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const onClick = (event) => {
  if (props.isDisabled) return;
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);
  emit("change", { value: newValue, originalEvent: event });
};

const currentLabel = computed(() => {
  return props.modelValue ? props.onLabel : props.offLabel;
});

const currentIcon = computed(() => {
  return props.modelValue ? props.onIcon : props.offIcon;
});

const additionalClasses = computed(() =>
  [
    `toggle-button--size-${props.size}`,
    props.modelValue && "toggle-button--checked",
    props.isDisabled && "toggle-button--disabled",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
