<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../../components/Dialog/Dialog.vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <Story title="Components/Dialog" group="components">
    <Variant title="Modal Dialog">
      <div style="padding: 24px;">
        <button
          style="padding: 8px 16px; background: var(--intent-action-default); color: white; border: none; border-radius: 6px; cursor: pointer;"
          @click="visible1 = true"
        >Open Modal</button>
        <Dialog v-model:visible="visible1" header="Modal Dialog" :modal="true" :closable="true">
          <p style="color: var(--text-default);">This is a modal dialog. Click outside or press Escape to close.</p>
        </Dialog>
      </div>
    </Variant>

    <Variant title="Draggable Dialog">
      <div style="padding: 24px;">
        <button
          style="padding: 8px 16px; background: var(--intent-action-default); color: white; border: none; border-radius: 6px; cursor: pointer;"
          @click="visible2 = true"
        >Open Draggable</button>
        <Dialog v-model:visible="visible2" header="Draggable Dialog" :draggable="true" :closable="true">
          <p style="color: var(--text-default);">This dialog can be dragged by its header.</p>
        </Dialog>
      </div>
    </Variant>
  </Story>
</template>
