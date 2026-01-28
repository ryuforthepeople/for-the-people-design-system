import type { Meta, StoryObj } from '@storybook/vue3';
import Chip from '../../components/Chip/Chip.vue';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    image: { control: 'text' },
    removable: { control: 'boolean' },
  },
  args: {
    label: 'Chip',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Default Chip' } };
export const Removable: Story = { args: { label: 'Removable', removable: true } };
export const WithIcon: Story = { args: { label: 'With Icon', icon: 'pi pi-user' } };
export const WithImage: Story = { args: { label: 'Amy', image: 'https://i.pravatar.cc/32?img=1' } };
