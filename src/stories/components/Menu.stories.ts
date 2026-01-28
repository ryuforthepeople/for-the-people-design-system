import type { Meta, StoryObj } from '@storybook/vue3';
import Menu from '../../components/Menu/Menu.vue';

const menuItems = [
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Projects', icon: 'pi pi-folder' },
  { label: 'Settings', icon: 'pi pi-cog' },
  { separator: true },
  { label: 'Logout', icon: 'pi pi-sign-out' },
];

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    popup: { control: 'boolean' },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: (args) => ({
    components: { Menu },
    setup() { return { args, menuItems }; },
    template: `<Menu v-bind="args" :model="menuItems" />`,
  }),
};

export const Popup: Story = {
  render: (args) => ({
    components: { Menu },
    setup() { return { args, menuItems }; },
    template: `
      <div>
        <p style="color: #9ea5c2; font-size: 14px;">Popup menus are triggered programmatically via a ref. This shows the inline fallback.</p>
        <Menu v-bind="args" :model="menuItems" :popup="false" />
      </div>
    `,
  }),
};
