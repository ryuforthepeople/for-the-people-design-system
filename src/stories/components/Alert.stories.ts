import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from '../../components/Alert/Alert.vue';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['success', 'info', 'warn', 'error'] },
    title: { control: 'text' },
    closable: { control: 'boolean' },
  },
  args: { severity: 'info', closable: false },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { severity: 'info', title: 'Information' },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">This is an informational message.</Alert>',
  }),
};

export const Success: Story = {
  args: { severity: 'success', title: 'Success' },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Operation completed successfully.</Alert>',
  }),
};

export const Warning: Story = {
  args: { severity: 'warn', title: 'Warning' },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Please review before continuing.</Alert>',
  }),
};

export const Error: Story = {
  args: { severity: 'error', title: 'Error' },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Something went wrong. Please try again.</Alert>',
  }),
};

export const Closable: Story = {
  args: { severity: 'info', title: 'Dismissible', closable: true },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">You can close this alert.</Alert>',
  }),
};

export const AllSeverities: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <Alert severity="success" title="Success">Operation completed.</Alert>
        <Alert severity="info" title="Info">Here is some information.</Alert>
        <Alert severity="warn" title="Warning">Proceed with caution.</Alert>
        <Alert severity="error" title="Error">Something failed.</Alert>
      </div>
    `,
  }),
};
