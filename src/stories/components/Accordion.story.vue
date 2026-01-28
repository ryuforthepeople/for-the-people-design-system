<script setup lang="ts">
import Accordion from '../../components/Accordion/Accordion.vue'
import AccordionTab from '../../components/Accordion/AccordionTab.vue'
</script>

<template>
  <Story title="Components/Accordion" group="components">
    <Variant title="Single Open">
      <div style="padding: 24px; max-width: 500px;">
        <Accordion :active-index="0">
          <AccordionTab header="Section One">
            <p style="color: var(--text-default);">Content for the first section. Only one section can be open at a time.</p>
          </AccordionTab>
          <AccordionTab header="Section Two">
            <p style="color: var(--text-default);">Content for the second section.</p>
          </AccordionTab>
          <AccordionTab header="Section Three">
            <p style="color: var(--text-default);">Content for the third section.</p>
          </AccordionTab>
        </Accordion>
      </div>
    </Variant>

    <Variant title="Multiple Open">
      <div style="padding: 24px; max-width: 500px;">
        <Accordion :multiple="true" :active-index="[0, 1]">
          <AccordionTab header="First Panel">
            <p style="color: var(--text-default);">Multiple panels can be open simultaneously.</p>
          </AccordionTab>
          <AccordionTab header="Second Panel">
            <p style="color: var(--text-default);">This panel is also open by default.</p>
          </AccordionTab>
          <AccordionTab header="Third Panel">
            <p style="color: var(--text-default);">Click to expand this panel too.</p>
          </AccordionTab>
        </Accordion>
      </div>
    </Variant>
  </Story>
</template>
