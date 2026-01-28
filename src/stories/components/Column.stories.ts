import type { Meta, StoryObj } from '@storybook/vue3';
import Column from '../../components/Column/Column.vue';
import DataTable from '../../components/DataTable/DataTable.vue';

const sampleData = [
  { name: 'Alice', role: 'Designer', status: 'Active', salary: 85000 },
  { name: 'Bob', role: 'Developer', status: 'Active', salary: 95000 },
  { name: 'Carol', role: 'Manager', status: 'Inactive', salary: 110000 },
];

const meta = {
  title: 'Components/Column',
  component: Column,
  tags: ['autodocs'],
  argTypes: {
    field: { control: 'text' },
    header: { control: 'text' },
    sortable: { control: 'boolean' },
    align: { control: 'select', options: ['left', 'center', 'right'] },
    frozen: { control: 'boolean' },
    hidden: { control: 'boolean' },
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'status', header: 'Status', sortable: true },
];

export const Default: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() { return { args, sampleData, columns }; },
    template: `<DataTable :value="sampleData" :columns="columns" />`,
  }),
};

export const RightAligned: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      const cols = [
        { field: 'name', header: 'Name' },
        { field: 'role', header: 'Role' },
        { field: 'salary', header: 'Salary' },
      ];
      return { args, sampleData, cols };
    },
    template: `<DataTable :value="sampleData" :columns="cols" />`,
  }),
};
