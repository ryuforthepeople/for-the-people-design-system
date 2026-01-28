import type { Meta, StoryObj } from '@storybook/vue3';
import Row from '../../components/Row/Row.vue';
import DataTable from '../../components/DataTable/DataTable.vue';

const meta = {
  title: 'Components/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    isSelected: { control: 'boolean' },
    isStriped: { control: 'boolean' },
    isHoverable: { control: 'boolean' },
  },
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'Alice', role: 'Designer', status: 'Active' },
  { name: 'Bob', role: 'Developer', status: 'Active' },
  { name: 'Carol', role: 'Manager', status: 'Inactive' },
];

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'role', header: 'Role' },
  { field: 'status', header: 'Status' },
];

export const Default: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() { return { args, sampleData, columns }; },
    template: `<DataTable :value="sampleData" :columns="columns" :hoverable="true" />`,
  }),
};

export const Striped: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() { return { args, sampleData, columns }; },
    template: `<DataTable :value="sampleData" :columns="columns" :striped="true" :hoverable="true" />`,
  }),
};
