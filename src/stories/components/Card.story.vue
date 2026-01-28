<script setup lang="ts">
import Card from '../../components/Card/Card.vue'
</script>

<template>
  <Story title="Components/Card" group="components">
    <Variant title="Default">
      <div style="padding: 24px; max-width: 400px;">
        <Card>
          <template #title>Card Title</template>
          <template #subtitle>Subtitle text</template>
          <template #content>
            <p>This is the card content. Cards are used to group related information together.</p>
          </template>
        </Card>
      </div>
    </Variant>

    <Variant title="Highlighted">
      <div style="padding: 24px; max-width: 400px;">
        <Card variant="highlighted">
          <template #title>Highlighted Card</template>
          <template #content>
            <p>A card with the highlighted variant applied.</p>
          </template>
        </Card>
      </div>
    </Variant>

    <Variant title="With Header & Footer">
      <div style="padding: 24px; max-width: 400px;">
        <Card>
          <template #header>
            <div style="height: 160px; background: linear-gradient(135deg, var(--border-vibrant-start), var(--border-vibrant-end)); border-radius: 8px 8px 0 0;" />
          </template>
          <template #title>Full Card</template>
          <template #subtitle>With all slots</template>
          <template #content>
            <p>Content area with header image and footer actions.</p>
          </template>
          <template #footer>
            <div style="display: flex; gap: 8px; justify-content: flex-end;">
              <button style="padding: 8px 16px; background: transparent; color: var(--text-muted); border: none; cursor: pointer;">Cancel</button>
              <button style="padding: 8px 16px; background: var(--intent-action-default); color: white; border: none; border-radius: 6px; cursor: pointer;">Save</button>
            </div>
          </template>
        </Card>
      </div>
    </Variant>
  </Story>
</template>
