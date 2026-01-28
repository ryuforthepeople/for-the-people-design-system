import type { Meta, StoryObj } from '@storybook/vue3';
import Splitter from '../../components/Splitter/Splitter.vue';
import SplitterPanel from '../../components/Splitter/SplitterPanel.vue';

const meta = {
  title: 'Components/Splitter',
  component: Splitter,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    gutterSize: { control: { type: 'number', min: 1, max: 30 } },
  },
} satisfies Meta<typeof Splitter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Splitter, SplitterPanel },
    setup() { return { args }; },
    template: `
      <Splitter v-bind="args" style="height: 300px;">
        <SplitterPanel :size="50">
          <div style="padding: 1rem;">Panel 1</div>
        </SplitterPanel>
        <SplitterPanel :size="50">
          <div style="padding: 1rem;">Panel 2</div>
        </SplitterPanel>
      </Splitter>
    `,
  }),
};

export const Vertical: Story = {
  render: (args) => ({
    components: { Splitter, SplitterPanel },
    setup() { return { args }; },
    template: `
      <Splitter v-bind="args" layout="vertical" style="height: 400px;">
        <SplitterPanel :size="40">
          <div style="padding: 1rem;">Top Panel</div>
        </SplitterPanel>
        <SplitterPanel :size="60">
          <div style="padding: 1rem;">Bottom Panel</div>
        </SplitterPanel>
      </Splitter>
    `,
  }),
};

export const ThreePanels: Story = {
  render: (args) => ({
    components: { Splitter, SplitterPanel },
    setup() { return { args }; },
    template: `
      <Splitter v-bind="args" style="height: 300px;">
        <SplitterPanel :size="25">
          <div style="padding: 1rem;">Left</div>
        </SplitterPanel>
        <SplitterPanel :size="50">
          <div style="padding: 1rem;">Center</div>
        </SplitterPanel>
        <SplitterPanel :size="25">
          <div style="padding: 1rem;">Right</div>
        </SplitterPanel>
      </Splitter>
    `,
  }),
};
