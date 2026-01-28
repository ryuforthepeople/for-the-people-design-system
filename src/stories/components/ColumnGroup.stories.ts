import type { Meta, StoryObj } from '@storybook/vue3';
import ColumnGroup from '../../components/ColumnGroup/ColumnGroup.vue';
import DataTable from '../../components/DataTable/DataTable.vue';

const meta = {
  title: 'Components/ColumnGroup',
  component: ColumnGroup,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['header', 'footer'] },
  },
} satisfies Meta<typeof ColumnGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'Alice', role: 'Designer', status: 'Active' },
  { name: 'Bob', role: 'Developer', status: 'Active' },
  { name: 'Carol', role: 'Manager', status: 'Inactive' },
];

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
