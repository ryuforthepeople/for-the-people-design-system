import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from '../../components/Avatar/Avatar.vue';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    image: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'] },
    shape: { control: 'select', options: ['square', 'circle'] },
    icon: { control: 'text' },
  },
  args: { size: 'medium', shape: 'circle' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = { args: { label: 'RS' } };
export const WithImage: Story = { args: { image: 'https://i.pravatar.cc/150?img=3' } };
export const Square: Story = { args: { label: 'FP', shape: 'square' } };
export const Small: Story = { args: { label: 'S', size: 'small' } };
export const Large: Story = { args: { label: 'L', size: 'large' } };
export const XLarge: Story = { args: { label: 'XL', size: 'xlarge' } };

export const AllSizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <Avatar label="S" size="small" shape="circle" />
        <Avatar label="M" size="medium" shape="circle" />
        <Avatar label="L" size="large" shape="circle" />
        <Avatar label="XL" size="xlarge" shape="circle" />
      </div>
    `,
  }),
};
