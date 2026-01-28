import type { Meta, StoryObj } from '@storybook/vue3';
import TieredMenu from '../../components/TieredMenu/TieredMenu.vue';

const tieredMenuModel = [
  {
    label: 'File',
    icon: 'pi pi-file',
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-folder-open' },
      { separator: true },
      { label: 'Save', icon: 'pi pi-save' },
      { label: 'Save As', icon: 'pi pi-file-export' },
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
  { separator: true },
  { label: 'Quit', icon: 'pi pi-power-off' },
];

const meta = {
  title: 'Components/TieredMenu',
  component: TieredMenu,
  tags: ['autodocs'],
  argTypes: {
    popup: { control: 'boolean' },
    model: { control: 'object' },
  },
  args: {
    model: tieredMenuModel,
    popup: false,
  },
} satisfies Meta<typeof TieredMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDisabledItems: Story = {
  args: {
    model: [
      { label: 'Active Item', icon: 'pi pi-check' },
      { label: 'Disabled Item', icon: 'pi pi-ban', disabled: true },
      { label: 'Another Item', icon: 'pi pi-star' },
    ],
  },
};
