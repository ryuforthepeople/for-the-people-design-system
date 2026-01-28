import type { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from '../../components/Sidebar/Sidebar.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    header: { control: 'text' },
    position: { control: 'select', options: ['left', 'right'] },
    fullScreen: { control: 'boolean' },
    closable: { control: 'boolean' },
    dismissable: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    blockScroll: { control: 'boolean' },
  },
  args: {
    header: 'Sidebar',
    position: 'left',
    closable: true,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Sidebar },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <button @click="visible = true">Open Sidebar</button>
        <Sidebar v-bind="args" :visible="visible" @update:visible="visible = $event">
          <p>Sidebar content</p>
        </Sidebar>
      </div>
    `,
  }),
};

export const RightPosition: Story = {
  ...Default,
  args: { position: 'right', header: 'Right Sidebar' },
};

export const FullScreen: Story = {
  ...Default,
  args: { fullScreen: true, header: 'Full Screen' },
};
