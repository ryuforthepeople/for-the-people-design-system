import type { Meta, StoryObj } from '@storybook/vue3';
import Image from '../../components/Image/Image.vue';

const meta = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    preview: { control: 'boolean' },
  },
  args: {
    src: 'https://picsum.photos/400/300?random=10',
    alt: 'Sample image',
    width: '400',
    height: '300',
    preview: false,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithPreview: Story = { args: { preview: true } };
export const CustomSize: Story = { args: { width: '200', height: '150' } };
