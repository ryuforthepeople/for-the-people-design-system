import type { Meta, StoryObj } from '@storybook/vue3';
import Drawer from '../../components/Drawer/Drawer.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    header: { control: 'text' },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    closable: { control: 'boolean' },
    dismissable: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    blockScroll: { control: 'boolean' },
  },
  args: {
    header: 'Drawer Title',
    position: 'right',
    size: 'md',
    closable: true,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Drawer },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <button @click="visible = true">Open Drawer</button>
        <Drawer v-bind="args" :visible="visible" @update:visible="visible = $event">
          <p>Drawer content goes here.</p>
        </Drawer>
      </div>
    `,
  }),
};

export const LeftPosition: Story = {
  ...Default,
  args: { position: 'left', header: 'Left Drawer' },
};

export const TopPosition: Story = {
  ...Default,
  args: { position: 'top', header: 'Top Drawer' },
};

export const Large: Story = {
  ...Default,
  args: { size: 'lg', header: 'Large Drawer' },
};
