import type { Meta, StoryObj } from '@storybook/vue3';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    message: { control: 'text' },
    icon: { control: 'select', options: ['warning', 'danger', 'info', ''] },
    acceptLabel: { control: 'text' },
    rejectLabel: { control: 'text' },
    dismissableMask: { control: 'boolean' },
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ConfirmDialog },
    setup() {
      const visible = ref(true);
      return { args, visible };
    },
    template: `
      <div>
        <button @click="visible = true">Open Dialog</button>
        <ConfirmDialog
          v-bind="args"
          v-model:visible="visible"
          header="Confirm Action"
          message="Are you sure you want to proceed?"
          icon="warning"
        />
      </div>
    `,
  }),
};

export const Danger: Story = {
  render: (args) => ({
    components: { ConfirmDialog },
    setup() {
      const visible = ref(true);
      return { args, visible };
    },
    template: `
      <div>
        <button @click="visible = true">Delete Item</button>
        <ConfirmDialog
          v-bind="args"
          v-model:visible="visible"
          header="Delete Item"
          message="This action cannot be undone. Are you sure?"
          icon="danger"
          accept-label="Delete"
          reject-label="Cancel"
        />
      </div>
    `,
  }),
};

export const Info: Story = {
  render: (args) => ({
    components: { ConfirmDialog },
    setup() {
      const visible = ref(true);
      return { args, visible };
    },
    template: `
      <div>
        <button @click="visible = true">Info</button>
        <ConfirmDialog
          v-bind="args"
          v-model:visible="visible"
          header="Information"
          message="Your changes have been saved."
          icon="info"
          accept-label="OK"
          reject-label="Close"
        />
      </div>
    `,
  }),
};
