import type { Meta, StoryObj } from '@storybook/vue3';
import InputNumber from '../../components/InputNumber/InputNumber.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showButtons: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    showButtons: true,
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InputNumber },
    setup() {
      const value = ref(42);
      return { args, value };
    },
    template: '<InputNumber v-bind="args" v-model="value" />',
  }),
};

export const MinMax: Story = {
  render: (args) => ({
    components: { InputNumber },
    setup() {
      const value = ref(5);
      return { args, value };
    },
    template: '<InputNumber v-bind="args" v-model="value" :min="0" :max="10" />',
  }),
};

export const WithoutButtons: Story = {
  render: (args) => ({
    components: { InputNumber },
    setup() {
      const value = ref(100);
      return { args, value };
    },
    template: '<InputNumber v-bind="args" v-model="value" :showButtons="false" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
