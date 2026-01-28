import type { Meta, StoryObj } from '@storybook/vue3';
import MegaMenu from '../../components/MegaMenu/MegaMenu.vue';

const megaMenuModel = [
  {
    label: 'Electronics',
    items: [
      { label: 'Computers', items: [{ label: 'Laptops' }, { label: 'Desktops' }, { label: 'Tablets' }] },
      { label: 'Phones', items: [{ label: 'iPhone' }, { label: 'Android' }, { label: 'Accessories' }] },
    ],
  },
  {
    label: 'Clothing',
    items: [
      { label: 'Men', items: [{ label: 'Shirts' }, { label: 'Pants' }] },
      { label: 'Women', items: [{ label: 'Dresses' }, { label: 'Tops' }] },
    ],
  },
  { label: 'Home', url: '/home' },
];

const meta = {
  title: 'Components/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    model: { control: 'object' },
  },
  args: {
    model: megaMenuModel,
    orientation: 'horizontal',
  },
} satisfies Meta<typeof MegaMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical' } };
