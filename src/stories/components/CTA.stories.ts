import type { Meta, StoryObj } from '@storybook/vue3';
import CTA from '../../components/CTA/CTA.vue';

const meta = {
  title: 'Components/CTA',
  component: CTA,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['banner', 'card', 'inline'] },
    alignment: { control: 'select', options: ['left', 'center', 'right'] },
  },
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: { title: 'Ready to get started?', description: 'Join thousands of teams already shipping faster.', variant: 'banner' },
  render: (args) => ({
    components: { CTA },
    setup: () => ({ args }),
    template: `
      <CTA v-bind="args">
        <template #actions>
          <button style="padding: 12px 24px; background: #fff; color: #1a1a2e; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Start Free Trial</button>
        </template>
      </CTA>
    `,
  }),
};

export const CardVariant: Story = {
  args: { title: 'Need help?', description: 'Our team is here to assist you with anything.', variant: 'card', alignment: 'left' },
  render: Banner.render,
};

export const Inline: Story = {
  args: { title: 'Subscribe to updates', variant: 'inline' },
  render: Banner.render,
};
