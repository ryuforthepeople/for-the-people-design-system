<script setup lang="ts">
import DataTable from '../../components/DataTable/DataTable.vue'

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'status', header: 'Status' },
]

const data = [
  { name: 'Alice Johnson', role: 'Designer', status: 'Active' },
  { name: 'Bob Smith', role: 'Developer', status: 'Active' },
  { name: 'Charlie Lee', role: 'PM', status: 'Inactive' },
  { name: 'Diana Chen', role: 'Designer', status: 'Active' },
  { name: 'Eve Williams', role: 'Developer', status: 'Active' },
  { name: 'Frank Brown', role: 'QA', status: 'Active' },
  { name: 'Grace Kim', role: 'Developer', status: 'Inactive' },
  { name: 'Hank Davis', role: 'PM', status: 'Active' },
]
</script>

<template>
  <Story title="Components/DataTable" group="components">
    <Variant title="Basic">
      <div style="padding: 24px;">
        <DataTable :columns="columns" :value="data" />
      </div>
    </Variant>

    <Variant title="Sortable with Pagination">
      <div style="padding: 24px;">
        <DataTable :columns="columns" :value="data" :paginator="true" :rows="5" :striped="true" />
      </div>
    </Variant>
  </Story>
</template>
