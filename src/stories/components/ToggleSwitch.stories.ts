import type { Meta, StoryObj } from '@storybook/vue3';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const value = ref(false);
      return { args, value };
    },
    template: '<ToggleSwitch v-bind="args" v-model="value" />',
  }),
};

export const Checked: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const value = ref(true);
      return { args, value };
    },
    template: '<ToggleSwitch v-bind="args" v-model="value" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
