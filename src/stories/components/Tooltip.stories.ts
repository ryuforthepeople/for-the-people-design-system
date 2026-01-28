import type { Meta, StoryObj } from '@storybook/vue3';
import Tooltip from '../../components/Tooltip/Tooltip.vue';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    showDelay: { control: { type: 'number', min: 0, max: 2000 } },
    hideDelay: { control: { type: 'number', min: 0, max: 2000 } },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <div style="padding: 4rem; text-align: center;">
        <Tooltip v-bind="args" content="This is a tooltip">
          <button>Hover me</button>
        </Tooltip>
      </div>
    `,
  }),
};

export const Bottom: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <div style="padding: 4rem; text-align: center;">
        <Tooltip v-bind="args" content="Bottom tooltip" position="bottom">
          <button>Bottom</button>
        </Tooltip>
      </div>
    `,
  }),
};

export const Left: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <div style="padding: 4rem; text-align: center;">
        <Tooltip v-bind="args" content="Left tooltip" position="left">
          <button>Left</button>
        </Tooltip>
      </div>
    `,
  }),
};

export const AllPositions: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <div style="padding: 4rem; display: flex; gap: 2rem; justify-content: center;">
        <Tooltip content="Top" position="top"><button>Top</button></Tooltip>
        <Tooltip content="Bottom" position="bottom"><button>Bottom</button></Tooltip>
        <Tooltip content="Left" position="left"><button>Left</button></Tooltip>
        <Tooltip content="Right" position="right"><button>Right</button></Tooltip>
      </div>
    `,
  }),
};
