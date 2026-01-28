import type { Meta, StoryObj } from '@storybook/vue3';
import MultiSelect from '../../components/MultiSelect/MultiSelect.vue';
import { ref } from 'vue';

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
];

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    display: { control: 'select', options: ['comma', 'chip'] },
    filter: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Select frameworks',
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { MultiSelect },
    setup() {
      const value = ref([]);
      return { args, value, options };
    },
    template: '<MultiSelect v-bind="args" v-model="value" :options="options" />',
  }),
};

export const ChipDisplay: Story = {
  render: (args) => ({
    components: { MultiSelect },
    setup() {
      const value = ref(['vue', 'react']);
      return { args, value, options };
    },
    template: '<MultiSelect v-bind="args" v-model="value" :options="options" display="chip" />',
  }),
};

export const WithFilter: Story = {
  render: (args) => ({
    components: { MultiSelect },
    setup() {
      const value = ref([]);
      return { args, value, options };
    },
    template: '<MultiSelect v-bind="args" v-model="value" :options="options" :filter="true" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
