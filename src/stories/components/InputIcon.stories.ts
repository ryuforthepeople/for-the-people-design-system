import type { Meta, StoryObj } from '@storybook/vue3';
import InputIcon from '../../components/InputIcon/InputIcon.vue';

const meta = {
  title: 'Components/InputIcon',
  component: InputIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    position: { control: 'select', options: ['left', 'right'] },
  },
  args: {
    size: 'md',
    position: 'left',
  },
} satisfies Meta<typeof InputIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InputIcon },
    setup() { return { args }; },
    template: '<InputIcon v-bind="args"><i class="pi pi-search"></i></InputIcon>',
  }),
};

export const Right: Story = {
  render: (args) => ({
    components: { InputIcon },
    setup() { return { args }; },
    template: '<InputIcon v-bind="args" position="right"><i class="pi pi-times"></i></InputIcon>',
  }),
};

export const Small: Story = {
  render: (args) => ({
    components: { InputIcon },
    setup() { return { args }; },
    template: '<InputIcon v-bind="args" size="sm"><i class="pi pi-search"></i></InputIcon>',
  }),
};
