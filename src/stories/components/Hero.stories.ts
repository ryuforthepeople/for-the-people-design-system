import type { Meta, StoryObj } from '@storybook/vue3';
import Hero from '../../components/Hero/Hero.vue';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    alignment: { control: 'select', options: ['left', 'center', 'right'] },
    fullHeight: { control: 'boolean' },
    overlay: { control: 'boolean' },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    title: 'Build something extraordinary',
    subtitle: 'The modern design system for teams who ship fast and build with confidence.',
    alignment: 'center',
  },
  render: (args) => ({
    components: { Hero },
    setup: () => ({ args }),
    template: `
      <Hero v-bind="args">
        <template #actions>
          <button style="padding: 12px 24px; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Get Started</button>
          <button style="padding: 12px 24px; background: transparent; color: #9ea5c2; border: 1px solid #3a3f5c; border-radius: 8px; cursor: pointer;">Learn More</button>
        </template>
      </Hero>
    `,
  }),
};

export const LeftAligned: Story = {
  args: {
    title: 'Design at scale',
    subtitle: 'Ship consistent, accessible, and beautiful interfaces across all your products.',
    alignment: 'left',
  },
  render: (args) => ({
    components: { Hero },
    setup: () => ({ args }),
    template: `
      <Hero v-bind="args">
        <template #media>
          <div style="width: 400px; height: 300px; background: linear-gradient(135deg, #6366f1, #a855f7); border-radius: 16px; opacity: 0.3;" />
        </template>
        <template #actions>
          <button style="padding: 12px 24px; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Start Free</button>
        </template>
      </Hero>
    `,
  }),
};

export const FullHeight: Story = {
  args: {
    title: 'Welcome',
    subtitle: 'Full viewport hero section with overlay.',
    alignment: 'center',
    fullHeight: true,
    overlay: true,
    backgroundImage: 'https://picsum.photos/1920/1080',
  },
};
