import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../../components/Button/Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'outlined', 'text'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    pill: { control: 'boolean' },
    icon: { control: 'text' },
    iconPos: { control: 'select', options: ['left', 'right'] },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { label: 'Primary', variant: 'primary' } };
export const Secondary: Story = { args: { label: 'Secondary', variant: 'secondary' } };
export const Outlined: Story = { args: { label: 'Outlined', variant: 'outlined' } };
export const Text: Story = { args: { label: 'Text', variant: 'text' } };
export const Small: Story = { args: { label: 'Small', size: 'sm' } };
export const Large: Story = { args: { label: 'Large', size: 'lg' } };
export const Loading: Story = { args: { label: 'Loading', isLoading: true } };
export const Disabled: Story = { args: { label: 'Disabled', isDisabled: true } };
export const Pill: Story = { args: { label: 'Pill Button', pill: true } };
export const WithIcon: Story = { args: { label: 'Save', icon: 'pi pi-check', iconPos: 'left' } };

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return () => [
        ['primary', 'secondary', 'outlined', 'text'].map(v =>
          ['sm', 'md', 'lg'].map(s => ({v, s}))
        ).flat().map(({v, s}) => (
          { variant: v, size: s, label: `${v} ${s}` }
        )),
      ];
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Button v-for="(v, i) in ['primary','secondary','outlined','text']" :key="i" :label="v" :variant="v" />
      </div>
    `,
  }),
};
