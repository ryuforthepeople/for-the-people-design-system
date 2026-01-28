import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Dialog from '../../components/Dialog/Dialog.vue';
import Button from '../../components/Button/Button.vue';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    modal: { control: 'boolean' },
    closable: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    draggable: { control: 'boolean' },
    dismissableMask: { control: 'boolean' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <Button label="Open Dialog" @click="visible = true" />
      <Dialog v-bind="args" :visible="visible" @update:visible="visible = $event" header="Modal Dialog" :modal="true" size="md">
        <p style="color: #9ea5c2;">This is a modal dialog with backdrop overlay. Click the X or press Escape to close.</p>
      </Dialog>
    `,
  }),
};

export const LargeDialog: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <Button label="Open Large Dialog" @click="visible = true" />
      <Dialog v-bind="args" :visible="visible" @update:visible="visible = $event" header="Large Dialog" :modal="true" size="lg">
        <p style="color: #9ea5c2;">A larger dialog for more content.</p>
      </Dialog>
    `,
  }),
};
