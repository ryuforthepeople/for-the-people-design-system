<script setup lang="ts">
import Badge from '../../components/Badge/Badge.vue'
</script>

<template>
  <Story title="Components/Badge" group="components">
    <Variant title="Severities">
      <div style="padding: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
        <Badge :value="5" severity="primary" />
        <Badge :value="12" severity="success" />
        <Badge :value="3" severity="warning" />
        <Badge :value="99" severity="danger" />
        <Badge :value="7" severity="info" />
      </div>
    </Variant>

    <Variant title="Sizes">
      <div style="padding: 24px; display: flex; gap: 12px; align-items: center;">
        <Badge :value="5" size="sm" />
        <Badge :value="5" size="md" />
        <Badge :value="5" size="lg" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstText v-model="state.value" title="Value" />
        <HstSelect v-model="state.severity" title="Severity" :options="['primary', 'success', 'warning', 'danger', 'info']" />
        <HstSelect v-model="state.size" title="Size" :options="['sm', 'md', 'lg']" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px;">
          <Badge :value="state.value" :severity="state.severity" :size="state.size" />
        </div>
      </template>
    </Variant>
  </Story>
</template>
