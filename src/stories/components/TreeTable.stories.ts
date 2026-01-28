import type { Meta, StoryObj } from '@storybook/vue3';
import TreeTable from '../../components/TreeTable/TreeTable.vue';
import { ref } from 'vue';

const treeNodes = [
  {
    key: '1', data: { name: 'Documents', size: '75kb', type: 'Folder' },
    children: [
      { key: '1-1', data: { name: 'Work', size: '50kb', type: 'Folder' } },
      { key: '1-2', data: { name: 'Personal', size: '25kb', type: 'Folder' } },
    ],
  },
  {
    key: '2', data: { name: 'Photos', size: '150kb', type: 'Folder' },
    children: [
      { key: '2-1', data: { name: 'Vacation.jpg', size: '100kb', type: 'Image' } },
      { key: '2-2', data: { name: 'Family.jpg', size: '50kb', type: 'Image' } },
    ],
  },
  { key: '3', data: { name: 'Notes.txt', size: '10kb', type: 'File' } },
];

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'size', header: 'Size' },
  { field: 'type', header: 'Type' },
];

const meta = {
  title: 'Components/TreeTable',
  component: TreeTable,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: ['single', 'multiple', 'checkbox'] },
    striped: { control: 'boolean' },
  },
} satisfies Meta<typeof TreeTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { TreeTable },
    setup() { return { args, treeNodes, columns }; },
    template: `<TreeTable v-bind="args" :nodes="treeNodes" :columns="columns" />`,
  }),
};

export const Striped: Story = {
  render: (args) => ({
    components: { TreeTable },
    setup() { return { args, treeNodes, columns }; },
    template: `<TreeTable v-bind="args" :nodes="treeNodes" :columns="columns" :striped="true" />`,
  }),
};

export const SingleSelection: Story = {
  render: (args) => ({
    components: { TreeTable },
    setup() {
      const selected = ref(null);
      return { args, treeNodes, columns, selected };
    },
    template: `<TreeTable v-bind="args" v-model="selected" :nodes="treeNodes" :columns="columns" selection-mode="single" />`,
  }),
};
