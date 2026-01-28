import type { Meta, StoryObj } from '@storybook/vue3';
import VirtualScroller from '../../components/VirtualScroller/VirtualScroller.vue';

const generateItems = (count: number) => Array.from({ length: count }, (_, i) => `Item ${i + 1}`);

const meta = {
  title: 'Components/VirtualScroller',
  component: VirtualScroller,
  tags: ['autodocs'],
  argTypes: {
    itemSize: { control: { type: 'number', min: 20, max: 100 } },
    scrollHeight: { control: 'text' },
    striped: { control: 'boolean' },
    showBorder: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof VirtualScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VirtualScroller },
    setup() {
      const items = generateItems(10000);
      return { args, items };
    },
    template: `
      <VirtualScroller v-bind="args" :items="items" :item-size="40" scroll-height="400px">
        <template #default="{ item, index }">
          <div style="padding: 0.5rem 1rem;">{{ item }}</div>
        </template>
      </VirtualScroller>
    `,
  }),
};

export const Striped: Story = {
  render: (args) => ({
    components: { VirtualScroller },
    setup() {
      const items = generateItems(10000);
      return { args, items };
    },
    template: `
      <VirtualScroller v-bind="args" :items="items" :item-size="40" scroll-height="400px" :striped="true">
        <template #default="{ item }">
          <div style="padding: 0.5rem 1rem;">{{ item }}</div>
        </template>
      </VirtualScroller>
    `,
  }),
};

export const Loading: Story = {
  render: (args) => ({
    components: { VirtualScroller },
    setup() { return { args }; },
    template: `
      <VirtualScroller v-bind="args" :items="[]" :item-size="40" scroll-height="400px" :loading="true" />
    `,
  }),
};
