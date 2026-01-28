import type { Meta, StoryObj } from '@storybook/vue3';
import ToggleButton from '../../components/ToggleButton/ToggleButton.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    onLabel: { control: 'text' },
    offLabel: { control: 'text' },
    onIcon: { control: 'text' },
    offIcon: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
  },
  args: {
    onLabel: 'On',
    offLabel: 'Off',
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ToggleButton },
    setup() {
      const value = ref(false);
      return { args, value };
    },
    template: '<ToggleButton v-bind="args" v-model="value" />',
  }),
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { ToggleButton },
    setup() {
      const value = ref(true);
      return { args, value };
    },
    template: '<ToggleButton v-bind="args" v-model="value" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-lock" offIcon="pi pi-lock-open" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
