import type { Meta, StoryObj } from '@storybook/vue3';
import SplitButton from '../../components/SplitButton/SplitButton.vue';

const splitButtonModel = [
  { label: 'Save', icon: 'pi pi-save' },
  { label: 'Save As', icon: 'pi pi-file' },
  { label: 'Export', icon: 'pi pi-download' },
];

const meta = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    severity: { control: 'select', options: ['primary', 'secondary', 'outlined'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    model: { control: 'object' },
  },
  args: {
    label: 'Save',
    icon: 'pi pi-save',
    model: splitButtonModel,
    severity: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { severity: 'secondary', label: 'Secondary' } };
export const Outlined: Story = { args: { severity: 'outlined', label: 'Outlined' } };
export const Small: Story = { args: { size: 'sm', label: 'Small' } };
export const Large: Story = { args: { size: 'lg', label: 'Large' } };
export const Disabled: Story = { args: { isDisabled: true } };
