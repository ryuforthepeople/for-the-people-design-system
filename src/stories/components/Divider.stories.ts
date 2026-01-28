import type { Meta, StoryObj } from '@storybook/vue3';
import Divider from '../../components/Divider/Divider.vue';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    type: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
    align: { control: 'select', options: ['left', 'center', 'right', 'top', 'bottom'] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Divider },
    setup() { return { args }; },
    template: `
      <div>
        <p>Content above</p>
        <Divider v-bind="args" />
        <p>Content below</p>
      </div>
    `,
  }),
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Divider },
    setup() { return { args }; },
    template: `
      <div>
        <p>Content above</p>
        <Divider v-bind="args">OR</Divider>
        <p>Content below</p>
      </div>
    `,
  }),
};

export const Dashed: Story = {
  render: (args) => ({
    components: { Divider },
    setup() { return { args }; },
    template: `
      <div>
        <p>Content above</p>
        <Divider v-bind="args" type="dashed" />
        <p>Content below</p>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  render: (args) => ({
    components: { Divider },
    setup() { return { args }; },
    template: `
      <div style="display: flex; align-items: center; height: 100px;">
        <span>Left</span>
        <Divider v-bind="args" layout="vertical" />
        <span>Right</span>
      </div>
    `,
  }),
};
