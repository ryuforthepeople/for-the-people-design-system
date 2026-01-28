<script setup lang="ts">
import { ref } from 'vue'
import Toast from '../../components/Toast/Toast.vue'

const toasts = ref([
  { id: '1', severity: 'success', summary: 'Success', detail: 'Operation completed successfully', closable: true },
  { id: '2', severity: 'info', summary: 'Info', detail: 'Here is some information', closable: true },
  { id: '3', severity: 'warning', summary: 'Warning', detail: 'Please review before continuing', closable: true },
  { id: '4', severity: 'error', summary: 'Error', detail: 'Something went wrong', closable: true },
])
</script>

<template>
  <Story title="Components/Toast" group="components">
    <Variant title="All Severities">
      <div style="padding: 24px; position: relative; min-height: 400px;">
        <p style="color: var(--text-muted); margin-bottom: 16px;">Toast messages with all severity levels (shown inline for demo):</p>
        <Toast :toasts="toasts" position="top-right" />
      </div>
    </Variant>
  </Story>
</template>
