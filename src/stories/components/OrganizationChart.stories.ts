import type { Meta, StoryObj } from '@storybook/vue3';
import OrganizationChart from '../../components/OrganizationChart/OrganizationChart.vue';

const orgData = {
  key: '0',
  label: 'CEO',
  type: 'Executive',
  children: [
    {
      key: '1',
      label: 'CTO',
      type: 'Technology',
      children: [
        { key: '1-1', label: 'Dev Lead', type: 'Engineering' },
        { key: '1-2', label: 'QA Lead', type: 'Quality' },
      ],
    },
    {
      key: '2',
      label: 'CFO',
      type: 'Finance',
      children: [
        { key: '2-1', label: 'Accounting', type: 'Finance' },
      ],
    },
    {
      key: '3',
      label: 'COO',
      type: 'Operations',
    },
  ],
};

const meta = {
  title: 'Components/OrganizationChart',
  component: OrganizationChart,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: [null, 'single', 'multiple'] },
    collapsible: { control: 'boolean' },
    value: { control: 'object' },
  },
  args: {
    value: orgData,
    selectionMode: null,
    collapsible: false,
  },
} satisfies Meta<typeof OrganizationChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selectable: Story = { args: { selectionMode: 'single' } };
export const Collapsible: Story = { args: { collapsible: true } };
export const MultiSelect: Story = { args: { selectionMode: 'multiple' } };
