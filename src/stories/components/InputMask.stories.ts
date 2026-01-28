import type { Meta, StoryObj } from '@storybook/vue3';
import InputMask from '../../components/InputMask/InputMask.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/InputMask',
  component: InputMask,
  tags: ['autodocs'],
  argTypes: {
    mask: { control: 'text' },
    placeholder: { control: 'text' },
    slotChar: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
} satisfies Meta<typeof InputMask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Phone: Story = {
  render: (args) => ({
    components: { InputMask },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputMask v-bind="args" v-model="value" mask="(999) 999-9999" placeholder="(999) 999-9999" />',
  }),
};

export const Date: Story = {
  render: (args) => ({
    components: { InputMask },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputMask v-bind="args" v-model="value" mask="99/99/9999" placeholder="DD/MM/YYYY" />',
  }),
};

export const PostalCode: Story = {
  render: (args) => ({
    components: { InputMask },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputMask v-bind="args" v-model="value" mask="9999 aa" placeholder="1234 AB" />',
  }),
};

export const Disabled: Story = {
  args: { isDisabled: true, mask: '999-999' },
};
