import type { Meta, StoryObj } from '@storybook/vue3';
import PanelMenu from '../../components/PanelMenu/PanelMenu.vue';

const panelMenuModel = [
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
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    items: [
      { label: 'General' },
      { label: 'Advanced' },
    ],
  },
];

const meta = {
  title: 'Components/PanelMenu',
  component: PanelMenu,
  tags: ['autodocs'],
  argTypes: {
    model: { control: 'object' },
    multiple: { control: 'boolean' },
  },
  args: {
    model: panelMenuModel,
    multiple: false,
  },
} satisfies Meta<typeof PanelMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MultipleExpanded: Story = { args: { multiple: true } };
