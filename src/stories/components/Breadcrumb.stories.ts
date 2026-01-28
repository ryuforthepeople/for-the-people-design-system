import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    model: { control: 'object' },
    home: { control: 'object' },
  },
  args: {
    home: { label: 'Home', icon: 'pi pi-home', url: '/' },
    model: [
      { label: 'Category', url: '/category' },
      { label: 'Subcategory', url: '/category/sub' },
      { label: 'Current Page' },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    model: [
      { label: 'Electronics', icon: 'pi pi-bolt', url: '/electronics' },
      { label: 'Phones', icon: 'pi pi-mobile', url: '/electronics/phones' },
      { label: 'iPhone 15' },
    ],
  },
};

export const Simple: Story = {
  args: {
    home: undefined,
    model: [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'Detail' },
    ],
  },
};
