<script setup lang="ts">
import ProgressBar from '../../components/ProgressBar/ProgressBar.vue'
</script>

<template>
  <Story title="Components/ProgressBar" group="components">
    <Variant title="Determinate">
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <ProgressBar :value="25" />
        <ProgressBar :value="50" />
        <ProgressBar :value="75" />
        <ProgressBar :value="100" />
      </div>
    </Variant>

    <Variant title="Indeterminate">
      <div style="padding: 24px; max-width: 400px;">
        <ProgressBar mode="indeterminate" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstSlider v-model="state.value" title="Value" :min="0" :max="100" />
        <HstSelect v-model="state.mode" title="Mode" :options="['determinate', 'indeterminate']" />
        <HstCheckbox v-model="state.showValue" title="Show Value" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px; max-width: 400px;">
          <ProgressBar :value="state.value" :mode="state.mode" :show-value="state.showValue" />
        </div>
      </template>
    </Variant>
  </Story>
</template>
