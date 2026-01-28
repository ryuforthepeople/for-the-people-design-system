import type { Meta, StoryObj } from '@storybook/vue3';
import TabMenu from '../../components/TabMenu/TabMenu.vue';

const tabMenuModel = [
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'Profile', icon: 'pi pi-user' },
  { label: 'Messages', icon: 'pi pi-envelope', badge: '3' },
  { label: 'Settings', icon: 'pi pi-cog' },
  { label: 'Disabled', icon: 'pi pi-ban', disabled: true },
];

const meta = {
  title: 'Components/TabMenu',
  component: TabMenu,
  tags: ['autodocs'],
  argTypes: {
    activeIndex: { control: 'number' },
    model: { control: 'object' },
  },
  args: {
    model: tabMenuModel,
    activeIndex: 0,
  },
} satisfies Meta<typeof TabMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SecondActive: Story = { args: { activeIndex: 1 } };
export const TextOnly: Story = {
  args: {
    model: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
    ],
  },
};
