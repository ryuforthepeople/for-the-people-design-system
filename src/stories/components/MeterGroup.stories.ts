import type { Meta, StoryObj } from '@storybook/vue3';
import MeterGroup from '../../components/MeterGroup/MeterGroup.vue';

const meta = {
  title: 'Components/MeterGroup',
  component: MeterGroup,
  tags: ['autodocs'],
  argTypes: {
    max: { control: { type: 'number', min: 1, max: 1000 } },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    showLabels: { control: 'boolean' },
  },
} satisfies Meta<typeof MeterGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { MeterGroup },
    setup() {
      const values = [
        { value: 25, label: 'Apps', color: 'primary' },
        { value: 15, label: 'Messages', color: 'success' },
        { value: 20, label: 'Media', color: 'warning' },
        { value: 10, label: 'System', color: 'danger' },
      ];
      return { args, values };
    },
    template: `<MeterGroup v-bind="args" :values="values" />`,
  }),
};

export const FullUsage: Story = {
  render: (args) => ({
    components: { MeterGroup },
    setup() {
      const values = [
        { value: 40, label: 'Used', color: 'danger' },
        { value: 35, label: 'Warning', color: 'warning' },
        { value: 25, label: 'Free', color: 'success' },
      ];
      return { args, values };
    },
    template: `<MeterGroup v-bind="args" :values="values" />`,
  }),
};

export const NoLabels: Story = {
  render: (args) => ({
    components: { MeterGroup },
    setup() {
      const values = [
        { value: 60, label: 'Progress', color: 'primary' },
      ];
      return { args, values };
    },
    template: `<MeterGroup v-bind="args" :values="values" :show-labels="false" />`,
  }),
};
