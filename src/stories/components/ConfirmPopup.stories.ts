import type { Meta, StoryObj } from '@storybook/vue3';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/ConfirmPopup',
  component: ConfirmPopup,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    acceptLabel: { control: 'text' },
    rejectLabel: { control: 'text' },
    showIcon: { control: 'boolean' },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
} satisfies Meta<typeof ConfirmPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ConfirmPopup },
    setup() {
      const buttonRef = ref(null);
      return { args, buttonRef };
    },
    template: `
      <div style="padding: 4rem; text-align: center;">
        <button ref="buttonRef">Click to Confirm</button>
        <ConfirmPopup
          v-bind="args"
          :target="buttonRef"
          message="Are you sure?"
        />
      </div>
    `,
  }),
};

export const CustomLabels: Story = {
  render: (args) => ({
    components: { ConfirmPopup },
    setup() {
      const buttonRef = ref(null);
      return { args, buttonRef };
    },
    template: `
      <div style="padding: 4rem; text-align: center;">
        <button ref="buttonRef">Delete</button>
        <ConfirmPopup
          v-bind="args"
          :target="buttonRef"
          message="Delete this item?"
          accept-label="Yes, delete"
          reject-label="No, keep"
        />
      </div>
    `,
  }),
};
