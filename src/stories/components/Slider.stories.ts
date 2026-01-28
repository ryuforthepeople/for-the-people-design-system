import type { Meta, StoryObj } from '@storybook/vue3';
import Slider from '../../components/Slider/Slider.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(50);
      return { args, value };
    },
    template: '<Slider v-bind="args" v-model="value" />',
  }),
};

export const WithStep: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(20);
      return { args, value };
    },
    template: '<Slider v-bind="args" v-model="value" :step="10" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
