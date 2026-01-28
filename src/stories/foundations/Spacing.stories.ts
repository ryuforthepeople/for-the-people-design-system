import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

const spacingScale: Record<string, string> = {
  '0': '0', '1': '2px', '2': '4px', '3': '6px', '4': '10px',
  '5': '16px', '6': '26px', '7': '42px', '8': '68px', '9': '110px', '10': '178px',
};

const SpacingPage = defineComponent({
  name: 'SpacingPage',
  setup() {
    return () => h('div', { style: 'padding: 24px; max-width: 900px;' }, [
      h('h1', { style: 'font-size: 32px; margin-bottom: 8px; font-family: Manrope, sans-serif;' }, 'Spacing'),
      h('p', { style: 'color: #9ea5c2; margin-bottom: 32px; font-size: 14px;' }, 'Fibonacci-inspired spacing scale used throughout the design system.'),
      ...Object.entries(spacingScale).map(([step, value]) =>
        h('div', { style: 'display: flex; align-items: center; gap: 16px; margin-bottom: 12px;' }, [
          h('span', { style: 'min-width: 80px; font-size: 13px; color: #525d8f; font-family: monospace;' }, `spacing-${step}`),
          h('span', { style: 'min-width: 60px; font-size: 13px; color: #9ea5c2;' }, value),
          h('div', { style: `height: 24px; width: ${value}; background: linear-gradient(90deg, #f97316, #f59e0b); border-radius: 4px; min-width: 2px;` }),
        ])
      ),
    ]);
  },
});

const meta = {
  title: 'Foundations/Spacing',
  component: SpacingPage,
  tags: ['autodocs'],
} satisfies Meta<typeof SpacingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {};
