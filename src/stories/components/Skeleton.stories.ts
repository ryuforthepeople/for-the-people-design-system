import type { Meta, StoryObj } from '@storybook/vue3';
import Skeleton from '../../components/Skeleton/Skeleton.vue';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    shape: { control: 'select', options: ['rectangle', 'circle'] },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    animation: { control: 'select', options: ['wave', 'none'] },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() { return { args }; },
    template: `<Skeleton v-bind="args" width="100%" height="1.5rem" />`,
  }),
};

export const Circle: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() { return { args }; },
    template: `<Skeleton v-bind="args" shape="circle" width="4rem" height="4rem" />`,
  }),
};

export const CardPlaceholder: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <Skeleton shape="circle" width="3rem" height="3rem" />
        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
          <Skeleton width="60%" height="1rem" />
          <Skeleton width="100%" height="1rem" />
          <Skeleton width="80%" height="1rem" />
        </div>
      </div>
    `,
  }),
};

export const NoAnimation: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() { return { args }; },
    template: `<Skeleton v-bind="args" width="100%" height="1.5rem" animation="none" />`,
  }),
};
