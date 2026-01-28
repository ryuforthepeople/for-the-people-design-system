import type { Meta, StoryObj } from '@storybook/vue3';
import ColorPicker from '../../components/ColorPicker/ColorPicker.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    inline: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ColorPicker },
    setup() {
      const color = ref('#3b82f6');
      return { args, color };
    },
    template: '<ColorPicker v-bind="args" v-model="color" />',
  }),
};

export const Inline: Story = {
  render: (args) => ({
    components: { ColorPicker },
    setup() {
      const color = ref('#10b981');
      return { args, color };
    },
    template: '<ColorPicker v-bind="args" v-model="color" :inline="true" />',
  }),
};

export const Disabled: Story = {
  args: { isDisabled: true },
};
