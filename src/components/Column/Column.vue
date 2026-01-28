<script setup>
/**
 * Column component for DataTable
 *
 * This component defines column configuration for a DataTable.
 * It doesn't render anything itself - the parent DataTable reads
 * its props and slots to configure column rendering.
 */

defineOptions({
  name: "Column"
});

const props = defineProps({
  field: {
    type: String,
    default: null
  },
  header: {
    type: String,
    default: null
  },
  footer: {
    type: String,
    default: null
  },
  sortable: {
    type: Boolean,
    default: false
  },
  sortField: {
    type: String,
    default: null
  },
  filterField: {
    type: String,
    default: null
  },
  filterable: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: null
  },
  minWidth: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String,
    default: null
  },
  align: {
    type: String,
    default: "left",
    validator: (v) => ["left", "center", "right"].includes(v)
  },
  headerAlign: {
    type: String,
    default: null,
    validator: (v) => v === null || ["left", "center", "right"].includes(v)
  },
  footerAlign: {
    type: String,
    default: null,
    validator: (v) => v === null || ["left", "center", "right"].includes(v)
  },
  frozen: {
    type: Boolean,
    default: false
  },
  hidden: {
    type: Boolean,
    default: false
  },
  expander: {
    type: Boolean,
    default: false
  },
  selectionMode: {
    type: String,
    default: null,
    validator: (v) => v === null || ["single", "multiple"].includes(v)
  },
  rowspan: {
    type: Number,
    default: 1
  },
  colspan: {
    type: Number,
    default: 1
  }
});

// Expose props for parent DataTable to access
defineExpose({
  props
});
</script>

<template>
  <!-- Column is a configuration component, it doesn't render visible content -->
  <slot />
</template>
