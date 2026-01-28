import type { Meta, StoryObj } from '@storybook/vue3';
import ListBox from '../../components/ListBox/ListBox.vue';
import { ref } from 'vue';

const options = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Paris', value: 'PRS' },
  { label: 'Tokyo', value: 'TKY' },
  { label: 'Berlin', value: 'BRL', disabled: true },
];

const meta = {
  title: 'Components/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    filter: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ListBox },
    setup() {
      const value = ref(null);
      return { args, value, options };
    },
    template: '<ListBox v-bind="args" v-model="value" :options="options" />',
  }),
};

export const Multiple: Story = {
  render: (args) => ({
    components: { ListBox },
    setup() {
      const value = ref([]);
      return { args, value, options };
    },
    template: '<ListBox v-bind="args" v-model="value" :options="options" :multiple="true" />',
  }),
};

export const WithFilter: Story = {
  render: (args) => ({
    components: { ListBox },
    setup() {
      const value = ref(null);
      return { args, value, options };
    },
    template: '<ListBox v-bind="args" v-model="value" :options="options" :filter="true" />',
  }),
};
