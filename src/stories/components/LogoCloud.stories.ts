import type { Meta, StoryObj } from '@storybook/vue3';
import LogoCloud from '../../components/LogoCloud/LogoCloud.vue';

const meta = {
  title: 'Components/LogoCloud',
  component: LogoCloud,
  tags: ['autodocs'],
  argTypes: {
    grayscale: { control: 'boolean' },
    columns: { control: { type: 'range', min: 3, max: 6 } },
  },
} satisfies Meta<typeof LogoCloud>;

export default meta;
type Story = StoryObj<typeof meta>;

const logos = [
  { src: 'https://via.placeholder.com/120x40/6366f1/fff?text=Acme', alt: 'Acme' },
  { src: 'https://via.placeholder.com/120x40/a855f7/fff?text=Globe', alt: 'Globe' },
  { src: 'https://via.placeholder.com/120x40/ec4899/fff?text=Nexus', alt: 'Nexus' },
  { src: 'https://via.placeholder.com/120x40/14b8a6/fff?text=Apex', alt: 'Apex' },
  { src: 'https://via.placeholder.com/120x40/f59e0b/fff?text=Vortex', alt: 'Vortex' },
];

export const Default: Story = {
  args: { title: 'Trusted by leading companies', logos, columns: 5 },
};

export const Grayscale: Story = {
  args: { title: 'Our partners', logos, columns: 5, grayscale: true },
};
