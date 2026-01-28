<template>
  <div class="meter-group" :class="additionalClasses">
    <div v-if="showLabels" class="meter-group__header">
      <div class="meter-group__labels">
        <span
          v-for="(item, index) in values"
          :key="index"
          class="meter-group__label-item"
        >
          <span
            class="meter-group__marker"
            :style="{ backgroundColor: getColor(item.color) }"
          />
          <span class="meter-group__label-text">{{ item.label }}</span>
          <span class="meter-group__label-value">{{ formatValue(item.value) }}</span>
        </span>
      </div>
    </div>
    <div class="meter-group__track" role="meter" :aria-valuemax="max">
      <div
        v-for="(item, index) in values"
        :key="index"
        class="meter-group__meter"
        :style="getMeterStyle(item)"
        :aria-label="item.label"
        :aria-valuenow="item.value"
      />
    </div>
  </div>
</template>

<style src="./MeterGroup.scss"></style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  values: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (item) =>
          typeof item.value === "number" &&
          item.value >= 0
      ),
  },
  max: {
    type: Number,
    default: 100,
  },
  orientation: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v),
  },
  showLabels: {
    type: Boolean,
    default: true,
  },
});

const colorMap = {
  primary: "var(--meter-group-colors-primary)",
  success: "var(--meter-group-colors-success)",
  warning: "var(--meter-group-colors-warning)",
  danger: "var(--meter-group-colors-danger)",
};

function getColor(color) {
  return colorMap[color] || color || colorMap.primary;
}

function getMeterStyle(item) {
  const percentage = (item.value / props.max) * 100;
  return {
    width: props.orientation === "horizontal" ? `${percentage}%` : "100%",
    height: props.orientation === "vertical" ? `${percentage}%` : "100%",
    backgroundColor: getColor(item.color),
  };
}

function formatValue(value) {
  return `${Math.round((value / props.max) * 100)}%`;
}

const additionalClasses = computed(() =>
  [`meter-group--${props.orientation}`].filter(Boolean).join(" ")
);
</script>
