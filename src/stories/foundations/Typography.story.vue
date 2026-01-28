<script setup lang="ts">
const headings = [
  { name: '2xl', size: '64px', lineHeight: '1.1' },
  { name: 'xl', size: '48px', lineHeight: '1.25' },
  { name: 'l', size: '40px', lineHeight: '1.25' },
  { name: 'm', size: '32px', lineHeight: '1.25' },
  { name: 's', size: '24px', lineHeight: '1.25' },
  { name: 'xs', size: '20px', lineHeight: '1.25' },
]

const bodyText = [
  { name: '2xl', size: '28px', lineHeight: '1.25' },
  { name: 'xl', size: '24px', lineHeight: '1.25' },
  { name: 'l', size: '20px', lineHeight: '1.5' },
  { name: 'm', size: '18px', lineHeight: '1.5' },
  { name: 's', size: '16px', lineHeight: '1.5' },
  { name: 'xs', size: '14px', lineHeight: '1.5' },
  { name: '2xs', size: '12px', lineHeight: '1.5' },
  { name: '3xs', size: '10px', lineHeight: '1.5' },
]
</script>

<template>
  <Story title="Foundations/Typography" group="foundations">
    <Variant title="Font Families">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 24px; color: var(--text-heading);">Font Families</h2>
        <div style="margin-bottom: 32px; padding: 24px; background: var(--surface-panel); border-radius: 8px;">
          <p style="font-family: Manrope, sans-serif; font-size: 32px; font-weight: 500; color: var(--text-heading); margin-bottom: 8px;">Manrope — Headings</p>
          <p style="font-family: Manrope, sans-serif; color: var(--text-muted);">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
        </div>
        <div style="padding: 24px; background: var(--surface-panel); border-radius: 8px;">
          <p style="font-family: 'DM Sans', sans-serif; font-size: 32px; color: var(--text-heading); margin-bottom: 8px;">DM Sans — Body Text</p>
          <p style="font-family: 'DM Sans', sans-serif; color: var(--text-muted);">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
        </div>
      </div>
    </Variant>

    <Variant title="Headings">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 24px; color: var(--text-heading);">Heading Scale</h2>
        <div v-for="h in headings" :key="h.name" style="margin-bottom: 24px; padding: 16px; background: var(--surface-panel); border-radius: 8px; display: flex; align-items: baseline; gap: 16px;">
          <span style="min-width: 60px; font-size: 12px; color: var(--text-subtle);">heading-{{ h.name }}</span>
          <span style="min-width: 60px; font-size: 12px; color: var(--text-muted);">{{ h.size }}</span>
          <span :style="{ fontFamily: 'Manrope, sans-serif', fontSize: h.size, lineHeight: h.lineHeight, fontWeight: '500', color: 'var(--text-heading)' }">
            The quick brown fox
          </span>
        </div>
      </div>
    </Variant>

    <Variant title="Body Text">
      <div style="padding: 24px;">
        <h2 style="font-family: Manrope, sans-serif; margin-bottom: 24px; color: var(--text-heading);">Body Text Scale</h2>
        <div v-for="t in bodyText" :key="t.name" style="margin-bottom: 16px; padding: 12px; background: var(--surface-panel); border-radius: 8px; display: flex; align-items: baseline; gap: 16px;">
          <span style="min-width: 50px; font-size: 12px; color: var(--text-subtle);">text-{{ t.name }}</span>
          <span style="min-width: 50px; font-size: 12px; color: var(--text-muted);">{{ t.size }}</span>
          <span :style="{ fontFamily: '\'DM Sans\', sans-serif', fontSize: t.size, lineHeight: t.lineHeight, color: 'var(--text-default)' }">
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      </div>
    </Variant>
  </Story>
</template>
