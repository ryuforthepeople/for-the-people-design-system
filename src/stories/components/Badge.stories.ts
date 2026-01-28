import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from '../../components/Badge/Badge.vue';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    severity: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { value: '5', severity: 'primary', size: 'md' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { value: '3', severity: 'primary' } };
export const Success: Story = { args: { value: '✓', severity: 'success' } };
export const Warning: Story = { args: { value: '!', severity: 'warning' } };
export const Danger: Story = { args: { value: '9+', severity: 'danger' } };
export const Info: Story = { args: { value: 'i', severity: 'info' } };
export const Small: Story = { args: { value: '2', size: 'sm' } };
export const Large: Story = { args: { value: '42', size: 'lg' } };

export const AllSeverities: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <Badge value="3" severity="primary" />
        <Badge value="✓" severity="success" />
        <Badge value="!" severity="warning" />
        <Badge value="9+" severity="danger" />
        <Badge value="i" severity="info" />
      </div>
    `,
  }),
};
