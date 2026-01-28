<script setup lang="ts">
import { ref } from 'vue'
import InputText from '../../components/InputText/InputText.vue'

const value = ref('')
</script>

<template>
  <Story title="Components/InputText" group="components">
    <Variant title="Sizes">
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <InputText v-model="value" size="sm" placeholder="Small input" />
        <InputText v-model="value" size="md" placeholder="Medium input" />
        <InputText v-model="value" size="lg" placeholder="Large input" />
      </div>
    </Variant>

    <Variant title="States">
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <InputText model-value="" placeholder="Default" />
        <InputText model-value="" placeholder="Disabled" :is-disabled="true" />
        <InputText model-value="" placeholder="Invalid" :is-invalid="true" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstSelect v-model="state.size" title="Size" :options="['sm', 'md', 'lg']" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px; max-width: 320px;">
          <InputText
            v-model="value"
            :placeholder="state.placeholder"
            :size="state.size"
            :is-disabled="state.isDisabled"
            :is-invalid="state.isInvalid"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>
