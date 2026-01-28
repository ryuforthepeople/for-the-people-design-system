<template>
  <div class="select" :class="additionalClasses">
    <select
      ref="selectRef"
      class="select__input"
      :value="modelValue"
      :disabled="isDisabled"
      :name="name"
      :aria-invalid="isInvalid || undefined"
      @change="onChange"
    >
      <option v-if="placeholder" value="" disabled :selected="!modelValue">
        {{ placeholder }}
      </option>
      <option
        v-for="option in normalizedOptions"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <span class="select__icon">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </div>
</template>

<style src="./Select.scss"></style>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  options: {
    type: Array,
    default: () => [],
  },
  optionLabel: {
    type: String,
    default: "label",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  placeholder: String,
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

const selectRef = ref(null);

const normalizedOptions = computed(() => {
  return props.options.map((option) => {
    if (typeof option === "string" || typeof option === "number") {
      return { label: option, value: option };
    }
    return {
      label: option[props.optionLabel],
      value: option[props.optionValue],
      disabled: option.disabled,
    };
  });
});

const onChange = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
  emit("change", { value, originalEvent: event });
};

const additionalClasses = computed(() => [
  `select--size-${props.size}`,
  props.isDisabled && "select--disabled",
  props.isInvalid && "select--invalid",
  !props.modelValue && props.placeholder && "select--placeholder",
].filter(Boolean).join(" "));
</script>
