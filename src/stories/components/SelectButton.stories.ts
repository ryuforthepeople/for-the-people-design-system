import type { Meta, StoryObj } from '@storybook/vue3';
import SelectButton from '../../components/SelectButton/SelectButton.vue';
import { ref } from 'vue';

const options = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
];

const meta = {
  title: 'Components/SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref('center');
      return { args, value, options };
    },
    template: '<SelectButton v-bind="args" v-model="value" :options="options" />',
  }),
};

export const Multiple: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref(['left', 'right']);
      return { args, value, options };
    },
    template: '<SelectButton v-bind="args" v-model="value" :options="options" :multiple="true" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true, options } };
