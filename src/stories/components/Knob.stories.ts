import type { Meta, StoryObj } from '@storybook/vue3';
import Knob from '../../components/Knob/Knob.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Knob',
  component: Knob,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showValue: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    min: 0,
    max: 100,
  },
} satisfies Meta<typeof Knob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Knob },
    setup() {
      const value = ref(50);
      return { args, value };
    },
    template: '<Knob v-bind="args" v-model="value" />',
  }),
};

export const Small: Story = {
  render: (args) => ({
    components: { Knob },
    setup() {
      const value = ref(30);
      return { args, value };
    },
    template: '<Knob v-bind="args" v-model="value" size="sm" />',
  }),
};

export const Large: Story = {
  render: (args) => ({
    components: { Knob },
    setup() {
      const value = ref(75);
      return { args, value };
    },
    template: '<Knob v-bind="args" v-model="value" size="lg" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
