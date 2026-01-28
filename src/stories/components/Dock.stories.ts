import type { Meta, StoryObj } from '@storybook/vue3';
import Dock from '../../components/Dock/Dock.vue';

const dockItems = [
  { label: 'Finder', icon: '🗂️' },
  { label: 'Safari', icon: '🌐' },
  { label: 'Mail', icon: '✉️' },
  { label: 'Music', icon: '🎵' },
  { label: 'Photos', icon: '📷' },
  { label: 'Settings', icon: '⚙️' },
];

const meta = {
  title: 'Components/Dock',
  component: Dock,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    magnification: { control: 'boolean' },
    magnificationScale: { control: { type: 'number', min: 1, max: 3, step: 0.1 } },
    showTooltips: { control: 'boolean' },
    model: { control: 'object' },
  },
  args: {
    model: dockItems,
    position: 'bottom',
    magnification: true,
    magnificationScale: 1.5,
    showTooltips: true,
  },
} satisfies Meta<typeof Dock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TopPosition: Story = { args: { position: 'top' } };
export const LeftPosition: Story = { args: { position: 'left' } };
export const NoMagnification: Story = { args: { magnification: false } };
export const NoTooltips: Story = { args: { showTooltips: false } };
