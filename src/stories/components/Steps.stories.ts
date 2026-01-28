import type { Meta, StoryObj } from '@storybook/vue3';
import Steps from '../../components/Steps/Steps.vue';
import { ref } from 'vue';

const stepItems = [
  { label: 'Personal' },
  { label: 'Account' },
  { label: 'Review' },
  { label: 'Complete' },
];

const meta = {
  title: 'Components/Steps',
  component: Steps,
  tags: ['autodocs'],
  argTypes: {
    activeIndex: { control: { type: 'number', min: 0, max: 3 } },
    isReadonly: { control: 'boolean' },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Steps },
    setup() {
      const activeIndex = ref(0);
      return { args, stepItems, activeIndex };
    },
    template: `<Steps v-bind="args" :model="stepItems" v-model:active-index="activeIndex" />`,
  }),
};

export const SecondStep: Story = {
  render: (args) => ({
    components: { Steps },
    setup() {
      const activeIndex = ref(1);
      return { args, stepItems, activeIndex };
    },
    template: `<Steps v-bind="args" :model="stepItems" v-model:active-index="activeIndex" />`,
  }),
};

export const Readonly: Story = {
  render: (args) => ({
    components: { Steps },
    setup() {
      const activeIndex = ref(2);
      return { args, stepItems, activeIndex };
    },
    template: `<Steps v-bind="args" :model="stepItems" v-model:active-index="activeIndex" :is-readonly="true" />`,
  }),
};
