<script setup lang="ts">
import Tabs from '../../components/Tabs/Tabs.vue'
import TabPanel from '../../components/Tabs/TabPanel.vue'
</script>

<template>
  <Story title="Components/Tabs" group="components">
    <Variant title="Basic">
      <div style="padding: 24px; max-width: 500px;">
        <Tabs>
          <TabPanel header="Overview">
            <p style="color: var(--text-default); padding: 16px;">Overview content goes here.</p>
          </TabPanel>
          <TabPanel header="Details">
            <p style="color: var(--text-default); padding: 16px;">Detail information displayed here.</p>
          </TabPanel>
          <TabPanel header="Settings">
            <p style="color: var(--text-default); padding: 16px;">Settings panel content.</p>
          </TabPanel>
        </Tabs>
      </div>
    </Variant>

    <Variant title="With Disabled Tab">
      <div style="padding: 24px; max-width: 500px;">
        <Tabs>
          <TabPanel header="Active">
            <p style="color: var(--text-default); padding: 16px;">This tab is active.</p>
          </TabPanel>
          <TabPanel header="Disabled" :disabled="true">
            <p style="color: var(--text-default); padding: 16px;">This tab is disabled.</p>
          </TabPanel>
          <TabPanel header="Another">
            <p style="color: var(--text-default); padding: 16px;">Another tab panel.</p>
          </TabPanel>
        </Tabs>
      </div>
    </Variant>
  </Story>
</template>
