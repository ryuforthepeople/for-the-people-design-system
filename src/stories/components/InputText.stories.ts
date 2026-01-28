import type { Meta, StoryObj } from '@storybook/vue3';
import InputText from '../../components/InputText/InputText.vue';

const meta = {
  title: 'Components/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['text', 'password', 'email', 'tel', 'url', 'search', 'number'] },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: { placeholder: 'Enter text...', size: 'md' },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'sm', placeholder: 'Small input' } };
export const Large: Story = { args: { size: 'lg', placeholder: 'Large input' } };
export const Disabled: Story = { args: { isDisabled: true, placeholder: 'Disabled' } };
export const Invalid: Story = { args: { isInvalid: true, placeholder: 'Invalid input' } };
export const Password: Story = { args: { type: 'password', placeholder: 'Password' } };

export const AllSizes: Story = {
  render: () => ({
    components: { InputText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <InputText size="sm" placeholder="Small" />
        <InputText size="md" placeholder="Medium" />
        <InputText size="lg" placeholder="Large" />
      </div>
    `,
  }),
};
