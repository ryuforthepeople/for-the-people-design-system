<script setup lang="ts">
import { ref } from 'vue'
import Menu from '../../components/Menu/Menu.vue'

const menuRef = ref()
const items = [
  { label: 'New', icon: 'pi pi-plus' },
  { label: 'Open', icon: 'pi pi-folder-open' },
  { separator: true },
  { label: 'Save', icon: 'pi pi-save' },
  { label: 'Delete', icon: 'pi pi-trash', disabled: true },
]
</script>

<template>
  <Story title="Components/Menu" group="components">
    <Variant title="Inline">
      <div style="padding: 24px; max-width: 250px;">
        <Menu :model="items" />
      </div>
    </Variant>

    <Variant title="Popup">
      <div style="padding: 24px;">
        <button
          style="padding: 8px 16px; background: var(--intent-action-default); color: white; border: none; border-radius: 6px; cursor: pointer;"
          @click="menuRef?.toggle($event)"
        >Toggle Menu</button>
        <Menu ref="menuRef" :model="items" :popup="true" />
      </div>
    </Variant>
  </Story>
</template>
