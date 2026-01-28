<template>
  <textarea
    ref="textareaRef"
    class="textarea"
    :class="additionalClasses"
    :value="modelValue"
    :rows="rows"
    :cols="cols"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :aria-invalid="isInvalid || undefined"
    :aria-describedby="ariaDescribedby || undefined"
    @input="onInput"
  ></textarea>
</template>

<style src="./Textarea.scss"></style>

<script setup>
import { computed, ref, watch, onMounted, onUpdated, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  rows: {
    type: [Number, String],
    default: 3,
  },
  cols: {
    type: [Number, String],
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isInvalid: {
    type: Boolean,
    default: false,
  },
  autoResize: {
    type: Boolean,
    default: false,
  },
  ariaDescribedby: {
    type: String,
    default: undefined,
  },
});

const emit = defineEmits(["update:modelValue", "input"]);

const textareaRef = ref(null);
let resizeObserver = null;

const resize = () => {
  if (!textareaRef.value || !props.autoResize) return;

  const textarea = textareaRef.value;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const onInput = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
  emit("input", { value, originalEvent: event });

  if (props.autoResize) {
    nextTick(resize);
  }
};

const additionalClasses = computed(() =>
  [
    props.isDisabled && "textarea--disabled",
    props.isInvalid && "textarea--invalid",
    props.autoResize && "textarea--auto-resize",
  ]
    .filter(Boolean)
    .join(" ")
);

onMounted(() => {
  if (props.autoResize) {
    resize();
    resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(resize);
    });
    if (textareaRef.value) {
      resizeObserver.observe(textareaRef.value);
    }
  }
});

onUpdated(() => {
  if (props.autoResize) {
    resize();
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

watch(
  () => props.modelValue,
  () => {
    if (props.autoResize) {
      nextTick(resize);
    }
  }
);
</script>
