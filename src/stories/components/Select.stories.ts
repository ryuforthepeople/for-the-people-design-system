import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Select from '../../components/Select/Select.vue';

const options = [
  { label: 'Amsterdam', value: 'ams' },
  { label: 'Berlin', value: 'ber' },
  { label: 'London', value: 'lon' },
  { label: 'Paris', value: 'par' },
  { label: 'Tokyo', value: 'tok' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      return { args, selected, options };
    },
    template: `<Select v-bind="args" v-model="selected" :options="options" optionLabel="label" optionValue="value" placeholder="Select a city" />`,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      return { args, selected, options };
    },
    template: `<Select v-bind="args" v-model="selected" :options="options" optionLabel="label" optionValue="value" placeholder="Disabled" :isDisabled="true" />`,
  }),
};
