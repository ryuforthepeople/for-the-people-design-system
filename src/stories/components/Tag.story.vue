<script setup lang="ts">
import Tag from '../../components/Tag/Tag.vue'
</script>

<template>
  <Story title="Components/Tag" group="components">
    <Variant title="Colors">
      <div style="padding: 24px; display: flex; gap: 8px; flex-wrap: wrap;">
        <Tag value="Neutral" color="neutral" />
        <Tag value="Success" color="success" />
        <Tag value="Warning" color="warning" />
        <Tag value="Danger" color="danger" />
        <Tag value="Info" color="info" />
      </div>
    </Variant>

    <Variant title="Rounded">
      <div style="padding: 24px; display: flex; gap: 8px; flex-wrap: wrap;">
        <Tag value="Rounded" color="neutral" :rounded="true" />
        <Tag value="Success" color="success" :rounded="true" />
        <Tag value="Warning" color="warning" :rounded="true" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstText v-model="state.value" title="Value" />
        <HstSelect v-model="state.color" title="Color" :options="['neutral', 'success', 'warning', 'danger', 'info']" />
        <HstCheckbox v-model="state.rounded" title="Rounded" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px;">
          <Tag :value="state.value" :color="state.color" :rounded="state.rounded" />
        </div>
      </template>
    </Variant>
  </Story>
</template>
