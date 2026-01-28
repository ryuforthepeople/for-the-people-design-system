import type { Meta, StoryObj } from '@storybook/vue3';
import Timeline from '../../components/Timeline/Timeline.vue';

const events = [
  { title: 'Order Placed', description: 'Your order has been placed.', date: '2024-01-15', color: 'primary' },
  { title: 'Processing', description: 'Order is being processed.', date: '2024-01-16', color: 'success' },
  { title: 'Shipped', description: 'Package has been shipped.', date: '2024-01-17', color: 'warning' },
  { title: 'Delivered', description: 'Package delivered.', date: '2024-01-18', color: 'success' },
];

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['left', 'right', 'alternate'] },
    layout: { control: 'select', options: ['vertical', 'horizontal'] },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Timeline },
    setup() { return { args, events }; },
    template: `<Timeline v-bind="args" :value="events" />`,
  }),
};

export const Alternate: Story = {
  render: (args) => ({
    components: { Timeline },
    setup() { return { args, events }; },
    template: `<Timeline v-bind="args" :value="events" align="alternate" />`,
  }),
};

export const RightAligned: Story = {
  render: (args) => ({
    components: { Timeline },
    setup() { return { args, events }; },
    template: `<Timeline v-bind="args" :value="events" align="right" />`,
  }),
};
