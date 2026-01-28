import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

const radii: Record<string, string> = {
  '0': '0', '1': '2px', '2': '3px', '3': '5px', '4': '8px', '5': '13px', '6': '21px', 'full': '9999px',
};

const RadiusPage = defineComponent({
  name: 'RadiusPage',
  setup() {
    return () => h('div', { style: 'padding: 24px; max-width: 900px;' }, [
      h('h1', { style: 'font-size: 32px; margin-bottom: 8px; font-family: Manrope, sans-serif;' }, 'Border Radius'),
      h('p', { style: 'color: #9ea5c2; margin-bottom: 32px; font-size: 14px;' }, 'Radius scale from sharp to fully rounded.'),
      h('div', { style: 'display: flex; flex-wrap: wrap; gap: 24px;' },
        Object.entries(radii).map(([step, value]) =>
          h('div', { style: 'display: flex; flex-direction: column; align-items: center; gap: 8px;' }, [
            h('div', {
              style: `width: 80px; height: 80px; background: linear-gradient(135deg, #f97316, #f59e0b);
                border-radius: ${value};`
            }),
            h('span', { style: 'font-size: 13px; color: #ffffff; font-weight: 600;' }, `radius-${step}`),
            h('span', { style: 'font-size: 11px; color: #525d8f; font-family: monospace;' }, value),
          ])
        )
      ),
    ]);
  },
});

const meta = {
  title: 'Foundations/Radius',
  component: RadiusPage,
  tags: ['autodocs'],
} satisfies Meta<typeof RadiusPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllRadii: Story = {};
