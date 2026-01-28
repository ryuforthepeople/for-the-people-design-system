import type { Meta, StoryObj } from '@storybook/vue3';
import Chart from '../../components/Chart/Chart.vue';

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    data: [65, 59, 80, 81, 56, 72],
    backgroundColor: 'rgba(99, 102, 241, 0.5)',
    borderColor: '#6366f1',
    borderWidth: 1,
  }],
};

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Users',
    data: [30, 45, 35, 60, 50, 75],
    borderColor: '#8b5cf6',
    tension: 0.3,
    fill: false,
  }],
};

const pieData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [{
    data: [55, 35, 10],
    backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7'],
  }],
};

const meta = {
  title: 'Components/Chart',
  component: Chart,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['bar', 'line', 'pie', 'doughnut', 'radar', 'polarArea'] },
    title: { control: 'text' },
    isLoading: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {
  render: (args) => ({
    components: { Chart },
    setup() { return { args, barData }; },
    template: `<Chart v-bind="args" type="bar" :data="barData" title="Monthly Revenue" />`,
  }),
};

export const Line: Story = {
  render: (args) => ({
    components: { Chart },
    setup() { return { args, lineData }; },
    template: `<Chart v-bind="args" type="line" :data="lineData" title="User Growth" />`,
  }),
};

export const Pie: Story = {
  render: (args) => ({
    components: { Chart },
    setup() { return { args, pieData }; },
    template: `<Chart v-bind="args" type="pie" :data="pieData" title="Device Distribution" />`,
  }),
};

export const Loading: Story = {
  render: (args) => ({
    components: { Chart },
    setup() { return { args }; },
    template: `<Chart v-bind="args" type="bar" :is-loading="true" title="Loading Chart" />`,
  }),
};

export const NoData: Story = {
  render: (args) => ({
    components: { Chart },
    setup() { return { args }; },
    template: `<Chart v-bind="args" type="bar" :data="null" title="Empty Chart" />`,
  }),
};
