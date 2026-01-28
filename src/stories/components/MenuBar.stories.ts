import type { Meta, StoryObj } from '@storybook/vue3';
import MenuBar from '../../components/MenuBar/MenuBar.vue';

const menuBarModel = [
  {
    label: 'File',
    icon: 'pi pi-file',
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-folder-open' },
      { separator: true },
      { label: 'Save', icon: 'pi pi-save' },
    ],
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Undo', icon: 'pi pi-undo' },
      { label: 'Redo', icon: 'pi pi-refresh' },
    ],
  },
  { label: 'View', icon: 'pi pi-eye' },
  { label: 'Help', icon: 'pi pi-question-circle' },
];

const meta = {
  title: 'Components/MenuBar',
  component: MenuBar,
  tags: ['autodocs'],
  argTypes: {
    model: { control: 'object' },
  },
  args: {
    model: menuBarModel,
  },
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SimpleItems: Story = {
  args: {
    model: [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Contact' },
    ],
  },
};
