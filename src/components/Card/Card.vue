<template>
  <div class="card" :class="additionalClasses">
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <div v-if="$slots.title || $slots.subtitle" class="card__caption">
        <div v-if="$slots.title" class="card__title">
          <slot name="title" />
        </div>
        <div v-if="$slots.subtitle" class="card__subtitle">
          <slot name="subtitle" />
        </div>
      </div>
      <div v-if="$slots.content || $slots.default" class="card__content">
        <slot name="content">
          <slot />
        </slot>
      </div>
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style src="./Card.scss"></style>

<script setup>
import { computed } from "vue";

defineOptions({
  name: 'Card'
});

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "highlighted"].includes(v),
  },
});

const additionalClasses = computed(() =>
  [
    props.variant !== "default" && `card--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ")
);
</script>
