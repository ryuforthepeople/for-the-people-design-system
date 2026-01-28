import type { Meta, StoryObj } from '@storybook/vue3';
import SpeedDial from '../../components/SpeedDial/SpeedDial.vue';

const speedDialItems = [
  { label: 'Add', icon: 'pi pi-plus' },
  { label: 'Edit', icon: 'pi pi-pencil' },
  { label: 'Delete', icon: 'pi pi-trash' },
  { label: 'Share', icon: 'pi pi-share-alt' },
];

const meta = {
  title: 'Components/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['up', 'down', 'left', 'right'] },
    type: { control: 'select', options: ['linear', 'circle', 'semi-circle', 'quarter-circle'] },
    radius: { control: 'number' },
    showLabels: { control: 'boolean' },
    openOnHover: { control: 'boolean' },
    model: { control: 'object' },
  },
  args: {
    model: speedDialItems,
    direction: 'up',
    type: 'linear',
    showLabels: true,
  },
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { SpeedDial },
    setup() { return { args }; },
    template: '<div style="position:relative;height:300px;"><SpeedDial v-bind="args" style="position:absolute;bottom:16px;right:16px;" /></div>',
  }),
};

export const DirectionDown: Story = { ...Default, args: { direction: 'down' } };
export const DirectionLeft: Story = { ...Default, args: { direction: 'left' } };
export const DirectionRight: Story = { ...Default, args: { direction: 'right' } };
export const OpenOnHover: Story = { ...Default, args: { openOnHover: true } };
export const CircleType: Story = { ...Default, args: { type: 'circle', radius: 100 } };
