import type { Meta, StoryObj } from '@storybook/vue3';
import InlineMessage from '../../components/InlineMessage/InlineMessage.vue';

const meta = {
  title: 'Components/InlineMessage',
  component: InlineMessage,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['success', 'info', 'warn', 'error'] },
    icon: { control: 'boolean' },
  },
  args: {
    severity: 'info',
    icon: true,
  },
} satisfies Meta<typeof InlineMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InlineMessage },
    setup() { return { args }; },
    template: '<InlineMessage v-bind="args">Field is required</InlineMessage>',
  }),
};

export const Success: Story = {
  render: (args) => ({
    components: { InlineMessage },
    setup() { return { args }; },
    template: '<InlineMessage v-bind="args">Valid input</InlineMessage>',
  }),
  args: { severity: 'success' },
};

export const Warning: Story = {
  render: (args) => ({
    components: { InlineMessage },
    setup() { return { args }; },
    template: '<InlineMessage v-bind="args">Check format</InlineMessage>',
  }),
  args: { severity: 'warn' },
};

export const Error: Story = {
  render: (args) => ({
    components: { InlineMessage },
    setup() { return { args }; },
    template: '<InlineMessage v-bind="args">Invalid email</InlineMessage>',
  }),
  args: { severity: 'error' },
};

export const AllSeverities: Story = {
  render: () => ({
    components: { InlineMessage },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <InlineMessage severity="success">Success</InlineMessage>
        <InlineMessage severity="info">Info</InlineMessage>
        <InlineMessage severity="warn">Warning</InlineMessage>
        <InlineMessage severity="error">Error</InlineMessage>
      </div>
    `,
  }),
};
