<template>
  <div class="atmospheric-background" :class="variantClass">
    <ParticleBackground
      v-if="particles"
      class="atmospheric-background__particles"
      :particle-count="particleCount"
      :static-star-count="staticStarCount"
      :cluster-count="clusterCount"
      :stars-per-cluster="starsPerCluster"
      :particle-color="particleColor"
      :min-size="0.5"
      :max-size="2"
      :speed="0.15"
      :twinkle="true"
      :parallax="parallax"
    />
    <div class="atmospheric-background__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AtmosphericBackgroundProps } from '../../types';
import { computed } from "vue";
import ParticleBackground from "../ParticleBackground/ParticleBackground.vue";

defineOptions({ name: 'FtpAtmosphericBackground' });

const props = withDefaults(defineProps<AtmosphericBackgroundProps>(), {
  variant: "default",
  particles: true,
  particleCount: 100,
  staticStarCount: 400,
  clusterCount: 12,
  starsPerCluster: 20,
  particleColor: "rgba(255, 255, 255, 0.8)",
  parallax: false,
});

const variantClass = computed(() => `atmospheric-background--${props.variant}`);
</script>

<style lang="scss">
// Hard-coded navy colors for atmospheric effect
$_navy-950: #0a0e1a;
$_navy-900: #0f1629;

.atmospheric-background {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}

.atmospheric-background__particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.atmospheric-background__content {
  position: relative;
  z-index: 2;
}

// Default variant - cosmic blue/purple
.atmospheric-background--default {
  background:
    // Primary blue nebula glow (center-top)
    radial-gradient(
      ellipse 100% 80% at 50% 20%,
      rgba(80, 100, 180, 0.15) 0%,
      rgba(60, 80, 160, 0.08) 40%,
      transparent 70%
    ),
    // Secondary purple glow (offset)
    radial-gradient(
      ellipse 70% 60% at 70% 40%,
      rgba(100, 80, 160, 0.1) 0%,
      rgba(80, 60, 140, 0.05) 30%,
      transparent 60%
    ),
    // Subtle blue accent (lower left)
    radial-gradient(
      ellipse 50% 40% at 20% 60%,
      rgba(60, 100, 180, 0.08) 0%,
      transparent 50%
    ),
    // Vignette (darker edges)
    radial-gradient(
      ellipse 100% 100% at 50% 50%,
      transparent 30%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    // Base gradient
    linear-gradient(
      180deg,
      $_navy-950 0%,
      #0d1526 30%,
      #111d35 50%,
      #0d1526 70%,
      $_navy-950 100%
    );
  background-color: $_navy-950;
}

// Vibrant variant - stronger cosmic glow
.atmospheric-background--vibrant {
  background:
    // Stronger blue nebula
    radial-gradient(
      ellipse 100% 80% at 50% 25%,
      rgba(80, 120, 200, 0.25) 0%,
      rgba(60, 100, 180, 0.12) 40%,
      transparent 70%
    ),
    // Purple accent
    radial-gradient(
      ellipse 80% 60% at 75% 35%,
      rgba(120, 80, 180, 0.18) 0%,
      rgba(100, 60, 160, 0.08) 30%,
      transparent 60%
    ),
    // Blue accent lower
    radial-gradient(
      ellipse 60% 50% at 25% 55%,
      rgba(60, 120, 200, 0.12) 0%,
      transparent 50%
    ),
    // Vignette
    radial-gradient(
      ellipse 100% 100% at 50% 50%,
      transparent 30%,
      rgba(0, 0, 0, 0.45) 100%
    ),
    // Base
    linear-gradient(
      180deg,
      $_navy-950 0%,
      #0e1830 30%,
      #142040 50%,
      #0e1830 70%,
      $_navy-950 100%
    );
  background-color: $_navy-950;
}

// Dark variant - minimal glow
.atmospheric-background--dark {
  background:
    // Very subtle blue glow
    radial-gradient(
      ellipse 80% 60% at 50% 40%,
      rgba(60, 80, 140, 0.08) 0%,
      transparent 60%
    ),
    // Vignette
    radial-gradient(
      ellipse 100% 100% at 50% 50%,
      transparent 20%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    // Base
    linear-gradient(
      180deg,
      $_navy-950 0%,
      $_navy-950 100%
    );
  background-color: $_navy-950;
}

// Subtle variant - light cosmic effect
.atmospheric-background--subtle {
  background:
    // Gentle blue tint
    radial-gradient(
      ellipse 90% 70% at 50% 35%,
      rgba(70, 90, 150, 0.06) 0%,
      transparent 60%
    ),
    // Soft vignette
    radial-gradient(
      ellipse 100% 100% at 50% 50%,
      transparent 40%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    // Base
    linear-gradient(
      180deg,
      $_navy-900 0%,
      $_navy-900 100%
    );
  background-color: $_navy-900;
}
</style>
