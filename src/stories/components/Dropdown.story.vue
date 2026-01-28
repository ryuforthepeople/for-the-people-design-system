<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '../../components/Dropdown/Dropdown.vue'

const selected = ref(null)
const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' },
]
</script>

<template>
  <Story title="Components/Dropdown" group="components">
    <Variant title="Basic">
      <div style="padding: 24px; max-width: 300px;">
        <Dropdown v-model="selected" :options="options" option-label="label" option-value="value" placeholder="Select an option" />
      </div>
    </Variant>

    <Variant title="With Filter">
      <div style="padding: 24px; max-width: 300px;">
        <Dropdown v-model="selected" :options="options" option-label="label" option-value="value" placeholder="Search..." :filter="true" />
      </div>
    </Variant>

    <Variant title="Disabled">
      <div style="padding: 24px; max-width: 300px;">
        <Dropdown :options="options" option-label="label" option-value="value" placeholder="Disabled" :is-disabled="true" />
      </div>
    </Variant>
  </Story>
</template>
