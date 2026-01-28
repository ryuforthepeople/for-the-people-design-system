import type { Meta, StoryObj } from '@storybook/vue3';
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground.vue';

const meta = {
  title: 'Components/ParticleBackground',
  component: ParticleBackground,
  tags: ['autodocs'],
  argTypes: {
    particleCount: { control: { type: 'number', min: 0, max: 500 } },
    staticStarCount: { control: { type: 'number', min: 0, max: 1000 } },
    particleColor: { control: 'color' },
    speed: { control: { type: 'number', min: 0, max: 2, step: 0.1 } },
    twinkle: { control: 'boolean' },
    parallax: { control: 'boolean' },
    fixed: { control: 'boolean' },
  },
} satisfies Meta<typeof ParticleBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ParticleBackground },
    setup() { return { args }; },
    template: `
      <div style="height: 400px; position: relative; background: #0a0e1a;">
        <ParticleBackground v-bind="args" />
      </div>
    `,
  }),
};

export const HighDensity: Story = {
  render: (args) => ({
    components: { ParticleBackground },
    setup() { return { args }; },
    template: `
      <div style="height: 400px; position: relative; background: #0a0e1a;">
        <ParticleBackground v-bind="args" :particle-count="400" :static-star-count="800" />
      </div>
    `,
  }),
};

export const CustomColor: Story = {
  render: (args) => ({
    components: { ParticleBackground },
    setup() { return { args }; },
    template: `
      <div style="height: 400px; position: relative; background: #1a0a2e;">
        <ParticleBackground v-bind="args" particle-color="rgba(180, 120, 255, 0.8)" />
      </div>
    `,
  }),
};
