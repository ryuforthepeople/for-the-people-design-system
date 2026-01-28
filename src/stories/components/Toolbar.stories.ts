import type { Meta, StoryObj } from '@storybook/vue3';
import Toolbar from '../../components/Toolbar/Toolbar.vue';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Toolbar },
    setup() { return { args }; },
    template: `
      <Toolbar v-bind="args">
        <template #start>
          <button style="margin-right: 0.5rem;">New</button>
          <button>Open</button>
        </template>
        <template #end>
          <button>Settings</button>
        </template>
      </Toolbar>
    `,
  }),
};

export const WithCenter: Story = {
  render: (args) => ({
    components: { Toolbar },
    setup() { return { args }; },
    template: `
      <Toolbar v-bind="args">
        <template #start>
          <button>Back</button>
        </template>
        <template #center>
          <strong>Page Title</strong>
        </template>
        <template #end>
          <button>Save</button>
        </template>
      </Toolbar>
    `,
  }),
};

export const StartOnly: Story = {
  render: (args) => ({
    components: { Toolbar },
    setup() { return { args }; },
    template: `
      <Toolbar v-bind="args">
        <template #start>
          <button style="margin-right: 0.5rem;">Cut</button>
          <button style="margin-right: 0.5rem;">Copy</button>
          <button>Paste</button>
        </template>
      </Toolbar>
    `,
  }),
};
