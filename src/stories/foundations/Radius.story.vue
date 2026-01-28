<script setup lang="ts">
import radiusTokens from '../../../tokens/primitives/radius.json'

const radii = Object.entries(radiusTokens.radius).map(([name, data]) => ({
  name,
  value: data.value,
}))
</script>

<template>
  <Story title="Foundations/Border Radius" group="foundations">
    <Variant title="Radius Scale">
      <div style="padding: 32px; display: flex; flex-wrap: wrap; gap: 24px; align-items: end;">
        <div v-for="r in radii" :key="r.name" style="text-align: center;">
          <div
            :style="{
              width: '96px',
              height: '96px',
              background: 'var(--surface-elevated)',
              border: '2px solid var(--border-default)',
              borderRadius: r.value,
            }"
          />
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 8px; font-family: monospace;">radius.{{ r.name }}</div>
          <div style="font-size: 12px; color: var(--text-subtle);">{{ r.value }}</div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
