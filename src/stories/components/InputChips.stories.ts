import type { Meta, StoryObj } from '@storybook/vue3';
import InputChips from '../../components/InputChips/InputChips.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/InputChips',
  component: InputChips,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    allowDuplicate: { control: 'boolean' },
    max: { control: 'number' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    placeholder: 'Add a tag...',
  },
} satisfies Meta<typeof InputChips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InputChips },
    setup() {
      const value = ref<string[]>([]);
      return { args, value };
    },
    template: '<InputChips v-bind="args" v-model="value" />',
  }),
};

export const WithValues: Story = {
  render: (args) => ({
    components: { InputChips },
    setup() {
      const value = ref(['Vue', 'React', 'Angular']);
      return { args, value };
    },
    template: '<InputChips v-bind="args" v-model="value" />',
  }),
};

export const MaxThree: Story = {
  render: (args) => ({
    components: { InputChips },
    setup() {
      const value = ref(['One', 'Two']);
      return { args, value };
    },
    template: '<InputChips v-bind="args" v-model="value" :max="3" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
