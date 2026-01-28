import type { Meta, StoryObj } from '@storybook/vue3';
import ProgressSpinner from '../../components/ProgressSpinner/ProgressSpinner.vue';

const meta = {
  title: 'Components/ProgressSpinner',
  component: ProgressSpinner,
  tags: ['autodocs'],
  argTypes: {
    strokeWidth: { control: 'number' },
    fill: { control: 'text' },
    animationDuration: { control: 'text' },
  },
  args: {
    strokeWidth: 4,
    animationDuration: '2s',
  },
} satisfies Meta<typeof ProgressSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThinStroke: Story = { args: { strokeWidth: 2 } };
export const ThickStroke: Story = { args: { strokeWidth: 8 } };
export const Fast: Story = { args: { animationDuration: '0.5s' } };
export const Slow: Story = { args: { animationDuration: '4s' } };
