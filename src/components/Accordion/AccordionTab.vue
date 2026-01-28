<template>
  <div class="accordion__tab" :class="tabClasses">
    <button
      type="button"
      class="accordion__header"
      :disabled="isDisabled"
      :aria-expanded="isActive"
      :aria-controls="contentId"
      @click="handleClick"
    >
      <span class="accordion__header-text">
        <slot name="header">{{ header }}</slot>
      </span>
      <span class="accordion__icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </button>
    <div
      :id="contentId"
      class="accordion__content-wrapper"
      :aria-hidden="!isActive"
    >
      <div class="accordion__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from "vue";

const props = defineProps({
  /**
   * Header text for the accordion tab.
   */
  header: {
    type: String,
    default: "",
  },
  /**
   * Whether the tab is disabled.
   */
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const accordion = inject("accordion");
const tabIndex = ref(-1);
const contentId = computed(() => `accordion-content-${tabIndex.value}`);

onMounted(() => {
  if (accordion) {
    tabIndex.value = accordion.registerTab();
  }
});

const isActive = computed(() => {
  if (!accordion || tabIndex.value === -1) return false;
  return accordion.isTabActive(tabIndex.value);
});

const handleClick = () => {
  if (accordion && !props.isDisabled) {
    accordion.toggleTab(tabIndex.value, props.isDisabled);
  }
};

const tabClasses = computed(() =>
  [
    isActive.value && "accordion__tab--active",
    props.isDisabled && "accordion__tab--disabled",
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
