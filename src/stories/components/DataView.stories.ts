import type { Meta, StoryObj } from '@storybook/vue3';
import DataView from '../../components/DataView/DataView.vue';

const sampleData = [
  { name: 'Product A', price: '$29.99', category: 'Electronics' },
  { name: 'Product B', price: '$49.99', category: 'Clothing' },
  { name: 'Product C', price: '$19.99', category: 'Books' },
  { name: 'Product D', price: '$99.99', category: 'Electronics' },
  { name: 'Product E', price: '$14.99', category: 'Books' },
  { name: 'Product F', price: '$39.99', category: 'Clothing' },
];

const meta = {
  title: 'Components/DataView',
  component: DataView,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['list', 'grid'] },
    gridColumns: { control: { type: 'number', min: 1, max: 6 } },
    paginator: { control: 'boolean' },
    rows: { control: 'number' },
    showLayoutSwitcher: { control: 'boolean' },
    value: { control: 'object' },
  },
  args: {
    value: sampleData,
    layout: 'list',
    showLayoutSwitcher: true,
  },
} satisfies Meta<typeof DataView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const GridLayout: Story = {
  args: { layout: 'grid', gridColumns: 3 },
};

export const WithPaginator: Story = {
  args: { paginator: true, rows: 3 },
};

export const NoSwitcher: Story = {
  args: { showLayoutSwitcher: false },
};
