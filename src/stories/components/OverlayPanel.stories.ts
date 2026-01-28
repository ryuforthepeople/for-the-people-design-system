import type { Meta, StoryObj } from '@storybook/vue3';
import OverlayPanel from '../../components/OverlayPanel/OverlayPanel.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/OverlayPanel',
  component: OverlayPanel,
  tags: ['autodocs'],
  argTypes: {
    dismissable: { control: 'boolean' },
    showCloseIcon: { control: 'boolean' },
    appendTo: { control: 'text' },
  },
  args: {
    dismissable: true,
    showCloseIcon: false,
  },
} satisfies Meta<typeof OverlayPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { OverlayPanel },
    setup() {
      const op = ref();
      const toggle = (event: Event) => op.value?.toggle?.(event) ?? op.value?.show?.(event);
      return { args, op, toggle };
    },
    template: `
      <div>
        <button @click="toggle">Toggle Panel</button>
        <OverlayPanel ref="op" v-bind="args">
          <p>Overlay panel content here.</p>
        </OverlayPanel>
      </div>
    `,
  }),
};

export const WithCloseIcon: Story = {
  ...Default,
  args: { showCloseIcon: true },
};

export const NonDismissable: Story = {
  ...Default,
  args: { dismissable: false, showCloseIcon: true },
};
