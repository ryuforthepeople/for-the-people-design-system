import type { Meta, StoryObj } from '@storybook/vue3';
import ScrollTop from '../../components/ScrollTop/ScrollTop.vue';

const meta = {
  title: 'Components/ScrollTop',
  component: ScrollTop,
  tags: ['autodocs'],
  argTypes: {
    threshold: { control: { type: 'number', min: 0, max: 1000 } },
    behavior: { control: 'select', options: ['smooth', 'auto', 'instant'] },
  },
} satisfies Meta<typeof ScrollTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ScrollTop },
    setup() { return { args }; },
    template: `
      <div>
        <p>Scroll down to see the ScrollTop button appear (threshold: 400px).</p>
        <div v-for="i in 30" :key="i" style="padding: 1rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;">
          Content block {{ i }}
        </div>
        <ScrollTop v-bind="args" />
      </div>
    `,
  }),
};

export const LowThreshold: Story = {
  render: (args) => ({
    components: { ScrollTop },
    setup() { return { args }; },
    template: `
      <div>
        <p>ScrollTop with low threshold (100px).</p>
        <div v-for="i in 30" :key="i" style="padding: 1rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;">
          Content block {{ i }}
        </div>
        <ScrollTop v-bind="args" :threshold="100" />
      </div>
    `,
  }),
};
