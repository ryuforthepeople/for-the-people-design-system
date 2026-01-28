import type { Meta, StoryObj } from '@storybook/vue3';
import Panel from '../../components/Panel/Panel.vue';

const meta = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    toggleable: { control: 'boolean' },
    collapsed: { control: 'boolean' },
  },
  args: {
    header: 'Panel Header',
    toggleable: false,
    collapsed: false,
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Panel },
    setup() { return { args }; },
    template: '<Panel v-bind="args"><p>Panel content goes here.</p></Panel>',
  }),
};

export const Toggleable: Story = {
  ...Default,
  args: { toggleable: true, header: 'Toggleable Panel' },
};

export const Collapsed: Story = {
  ...Default,
  args: { toggleable: true, collapsed: true, header: 'Collapsed Panel' },
};
