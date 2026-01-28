<template>
  <label class="toggle-switch" :class="additionalClasses">
    <input
      type="checkbox"
      class="toggle-switch__input"
      :checked="modelValue"
      :disabled="isDisabled"
      :name="name"
      role="switch"
      :aria-checked="modelValue"
      @change="onChange"
    />
    <span class="toggle-switch__track">
      <span class="toggle-switch__thumb"></span>
    </span>
  </label>
</template>

<style src="./ToggleSwitch.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  name: String,
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
  props.isDisabled && "toggle-switch--disabled",
  props.modelValue && "toggle-switch--checked",
].filter(Boolean).join(" "));
</script>
