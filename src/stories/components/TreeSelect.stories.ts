import type { Meta, StoryObj } from '@storybook/vue3';
import TreeSelect from '../../components/TreeSelect/TreeSelect.vue';
import { ref } from 'vue';

const treeOptions = [
  {
    key: '1', label: 'Documents',
    children: [
      { key: '1-1', label: 'Work' },
      { key: '1-2', label: 'Personal' },
    ],
  },
  {
    key: '2', label: 'Photos',
    children: [
      { key: '2-1', label: 'Vacation' },
      { key: '2-2', label: 'Family' },
    ],
  },
  { key: '3', label: 'Videos' },
];

const meta = {
  title: 'Components/TreeSelect',
  component: TreeSelect,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: ['single', 'checkbox'] },
    placeholder: { control: 'text' },
    filter: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
} satisfies Meta<typeof TreeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { TreeSelect },
    setup() {
      const selected = ref(null);
      return { args, selected, treeOptions };
    },
    template: `<TreeSelect v-bind="args" v-model="selected" :options="treeOptions" placeholder="Select an item" />`,
  }),
};

export const WithFilter: Story = {
  render: (args) => ({
    components: { TreeSelect },
    setup() {
      const selected = ref(null);
      return { args, selected, treeOptions };
    },
    template: `<TreeSelect v-bind="args" v-model="selected" :options="treeOptions" placeholder="Search..." :filter="true" />`,
  }),
};

export const Checkbox: Story = {
  render: (args) => ({
    components: { TreeSelect },
    setup() {
      const selected = ref(null);
      return { args, selected, treeOptions };
    },
    template: `<TreeSelect v-bind="args" v-model="selected" :options="treeOptions" selection-mode="checkbox" placeholder="Select items" />`,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { TreeSelect },
    setup() {
      const selected = ref(null);
      return { args, selected, treeOptions };
    },
    template: `<TreeSelect v-bind="args" v-model="selected" :options="treeOptions" :is-disabled="true" placeholder="Disabled" />`,
  }),
};
