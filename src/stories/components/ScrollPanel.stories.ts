import type { Meta, StoryObj } from '@storybook/vue3';
import ScrollPanel from '../../components/ScrollPanel/ScrollPanel.vue';

const meta = {
  title: 'Components/ScrollPanel',
  component: ScrollPanel,
  tags: ['autodocs'],
  argTypes: {
    step: { control: { type: 'number', min: 1, max: 100 } },
  },
} satisfies Meta<typeof ScrollPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ScrollPanel },
    setup() { return { args }; },
    template: `
      <ScrollPanel v-bind="args" :style="{ width: '400px', height: '200px' }">
        <p v-for="i in 20" :key="i" style="margin: 0.5rem 0;">
          Scrollable content line {{ i }}. Lorem ipsum dolor sit amet consectetur.
        </p>
      </ScrollPanel>
    `,
  }),
};

export const HorizontalScroll: Story = {
  render: (args) => ({
    components: { ScrollPanel },
    setup() { return { args }; },
    template: `
      <ScrollPanel v-bind="args" :style="{ width: '400px', height: '150px' }">
        <div style="white-space: nowrap;">
          <span v-for="i in 50" :key="i" style="display: inline-block; width: 100px; padding: 1rem; text-align: center; border: 1px solid #eee;">
            Item {{ i }}
          </span>
        </div>
      </ScrollPanel>
    `,
  }),
};
