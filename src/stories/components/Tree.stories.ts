import type { Meta, StoryObj } from '@storybook/vue3';
import Tree from '../../components/Tree/Tree.vue';

const treeNodes = [
  {
    key: '0',
    label: 'Documents',
    children: [
      {
        key: '0-0',
        label: 'Work',
        children: [
          { key: '0-0-0', label: 'Report.pdf' },
          { key: '0-0-1', label: 'Presentation.pptx' },
        ],
      },
      {
        key: '0-1',
        label: 'Personal',
        children: [
          { key: '0-1-0', label: 'Resume.docx' },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Photos',
    children: [
      { key: '1-0', label: 'Vacation.jpg' },
      { key: '1-1', label: 'Family.png' },
    ],
  },
  {
    key: '2',
    label: 'Music',
    children: [
      { key: '2-0', label: 'Song.mp3' },
    ],
  },
];

const meta = {
  title: 'Components/Tree',
  component: Tree,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: [null, 'single', 'multiple', 'checkbox'] },
    filter: { control: 'boolean' },
    labelField: { control: 'text' },
    keyField: { control: 'text' },
    childrenField: { control: 'text' },
    isDisabled: { control: 'boolean' },
    nodes: { control: 'object' },
  },
  args: {
    nodes: treeNodes,
    selectionMode: null,
    filter: false,
    labelField: 'label',
    keyField: 'key',
    childrenField: 'children',
  },
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SingleSelection: Story = { args: { selectionMode: 'single' } };
export const MultipleSelection: Story = { args: { selectionMode: 'multiple' } };
export const CheckboxSelection: Story = { args: { selectionMode: 'checkbox' } };
export const WithFilter: Story = { args: { filter: true } };
export const Disabled: Story = { args: { isDisabled: true } };
