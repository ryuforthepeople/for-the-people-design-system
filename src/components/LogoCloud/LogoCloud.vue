<template>
  <div class="logo-cloud" :class="additionalClasses">
    <p v-if="title" class="logo-cloud__title">{{ title }}</p>
    <div class="logo-cloud__grid" :class="`logo-cloud__grid--cols-${columns}`">
      <component
        :is="logo.href ? 'a' : 'div'"
        v-for="(logo, i) in logos"
        :key="i"
        class="logo-cloud__item"
        v-bind="logo.href ? { href: logo.href, target: '_blank', rel: 'noopener noreferrer' } : {}"
      >
        <img :src="logo.src" :alt="logo.alt" class="logo-cloud__img" />
      </component>
    </div>
  </div>
</template>

<style src="./LogoCloud.scss"></style>

<script setup lang="ts">
import type { LogoCloudProps } from '../../types';
import { computed } from 'vue';

defineOptions({ name: 'FtpLogoCloud' });

const props = withDefaults(defineProps<LogoCloudProps>(), {
  logos: () => [],
  columns: 5,
  grayscale: false,
});

const additionalClasses = computed(() =>
  [props.grayscale && 'logo-cloud--grayscale'].filter(Boolean).join(' ')
);
</script>
