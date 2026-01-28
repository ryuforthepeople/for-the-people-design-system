import type { Meta, StoryObj } from '@storybook/vue3';
import Editor from '../../components/Editor/Editor.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Editor',
  component: Editor,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Start writing...',
  },
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Editor },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Editor v-bind="args" v-model="value" />',
  }),
};

export const WithContent: Story = {
  render: (args) => ({
    components: { Editor },
    setup() {
      const value = ref('<h2>Hello World</h2><p>This is <strong>rich text</strong> content.</p>');
      return { args, value };
    },
    template: '<Editor v-bind="args" v-model="value" />',
  }),
};

export const Disabled: Story = { args: { isDisabled: true } };
