import type { Meta, StoryObj } from '@storybook/vue3';
import OrderList from '../../components/OrderList/OrderList.vue';

const meta = {
  title: 'Components/OrderList',
  component: OrderList,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    dataKey: { control: 'text' },
    multiple: { control: 'boolean' },
    modelValue: { control: 'object' },
  },
  args: {
    header: 'Reorder Items',
    modelValue: [
      { name: 'Item 1', id: '1' },
      { name: 'Item 2', id: '2' },
      { name: 'Item 3', id: '3' },
      { name: 'Item 4', id: '4' },
      { name: 'Item 5', id: '5' },
    ],
    dataKey: 'id',
  },
} satisfies Meta<typeof OrderList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleSelection: Story = {
  args: { multiple: true },
};

export const NoHeader: Story = {
  args: { header: undefined },
};
