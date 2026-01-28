import type { Meta, StoryObj } from '@storybook/vue3';
import Toast from '../../components/Toast/Toast.vue';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'],
    },
    showIcon: { control: 'boolean' },
    showProgress: { control: 'boolean' },
  },
  args: { position: 'top-right', showIcon: true },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Toast },
    template: `
      <div>
        <p style="color: #9ea5c2; font-size: 14px; margin-bottom: 16px;">
          Toast component renders notification messages. In real usage, it is controlled via a toast service.
          Below is a static preview of the component.
        </p>
        <Toast position="top-right" />
      </div>
    `,
  }),
};
