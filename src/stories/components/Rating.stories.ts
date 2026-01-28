import type { Meta, StoryObj } from '@storybook/vue3';
import Rating from '../../components/Rating/Rating.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    stars: { control: 'number' },
    readonly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    cancel: { control: 'boolean' },
  },
  args: {
    stars: 5,
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(3);
      return { args, value };
    },
    template: '<Rating v-bind="args" v-model="value" />',
  }),
};

export const Readonly: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(4);
      return { args, value };
    },
    template: '<Rating v-bind="args" v-model="value" :readonly="true" />',
  }),
};

export const NoCancel: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(2);
      return { args, value };
    },
    template: '<Rating v-bind="args" v-model="value" :cancel="false" />',
  }),
};

export const TenStars: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(7);
      return { args, value };
    },
    template: '<Rating v-bind="args" v-model="value" :stars="10" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
