<script setup lang="ts">
import Avatar from '../../components/Avatar/Avatar.vue'
</script>

<template>
  <Story title="Components/Avatar" group="components">
    <Variant title="With Label">
      <div style="padding: 24px; display: flex; gap: 12px;">
        <Avatar label="A" size="small" />
        <Avatar label="B" size="medium" />
        <Avatar label="C" size="large" />
      </div>
    </Variant>

    <Variant title="With Image">
      <div style="padding: 24px; display: flex; gap: 12px;">
        <Avatar image="https://i.pravatar.cc/150?img=1" size="small" />
        <Avatar image="https://i.pravatar.cc/150?img=2" size="medium" />
        <Avatar image="https://i.pravatar.cc/150?img=3" size="large" />
      </div>
    </Variant>

    <Variant title="Shapes">
      <div style="padding: 24px; display: flex; gap: 12px;">
        <Avatar label="S" shape="square" size="large" />
        <Avatar label="C" shape="circle" size="large" />
      </div>
    </Variant>

    <Variant title="Playground">
      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label" />
        <HstSelect v-model="state.size" title="Size" :options="['small', 'medium', 'large']" />
        <HstSelect v-model="state.shape" title="Shape" :options="['square', 'circle']" />
      </template>
      <template #default="{ state }">
        <div style="padding: 24px;">
          <Avatar :label="state.label" :size="state.size" :shape="state.shape" />
        </div>
      </template>
    </Variant>
  </Story>
</template>
