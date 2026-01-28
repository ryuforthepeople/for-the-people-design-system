import type { Meta, StoryObj } from '@storybook/vue3';
import InputOtp from '../../components/InputOtp/InputOtp.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/InputOtp',
  component: InputOtp,
  tags: ['autodocs'],
  argTypes: {
    length: { control: 'number' },
    mask: { control: 'boolean' },
    integerOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    length: 4,
  },
} satisfies Meta<typeof InputOtp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputOtp v-bind="args" v-model="value" />',
  }),
};

export const SixDigits: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputOtp v-bind="args" v-model="value" :length="6" :separator="3" />',
  }),
};

export const Masked: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputOtp v-bind="args" v-model="value" :mask="true" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
