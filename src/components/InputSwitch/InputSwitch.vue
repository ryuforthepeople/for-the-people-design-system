<template>
  <label class="input-switch" :class="additionalClasses">
    <input
      type="checkbox"
      class="input-switch__input"
      :checked="modelValue"
      :disabled="isDisabled"
      :name="name"
      role="switch"
      :aria-checked="modelValue"
      @change="onChange"
    />
    <span class="input-switch__track">
      <span class="input-switch__thumb"></span>
    </span>
    <span v-if="label || $slots.default" class="input-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style src="./InputSwitch.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
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
});

const emit = defineEmits(["update:modelValue", "change"]);

const onChange = (event) => {
  const checked = event.target.checked;
  emit("update:modelValue", checked);
  emit("change", { value: checked, originalEvent: event });
};

const additionalClasses = computed(() => [
  `input-switch--size-${props.size}`,
  props.isDisabled && "input-switch--disabled",
  props.modelValue && "input-switch--checked",
].filter(Boolean).join(" "));
</script>
