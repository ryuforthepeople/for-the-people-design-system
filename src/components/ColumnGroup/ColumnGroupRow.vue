<script setup>
/**
 * Row component for ColumnGroup
 *
 * Represents a row within a ColumnGroup. Used in DataTable
 * to define multi-row headers and footers with spanning columns.
 */

defineOptions({
  name: "Row"
});

// Expose for parent ColumnGroup to access
defineExpose({});
</script>

<template>
  <!-- Row wraps Column components for grouped headers/footers -->
  <slot />
</template>
