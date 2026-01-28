import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from '../../components/Tag/Tag.vue';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    color: { control: 'select', options: ['brand', 'accent', 'neutral', 'success', 'warning', 'danger', 'info'] },
    rounded: { control: 'boolean' },
    icon: { control: 'text' },
  },
  args: { value: 'Tag', color: 'brand' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = { args: { value: 'Brand', color: 'brand' } };
export const Accent: Story = { args: { value: 'Accent', color: 'accent' } };
export const Success: Story = { args: { value: 'Success', color: 'success' } };
export const Warning: Story = { args: { value: 'Warning', color: 'warning' } };
export const Danger: Story = { args: { value: 'Danger', color: 'danger' } };
export const Info: Story = { args: { value: 'Info', color: 'info' } };
export const Neutral: Story = { args: { value: 'Neutral', color: 'neutral' } };
export const Rounded: Story = { args: { value: 'Rounded', color: 'accent', rounded: true } };

export const AllColors: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <Tag value="Brand" color="brand" />
        <Tag value="Accent" color="accent" />
        <Tag value="Neutral" color="neutral" />
        <Tag value="Success" color="success" />
        <Tag value="Warning" color="warning" />
        <Tag value="Danger" color="danger" />
        <Tag value="Info" color="info" />
      </div>
    `,
  }),
};
