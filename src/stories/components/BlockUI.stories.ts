import type { Meta, StoryObj } from '@storybook/vue3';
import BlockUI from '../../components/BlockUI/BlockUI.vue';

const meta = {
  title: 'Components/BlockUI',
  component: BlockUI,
  tags: ['autodocs'],
  argTypes: {
    blocked: { control: 'boolean' },
    fullScreen: { control: 'boolean' },
    showSpinner: { control: 'boolean' },
  },
} satisfies Meta<typeof BlockUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BlockUI },
    setup() { return { args }; },
    template: `
      <BlockUI v-bind="args" :blocked="true">
        <div style="padding: 2rem; border: 1px solid var(--border-color, #ccc); border-radius: 8px;">
          <h3>Blocked Content</h3>
          <p>This content is blocked by the overlay.</p>
        </div>
      </BlockUI>
    `,
  }),
};

export const Unblocked: Story = {
  render: (args) => ({
    components: { BlockUI },
    setup() { return { args }; },
    template: `
      <BlockUI v-bind="args" :blocked="false">
        <div style="padding: 2rem; border: 1px solid var(--border-color, #ccc); border-radius: 8px;">
          <h3>Active Content</h3>
          <p>This content is interactive.</p>
        </div>
      </BlockUI>
    `,
  }),
};

export const NoSpinner: Story = {
  render: (args) => ({
    components: { BlockUI },
    setup() { return { args }; },
    template: `
      <BlockUI v-bind="args" :blocked="true" :show-spinner="false">
        <div style="padding: 2rem; border: 1px solid var(--border-color, #ccc); border-radius: 8px;">
          <h3>Blocked Without Spinner</h3>
          <p>Overlay only, no spinner icon.</p>
        </div>
      </BlockUI>
    `,
  }),
};
