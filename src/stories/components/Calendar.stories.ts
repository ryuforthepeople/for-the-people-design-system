import type { Meta, StoryObj } from '@storybook/vue3';
import Calendar from '../../components/Calendar/Calendar.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    inline: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    placeholder: 'Select a date',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Calendar },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: '<Calendar v-bind="args" v-model="value" />',
  }),
};

export const Inline: Story = {
  render: (args) => ({
    components: { Calendar },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: '<Calendar v-bind="args" v-model="value" :inline="true" />',
  }),
};

export const Disabled: Story = {
  args: { isDisabled: true },
};
