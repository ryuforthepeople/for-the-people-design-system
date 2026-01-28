<script setup lang="ts">
import shadowTokens from '../../../tokens/primitives/shadow.json'

const shadows = Object.entries(shadowTokens.shadow).map(([level, data]) => ({
  level,
  value: data.value,
  description: data.description,
}))

const levelNames: Record<string, string> = {
  '1': 'xs — Subtle',
  '2': 'sm — Low',
  '3': 'md — Medium',
  '4': 'lg — High',
  '5': 'xl — Highest',
}
</script>

<template>
  <Story title="Foundations/Shadows" group="foundations">
    <Variant title="Elevation Levels">
      <div style="padding: 32px; display: flex; flex-wrap: wrap; gap: 24px;">
        <div
          v-for="s in shadows"
          :key="s.level"
          :style="{
            width: '200px',
            height: '140px',
            background: 'var(--surface-panel)',
            borderRadius: '12px',
            boxShadow: s.value,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }"
        >
          <span style="font-family: Manrope, sans-serif; font-size: 16px; font-weight: 500; color: var(--text-heading); margin-bottom: 8px;">
            {{ levelNames[s.level] || `Level ${s.level}` }}
          </span>
          <span style="font-size: 12px; color: var(--text-muted); text-align: center;">{{ s.description }}</span>
          <code style="font-size: 10px; color: var(--text-subtle); margin-top: 8px; word-break: break-all; text-align: center;">shadow.{{ s.level }}</code>
        </div>
      </div>
    </Variant>
  </Story>
</template>
