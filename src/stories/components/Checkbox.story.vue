<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '../../components/Checkbox/Checkbox.vue'

const checked = ref(true)
const unchecked = ref(false)
</script>

<template>
  <Story title="Components/Checkbox" group="components">
    <Variant title="States">
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 12px;">
        <Checkbox v-model="unchecked" label="Unchecked" />
        <Checkbox v-model="checked" label="Checked" />
        <Checkbox :model-value="false" :indeterminate="true" label="Indeterminate" />
        <Checkbox :model-value="false" :is-disabled="true" label="Disabled" />
        <Checkbox :model-value="true" :is-disabled="true" label="Disabled Checked" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label" />
        <HstCheckbox v-model="state.checked" title="Checked" />
        <HstCheckbox v-model="state.indeterminate" title="Indeterminate" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px;">
          <Checkbox
            v-model="state.checked"
            :label="state.label"
            :indeterminate="state.indeterminate"
            :is-disabled="state.isDisabled"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>
