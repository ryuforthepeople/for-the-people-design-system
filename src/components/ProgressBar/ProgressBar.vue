<template>
  <div
    class="progress-bar"
    :class="additionalClasses"
    role="progressbar"
    :aria-valuenow="mode === 'determinate' ? value : undefined"
    :aria-valuemin="mode === 'determinate' ? 0 : undefined"
    :aria-valuemax="mode === 'determinate' ? 100 : undefined"
  >
    <div class="progress-bar__track">
      <div
        v-if="mode === 'determinate'"
        class="progress-bar__fill"
        :style="fillStyle"
      >
        <span v-if="showValue" class="progress-bar__label">
          <slot>{{ value }}%</slot>
        </span>
      </div>
      <div v-else class="progress-bar__fill progress-bar__fill--indeterminate" />
    </div>
  </div>
</template>

<style src="./ProgressBar.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100,
  },
  showValue: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String,
    default: "determinate",
    validator: (val) => ["determinate", "indeterminate"].includes(val),
  },
});

const fillStyle = computed(() => ({
  width: `${props.value}%`,
}));

const additionalClasses = computed(() =>
  [props.mode === "indeterminate" && "progress-bar--indeterminate"]
    .filter(Boolean)
    .join(" ")
);
</script>
