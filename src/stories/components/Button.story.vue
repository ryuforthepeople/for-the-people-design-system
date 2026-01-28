<script setup lang="ts">
import Button from '../../components/Button/Button.vue'
</script>

<template>
  <Story title="Components/Button" group="components">
    <Variant title="Variants">
      <div style="padding: 24px; display: flex; flex-wrap: wrap; gap: 12px;">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="outlined" variant="outlined" />
        <Button label="Text" variant="text" />
        <Button label="Ghost" variant="ghost" />
      </div>
    </Variant>

    <Variant title="Sizes">
      <div style="padding: 24px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Button label="Small" size="sm" />
        <Button label="Medium" size="md" />
        <Button label="Large" size="lg" />
      </div>
    </Variant>

    <Variant title="States">
      <div style="padding: 24px; display: flex; flex-wrap: wrap; gap: 12px;">
        <Button label="Disabled" :is-disabled="true" />
        <Button label="Loading" :is-loading="true" />
        <Button label="Pill" :pill="true" />
      </div>
    </Variant>

    <Variant title="With Icon">
      <div style="padding: 24px; display: flex; flex-wrap: wrap; gap: 12px;">
        <Button label="Left Icon" icon="pi pi-check" icon-pos="left" />
        <Button label="Right Icon" icon="pi pi-arrow-right" icon-pos="right" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label" />
        <HstSelect v-model="state.variant" title="Variant" :options="['primary', 'secondary', 'outlined', 'text', 'ghost']" />
        <HstSelect v-model="state.size" title="Size" :options="['sm', 'md', 'lg']" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isLoading" title="Loading" />
        <HstCheckbox v-model="state.pill" title="Pill" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px;">
          <Button
            :label="state.label"
            :variant="state.variant"
            :size="state.size"
            :is-disabled="state.isDisabled"
            :is-loading="state.isLoading"
            :pill="state.pill"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>
