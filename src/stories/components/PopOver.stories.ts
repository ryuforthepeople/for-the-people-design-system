import type { Meta, StoryObj } from '@storybook/vue3';
import PopOver from '../../components/PopOver/PopOver.vue';

const meta = {
  title: 'Components/PopOver',
  component: PopOver,
  tags: ['autodocs'],
  argTypes: {
    trigger: { control: 'select', options: ['hover', 'click'] },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    showDelay: { control: 'number' },
    hideDelay: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    trigger: 'hover',
    position: 'top',
    showDelay: 0,
    hideDelay: 0,
  },
} satisfies Meta<typeof PopOver>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { PopOver },
    setup() { return { args }; },
    template: `
      <div style="padding: 80px; text-align: center;">
        <PopOver v-bind="args">
          <template #trigger><button>Hover me</button></template>
          Popover content here
        </PopOver>
      </div>
    `,
  }),
};

export const ClickTrigger: Story = {
  ...Default,
  args: { trigger: 'click' },
};

export const Bottom: Story = {
  ...Default,
  args: { position: 'bottom' },
};

export const Left: Story = {
  ...Default,
  args: { position: 'left' },
};

export const Right: Story = {
  ...Default,
  args: { position: 'right' },
};

export const WithDelay: Story = {
  ...Default,
  args: { showDelay: 300, hideDelay: 200 },
};
