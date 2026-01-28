import type { Meta, StoryObj } from '@storybook/vue3';
import InputSwitch from '../../components/InputSwitch/InputSwitch.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/InputSwitch',
  component: InputSwitch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof InputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InputSwitch },
    setup() {
      const value = ref(false);
      return { args, value };
    },
    template: '<InputSwitch v-bind="args" v-model="value" />',
  }),
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { InputSwitch },
    setup() {
      const value = ref(true);
      return { args, value };
    },
    template: '<InputSwitch v-bind="args" v-model="value" label="Enable notifications" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
