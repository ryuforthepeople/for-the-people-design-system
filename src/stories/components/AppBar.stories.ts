import type { Meta, StoryObj } from '@storybook/vue3';
import AppBar from '../../components/AppBar/AppBar.vue';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    fixed: { control: 'boolean' },
    elevated: { control: 'boolean' },
    transparent: { control: 'boolean' },
    color: { control: 'color' },
  },
  args: { fixed: false, elevated: true, transparent: false },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { AppBar },
    setup: () => ({ args }),
    template: `
      <AppBar v-bind="args">
        <template #start>
          <span style="font-size: 1.25rem; font-weight: 700;">🏛️ FTP</span>
        </template>
        My Application
        <template #end>
          <button style="padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #fff; cursor: pointer;">Login</button>
        </template>
      </AppBar>
    `,
  }),
};

export const Transparent: Story = {
  args: { transparent: true, elevated: false },
  render: (args) => ({
    components: { AppBar },
    setup: () => ({ args }),
    template: `
      <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 0; min-height: 200px;">
        <AppBar v-bind="args">
          <template #start>🏛️</template>
          Transparent AppBar
          <template #end>
            <button style="padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.1); color: #fff; cursor: pointer;">Sign Up</button>
          </template>
        </AppBar>
      </div>
    `,
  }),
};

export const CustomColor: Story = {
  args: { color: '#1a1a2e' },
  render: (args) => ({
    components: { AppBar },
    setup: () => ({ args }),
    template: `
      <AppBar v-bind="args">
        <template #start>🎨</template>
        Custom Color
      </AppBar>
    `,
  }),
};
