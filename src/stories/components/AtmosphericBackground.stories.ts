import type { Meta, StoryObj } from '@storybook/vue3';
import AtmosphericBackground from '../../components/AtmosphericBackground/AtmosphericBackground.vue';

const meta = {
  title: 'Components/AtmosphericBackground',
  component: AtmosphericBackground,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'vibrant', 'dark', 'subtle'] },
    particles: { control: 'boolean' },
    particleCount: { control: { type: 'number', min: 0, max: 500 } },
    parallax: { control: 'boolean' },
  },
} satisfies Meta<typeof AtmosphericBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { AtmosphericBackground },
    setup() { return { args }; },
    template: `
      <div style="height: 400px; position: relative;">
        <AtmosphericBackground v-bind="args">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 2rem;">
            Cosmic Background
          </div>
        </AtmosphericBackground>
      </div>
    `,
  }),
};

export const Vibrant: Story = {
  render: (args) => ({
    components: { AtmosphericBackground },
    setup() { return { args }; },
    template: `
      <div style="height: 400px; position: relative;">
        <AtmosphericBackground v-bind="args" variant="vibrant">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white;">
            Vibrant Variant
          </div>
        </AtmosphericBackground>
      </div>
    `,
  }),
};

export const NoParticles: Story = {
  render: (args) => ({
    components: { AtmosphericBackground },
    setup() { return { args }; },
    template: `
      <div style="height: 400px; position: relative;">
        <AtmosphericBackground v-bind="args" :particles="false">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white;">
            No Particles
          </div>
        </AtmosphericBackground>
      </div>
    `,
  }),
};
