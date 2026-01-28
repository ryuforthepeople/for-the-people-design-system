<template>
  <label class="checkbox" :class="additionalClasses">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked="modelValue"
      :disabled="isDisabled"
      :name="name"
      :value="value"
      :aria-invalid="isInvalid || undefined"
      @change="onChange"
    />
    <span class="checkbox__box">
      <svg
        class="checkbox__icon"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="!indeterminate"
          d="M10 3L4.5 8.5L2 6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          v-else
          d="M2.5 6H9.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </span>
    <span v-if="label || $slots.default" class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style src="./Checkbox.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: String,
  name: String,
  value: {
    type: [String, Number, Boolean, Object],
    default: true,
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
  isInvalid: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const onChange = (event) => {
  const checked = event.target.checked;
  emit("update:modelValue", checked);
  emit("change", { checked, originalEvent: event });
};

const additionalClasses = computed(() => [
  `checkbox--size-${props.size}`,
  props.isDisabled && "checkbox--disabled",
  props.isInvalid && "checkbox--invalid",
  props.modelValue && "checkbox--checked",
  props.indeterminate && "checkbox--indeterminate",
].filter(Boolean).join(" "));
</script>
