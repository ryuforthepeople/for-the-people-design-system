<template>
  <div
    class="progress-spinner"
    :class="additionalClasses"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :style="spinnerStyle"
  >
    <svg class="progress-spinner__svg" viewBox="0 0 50 50">
      <!-- Background track circle -->
      <circle
        class="progress-spinner__track"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        :stroke-width="strokeWidth"
      />
      <!-- Animated spinner circle -->
      <circle
        class="progress-spinner__circle"
        cx="25"
        cy="25"
        r="20"
        :fill="fill"
        :stroke-width="strokeWidth"
      />
    </svg>
  </div>
</template>

<style src="./ProgressSpinner.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /**
   * Width of the spinner stroke
   */
  strokeWidth: {
    type: [Number, String],
    default: 4,
  },
  /**
   * Fill color for the spinner circle
   */
  fill: {
    type: String,
    default: "transparent",
  },
  /**
   * Duration of the animation cycle
   */
  animationDuration: {
    type: String,
    default: "2s",
  },
});

const spinnerStyle = computed(() => ({
  "--progress-spinner-animation-duration": props.animationDuration,
}));

const additionalClasses = computed(() => [].filter(Boolean).join(" "));
</script>
