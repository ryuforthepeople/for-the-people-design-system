import type { Meta, StoryObj } from '@storybook/vue3';
import Message from '../../components/Message/Message.vue';

const meta = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['success', 'info', 'warn', 'error'] },
    closable: { control: 'boolean' },
    icon: { control: 'boolean' },
    life: { control: 'number' },
  },
  args: {
    severity: 'info',
    closable: false,
    icon: true,
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Message },
    setup() { return { args }; },
    template: '<Message v-bind="args">This is an informational message.</Message>',
  }),
};

export const Success: Story = {
  render: (args) => ({
    components: { Message },
    setup() { return { args }; },
    template: '<Message v-bind="args">Operation completed successfully!</Message>',
  }),
  args: { severity: 'success' },
};

export const Warning: Story = {
  render: (args) => ({
    components: { Message },
    setup() { return { args }; },
    template: '<Message v-bind="args">Please review your input.</Message>',
  }),
  args: { severity: 'warn' },
};

export const Error: Story = {
  render: (args) => ({
    components: { Message },
    setup() { return { args }; },
    template: '<Message v-bind="args">Something went wrong.</Message>',
  }),
  args: { severity: 'error' },
};

export const Closable: Story = {
  render: (args) => ({
    components: { Message },
    setup() { return { args }; },
    template: '<Message v-bind="args">You can dismiss this message.</Message>',
  }),
  args: { severity: 'info', closable: true },
};

export const AllSeverities: Story = {
  render: () => ({
    components: { Message },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Message severity="success">Success message</Message>
        <Message severity="info">Info message</Message>
        <Message severity="warn">Warning message</Message>
        <Message severity="error">Error message</Message>
      </div>
    `,
  }),
};
