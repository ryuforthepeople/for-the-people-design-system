<template>
  <label class="radio" :class="additionalClasses">
    <input
      type="radio"
      class="radio__input"
      :checked="isChecked"
      :disabled="isDisabled"
      :name="name"
      :value="value"
      :aria-invalid="isInvalid || undefined"
      @change="onChange"
    />
    <span class="radio__circle">
      <span class="radio__dot"></span>
    </span>
    <span v-if="label || $slots.default" class="radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style src="./RadioButton.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  label: String,
  name: String,
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
});

const emit = defineEmits(["update:modelValue", "change"]);

const isChecked = computed(() => props.modelValue === props.value);

const onChange = (event) => {
  emit("update:modelValue", props.value);
  emit("change", { value: props.value, originalEvent: event });
};

const additionalClasses = computed(() => [
  `radio--size-${props.size}`,
  props.isDisabled && "radio--disabled",
  props.isInvalid && "radio--invalid",
  isChecked.value && "radio--checked",
].filter(Boolean).join(" "));
</script>
