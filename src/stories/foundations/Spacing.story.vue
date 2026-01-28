<script setup lang="ts">
import primitiveSpacing from '../../../tokens/primitives/spacing.json'
import semanticSpacing from '../../../tokens/semantics/spacing.json'

const spacingScale = Object.entries(primitiveSpacing.spacing).map(([step, data]) => ({
  step,
  value: data.value,
}))

const semanticCategories = Object.entries(semanticSpacing).map(([category, sizes]) => ({
  category,
  sizes: Object.entries(sizes as Record<string, { value: string; description?: string }>).map(([size, data]) => ({
    size,
    ref: data.value,
  })),
}))
</script>

<template>
  <Story title="Foundations/Spacing" group="foundations">
    <Variant title="Primitive Scale">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 8px; color: var(--text-heading);">Spacing Scale</h2>
        <p style="font-family: 'DM Sans', sans-serif; color: var(--text-muted); margin-bottom: 24px;">Fibonacci-based spacing scale</p>
        <div v-for="s in spacingScale" :key="s.step" style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
          <span style="min-width: 80px; font-size: 13px; color: var(--text-muted); font-family: monospace;">spacing.{{ s.step }}</span>
          <span style="min-width: 50px; font-size: 13px; color: var(--text-subtle); font-family: monospace;">{{ s.value }}</span>
          <div
            :style="{
              width: s.value === '0' ? '2px' : s.value,
              height: '24px',
              background: 'linear-gradient(90deg, var(--border-vibrant-start), var(--border-vibrant-end))',
              borderRadius: '4px',
              minWidth: '2px',
            }"
          />
        </div>
      </div>
    </Variant>

    <Variant title="Semantic Spacing">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 24px; color: var(--text-heading);">Semantic Spacing</h2>
        <div v-for="cat in semanticCategories" :key="cat.category" style="margin-bottom: 32px;">
          <h3 style="font-family: Manrope, sans-serif; margin-bottom: 12px; color: var(--text-secondary); text-transform: capitalize;">{{ cat.category }}</h3>
          <div style="display: grid; grid-template-columns: 120px 120px 1fr; gap: 8px; align-items: center;">
            <template v-for="s in cat.sizes" :key="s.size">
              <span style="font-size: 13px; color: var(--text-muted); font-family: monospace;">{{ cat.category }}.{{ s.size }}</span>
              <span style="font-size: 12px; color: var(--text-subtle);">{{ s.ref }}</span>
              <div style="display: flex; align-items: center;">
                <div
                  :style="{
                    width: '24px',
                    height: '24px',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '4px',
                  }"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
