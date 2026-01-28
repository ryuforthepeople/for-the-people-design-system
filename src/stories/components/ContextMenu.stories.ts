import type { Meta, StoryObj } from '@storybook/vue3';
import ContextMenu from '../../components/ContextMenu/ContextMenu.vue';

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  argTypes: {
    global: { control: 'boolean' },
    popup: { control: 'boolean' },
    showArrow: { control: 'boolean' },
    highlightTrigger: { control: 'boolean' },
    model: { control: 'object' },
  },
  args: {
    model: [
      { label: 'Copy', icon: 'pi pi-copy', shortcut: 'Ctrl+C' },
      { label: 'Paste', icon: 'pi pi-clipboard', shortcut: 'Ctrl+V' },
      { separator: true },
      { label: 'Delete', icon: 'pi pi-trash' },
      {
        label: 'More',
        icon: 'pi pi-ellipsis-h',
        items: [
          { label: 'Rename', icon: 'pi pi-pencil' },
          { label: 'Move', icon: 'pi pi-arrow-right' },
        ],
      },
    ],
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ContextMenu },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p>Right-click in this area to see the context menu.</p>
        <ContextMenu v-bind="args" :global="true" />
      </div>
    `,
  }),
};

export const WithSubmenus: Story = {
  args: {
    model: [
      { label: 'File', items: [{ label: 'New' }, { label: 'Open' }] },
      { label: 'Edit', items: [{ label: 'Undo' }, { label: 'Redo' }] },
      { separator: true },
      { label: 'Quit' },
    ],
    global: true,
  },
};

export const WithDisabledItems: Story = {
  args: {
    model: [
      { label: 'Cut', icon: 'pi pi-scissors' },
      { label: 'Copy', icon: 'pi pi-copy', disabled: true },
      { label: 'Paste', icon: 'pi pi-clipboard' },
    ],
    global: true,
  },
};
