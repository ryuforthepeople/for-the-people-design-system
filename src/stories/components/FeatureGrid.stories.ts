import type { Meta, StoryObj } from '@storybook/vue3';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid.vue';

const meta = {
  title: 'Components/FeatureGrid',
  component: FeatureGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'select', options: [2, 3, 4] },
    variant: { control: 'select', options: ['card', 'minimal', 'icon-top'] },
  },
} satisfies Meta<typeof FeatureGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFeatures = [
  { icon: 'pi pi-bolt', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and tree shaking.' },
  { icon: 'pi pi-shield', title: 'Secure by Default', description: 'Built-in security best practices and regular audits.' },
  { icon: 'pi pi-palette', title: 'Fully Themeable', description: 'Customize every token to match your brand identity.' },
  { icon: 'pi pi-code', title: 'Developer First', description: 'TypeScript support, great DX, and comprehensive docs.' },
  { icon: 'pi pi-globe', title: 'Accessible', description: 'WCAG 2.1 AA compliant with full keyboard navigation.' },
  { icon: 'pi pi-sync', title: 'Auto Updates', description: 'Seamless updates with zero breaking changes.' },
];

export const CardVariant: Story = {
  args: { features: sampleFeatures, columns: 3, variant: 'card' },
};

export const Minimal: Story = {
  args: { features: sampleFeatures, columns: 2, variant: 'minimal' },
};

export const IconTop: Story = {
  args: { features: sampleFeatures.slice(0, 4), columns: 4, variant: 'icon-top' },
};
