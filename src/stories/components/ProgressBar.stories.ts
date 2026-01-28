import type { Meta, StoryObj } from '@storybook/vue3';
import ProgressBar from '../../components/ProgressBar/ProgressBar.vue';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    showValue: { control: 'boolean' },
    mode: { control: 'select', options: ['determinate', 'indeterminate'] },
  },
  args: { value: 60, showValue: true, mode: 'determinate' },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = { args: { value: 65, showValue: true } };
export const Full: Story = { args: { value: 100, showValue: true } };
export const NoValue: Story = { args: { value: 40, showValue: false } };
export const Indeterminate: Story = { args: { mode: 'indeterminate' } };

export const ProgressSteps: Story = {
  render: () => ({
    components: { ProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <ProgressBar :value="25" :showValue="true" />
        <ProgressBar :value="50" :showValue="true" />
        <ProgressBar :value="75" :showValue="true" />
        <ProgressBar :value="100" :showValue="true" />
        <ProgressBar mode="indeterminate" />
      </div>
    `,
  }),
};
