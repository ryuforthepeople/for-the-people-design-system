<template>
  <div class="carousel" :class="additionalClasses">
    <div class="carousel__container">
      <!-- Previous button -->
      <button
        v-if="showNavigators"
        type="button"
        class="carousel__navigator carousel__navigator--prev"
        :disabled="!circular && currentIndex === 0"
        aria-label="Previous slide"
        @click="prev"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <!-- Slides container -->
      <div class="carousel__viewport" ref="viewportRef">
        <div
          class="carousel__track"
          :style="trackStyle"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="carousel__item"
            :class="{ 'carousel__item--active': index === currentIndex }"
          >
            <slot name="item" :data="item" :index="index">
              {{ item }}
            </slot>
          </div>
        </div>
      </div>

      <!-- Next button -->
      <button
        v-if="showNavigators"
        type="button"
        class="carousel__navigator carousel__navigator--next"
        :disabled="!circular && currentIndex === items.length - 1"
        aria-label="Next slide"
        @click="next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>

    <!-- Indicators -->
    <div v-if="showIndicators && items.length > 1" class="carousel__indicators">
      <button
        v-for="(_, index) in items"
        :key="index"
        type="button"
        class="carousel__indicator"
        :class="{ 'carousel__indicator--active': index === currentIndex }"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-current="index === currentIndex ? 'true' : undefined"
        @click="goTo(index)"
      />
    </div>
  </div>
</template>

<style src="./Carousel.scss"></style>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  /**
   * Array of items to display in the carousel
   */
  items: {
    type: Array,
    default: () => [],
  },
  /**
   * Number of items visible at once
   */
  numVisible: {
    type: Number,
    default: 1,
  },
  /**
   * Number of items to scroll at once
   */
  numScroll: {
    type: Number,
    default: 1,
  },
  /**
   * Enable circular/infinite scrolling
   */
  circular: {
    type: Boolean,
    default: false,
  },
  /**
   * Auto-play slides
   */
  autoplay: {
    type: Boolean,
    default: false,
  },
  /**
   * Auto-play interval in milliseconds
   */
  autoplayInterval: {
    type: Number,
    default: 3000,
  },
  /**
   * Show navigation arrows
   */
  showNavigators: {
    type: Boolean,
    default: true,
  },
  /**
   * Show indicator dots
   */
  showIndicators: {
    type: Boolean,
    default: true,
  },
  /**
   * Orientation of the carousel
   */
  orientation: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v),
  },
});

const emit = defineEmits(["update:page"]);

const viewportRef = ref(null);
const currentIndex = ref(0);
const autoplayTimer = ref(null);

const additionalClasses = computed(() =>
  [
    `carousel--orientation-${props.orientation}`,
    props.autoplay && "carousel--autoplay",
  ]
    .filter(Boolean)
    .join(" ")
);

const trackStyle = computed(() => {
  const translateValue = -(currentIndex.value * (100 / props.numVisible));
  return {
    transform: props.orientation === "horizontal"
      ? `translateX(${translateValue}%)`
      : `translateY(${translateValue}%)`,
  };
});

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= props.numScroll;
  } else if (props.circular) {
    currentIndex.value = props.items.length - 1;
  }
  emit("update:page", currentIndex.value);
};

const next = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value += props.numScroll;
    if (currentIndex.value >= props.items.length) {
      currentIndex.value = props.items.length - 1;
    }
  } else if (props.circular) {
    currentIndex.value = 0;
  }
  emit("update:page", currentIndex.value);
};

const goTo = (index) => {
  currentIndex.value = index;
  emit("update:page", currentIndex.value);
};

const startAutoplay = () => {
  if (props.autoplay && props.items.length > 1) {
    autoplayTimer.value = setInterval(() => {
      next();
    }, props.autoplayInterval);
  }
};

const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value);
    autoplayTimer.value = null;
  }
};

watch(() => props.autoplay, (newValue) => {
  if (newValue) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
});

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

defineExpose({
  prev,
  next,
  goTo,
  currentIndex,
});
</script>
