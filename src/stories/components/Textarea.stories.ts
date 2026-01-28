import type { Meta, StoryObj } from '@storybook/vue3';
import Textarea from '../../components/Textarea/Textarea.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    autoResize: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text...',
    rows: 3,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" />',
  }),
};

export const AutoResize: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" :autoResize="true" placeholder="Auto-resizing textarea..." />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
export const Invalid: Story = { args: { isInvalid: true } };
