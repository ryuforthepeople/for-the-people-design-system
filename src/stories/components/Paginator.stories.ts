import type { Meta, StoryObj } from '@storybook/vue3';
import Paginator from '../../components/Paginator/Paginator.vue';

const meta = {
  title: 'Components/Paginator',
  component: Paginator,
  tags: ['autodocs'],
  argTypes: {
    totalRecords: { control: 'number' },
    rows: { control: 'number' },
    first: { control: 'number' },
    pageLinkSize: { control: 'number' },
    showFirstLast: { control: 'boolean' },
    showInfo: { control: 'boolean' },
  },
  args: {
    totalRecords: 120,
    rows: 10,
    first: 0,
    showFirstLast: true,
    showInfo: true,
  },
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FewPages: Story = { args: { totalRecords: 30, rows: 10 } };
export const ManyPages: Story = { args: { totalRecords: 500, rows: 10, pageLinkSize: 7 } };
export const NoInfo: Story = { args: { showInfo: false } };
export const NoFirstLast: Story = { args: { showFirstLast: false } };
