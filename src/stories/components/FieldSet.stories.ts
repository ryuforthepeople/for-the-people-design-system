import type { Meta, StoryObj } from '@storybook/vue3';
import FieldSet from '../../components/FieldSet/FieldSet.vue';

const meta = {
  title: 'Components/FieldSet',
  component: FieldSet,
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
    toggleable: { control: 'boolean' },
    collapsed: { control: 'boolean' },
  },
  args: {
    legend: 'Legend',
  },
} satisfies Meta<typeof FieldSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FieldSet },
    setup() { return { args }; },
    template: '<FieldSet v-bind="args"><p>Content inside the fieldset.</p></FieldSet>',
  }),
};

export const Toggleable: Story = {
  render: (args) => ({
    components: { FieldSet },
    setup() { return { args }; },
    template: '<FieldSet v-bind="args" :toggleable="true" legend="Toggleable"><p>This content can be collapsed.</p></FieldSet>',
  }),
};

export const Collapsed: Story = {
  render: (args) => ({
    components: { FieldSet },
    setup() { return { args }; },
    template: '<FieldSet v-bind="args" :toggleable="true" :collapsed="true" legend="Collapsed"><p>Hidden content.</p></FieldSet>',
  }),
};
