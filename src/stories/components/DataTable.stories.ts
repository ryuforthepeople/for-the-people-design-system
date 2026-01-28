import type { Meta, StoryObj } from '@storybook/vue3';
import DataTable from '../../components/DataTable/DataTable.vue';

const sampleData = [
  { name: 'Alice Johnson', role: 'Designer', status: 'Active' },
  { name: 'Bob Smith', role: 'Developer', status: 'Active' },
  { name: 'Carol White', role: 'Manager', status: 'Inactive' },
  { name: 'Dan Brown', role: 'Developer', status: 'Active' },
  { name: 'Eve Davis', role: 'Designer', status: 'Active' },
];

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'status', header: 'Status', sortable: true },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() { return { args, sampleData, columns }; },
    template: `<DataTable v-bind="args" :value="sampleData" :columns="columns" />`,
  }),
};

export const Striped: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() { return { args, sampleData, columns }; },
    template: `<DataTable v-bind="args" :value="sampleData" :columns="columns" :striped="true" :hoverable="true" />`,
  }),
};
