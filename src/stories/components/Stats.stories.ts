import type { Meta, StoryObj } from '@storybook/vue3';
import Stats from '../../components/Stats/Stats.vue';

const meta = {
  title: 'Components/Stats',
  component: Stats,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'select', options: [2, 3, 4] },
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 4,
    stats: [
      { value: '10K', label: 'Active Users', suffix: '+' },
      { value: '99.9', label: 'Uptime', suffix: '%' },
      { value: '50', label: 'Components', suffix: '+' },
      { value: '4.9', label: 'Rating', prefix: '★ ' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    columns: 3,
    stats: [
      { value: '2M', label: 'Downloads', icon: 'pi pi-download' },
      { value: '150', label: 'Contributors', suffix: '+', icon: 'pi pi-users' },
      { value: '24/7', label: 'Support', icon: 'pi pi-headphones' },
    ],
  },
};
