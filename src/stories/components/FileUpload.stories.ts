import type { Meta, StoryObj } from '@storybook/vue3';
import FileUpload from '../../components/FileUpload/FileUpload.vue';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    maxFileSize: { control: 'number' },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AcceptImages: Story = { args: { accept: 'image/*' } };
export const Multiple: Story = { args: { multiple: true } };
export const Disabled: Story = { args: { isDisabled: true } };
