import type { Meta, StoryObj } from '@storybook/vue3';
import PickList from '../../components/PickList/PickList.vue';

const meta = {
  title: 'Components/PickList',
  component: PickList,
  tags: ['autodocs'],
  argTypes: {
    sourceHeader: { control: 'text' },
    targetHeader: { control: 'text' },
    dataKey: { control: 'text' },
    labelKey: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    source: [
      { name: 'Angular', id: '1' },
      { name: 'React', id: '2' },
      { name: 'Vue', id: '3' },
      { name: 'Svelte', id: '4' },
    ],
    target: [
      { name: 'TypeScript', id: '5' },
    ],
    sourceHeader: 'Available',
    targetHeader: 'Selected',
    dataKey: 'id',
    labelKey: 'name',
  },
} satisfies Meta<typeof PickList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true } };

export const EmptyTarget: Story = {
  args: { target: [] },
};
