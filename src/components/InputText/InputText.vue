<template>
  <input
    ref="inputRef"
    class="input-text"
    :class="additionalClasses"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :name="name"
    :aria-invalid="isInvalid || undefined"
    :aria-describedby="ariaDescribedby || undefined"
    @input="onInput"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<style src="./InputText.scss"></style>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (v) => ["text", "password", "email", "tel", "url", "search", "number"].includes(v),
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
  ariaDescribedby: {
    type: String,
    default: undefined,
  },
});

const emit = defineEmits(["update:modelValue", "input", "change", "focus", "blur"]);

const inputRef = ref(null);

const onInput = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
  emit("input", { value, originalEvent: event });
};

const onChange = (event) => {
  emit("change", { value: event.target.value, originalEvent: event });
};

const onFocus = (event) => {
  emit("focus", { originalEvent: event });
};

const onBlur = (event) => {
  emit("blur", { originalEvent: event });
};

const additionalClasses = computed(() => [
  `input-text--size-${props.size}`,
  props.isDisabled && "input-text--disabled",
  props.isInvalid && "input-text--invalid",
].filter(Boolean).join(" "));

// Expose input ref for programmatic focus
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  select: () => inputRef.value?.select(),
  el: inputRef,
});
</script>
