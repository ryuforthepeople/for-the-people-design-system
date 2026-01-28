<script setup lang="ts">
import primitiveColors from '../../../tokens/primitives/color.json'
import semanticColors from '../../../tokens/semantics/color.json'

const primitiveScales = Object.entries(primitiveColors).map(([name, steps]) => ({
  name,
  steps: Object.entries(steps as Record<string, { value: string }>).map(([step, data]) => ({
    step,
    value: data.value,
  })),
}))

function flattenSemantics(obj: any, prefix = ''): Array<{ token: string; value: string; description?: string }> {
  const result: Array<{ token: string; value: string; description?: string }> = []
  for (const [key, val] of Object.entries(obj)) {
    const path = prefix ? `${prefix}-${key}` : key
    if (val && typeof val === 'object' && 'value' in val) {
      result.push({ token: path, value: (val as any).value, description: (val as any).description })
    } else if (val && typeof val === 'object') {
      result.push(...flattenSemantics(val, path))
    }
  }
  return result
}

const semanticGroups = Object.entries(semanticColors).map(([group, data]) => ({
  group,
  tokens: flattenSemantics(data),
}))

function resolveColor(val: string): string {
  const match = val.match(/^\{(\w+)\.(\w+)\}$/)
  if (match) {
    const [, scale, step] = match
    const s = primitiveColors as any
    return s[scale]?.[step]?.value ?? val
  }
  return val
}

function isLight(hex: string): boolean {
  if (!hex.startsWith('#')) return false
  const c = hex.slice(1)
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 140
}
</script>

<template>
  <Story title="Foundations/Colors" group="foundations">
    <Variant title="Primitive Colors">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 24px; color: var(--text-heading);">Primitive Color Scales</h2>
        <div v-for="scale in primitiveScales" :key="scale.name" style="margin-bottom: 32px;">
          <h3 style="font-family: Manrope, sans-serif; margin-bottom: 12px; color: var(--text-secondary); text-transform: capitalize;">{{ scale.name }}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <div v-for="s in scale.steps" :key="s.step" style="text-align: center;">
              <div
                :style="{
                  width: '72px',
                  height: '72px',
                  borderRadius: '8px',
                  backgroundColor: s.value,
                  border: '1px solid var(--border-subtle)',
                }"
              />
              <div style="font-size: 12px; margin-top: 4px; color: var(--text-muted);">{{ scale.name }}.{{ s.step }}</div>
              <div style="font-size: 11px; color: var(--text-subtle);">{{ s.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </Variant>

    <Variant title="Semantic Colors">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 24px; color: var(--text-heading);">Semantic Color Tokens</h2>
        <div v-for="group in semanticGroups" :key="group.group" style="margin-bottom: 32px;">
          <h3 style="font-family: Manrope, sans-serif; margin-bottom: 12px; color: var(--text-secondary); text-transform: capitalize;">{{ group.group }}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <div v-for="t in group.tokens" :key="t.token" style="text-align: center;">
              <div
                :style="{
                  width: '72px',
                  height: '72px',
                  borderRadius: '8px',
                  backgroundColor: resolveColor(t.value),
                  border: '1px solid var(--border-subtle)',
                }"
              />
              <div style="font-size: 11px; margin-top: 4px; color: var(--text-muted); max-width: 80px; word-break: break-all;">{{ t.token }}</div>
              <div style="font-size: 10px; color: var(--text-subtle);">{{ t.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
