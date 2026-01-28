import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

const shadows: Record<string, { value: string; desc: string }> = {
  '1': { value: '0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.08)', desc: 'Subtle — hover states' },
  '2': { value: '0 2px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)', desc: 'Low — cards, buttons' },
  '3': { value: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)', desc: 'Medium — dropdowns' },
  '4': { value: '0 8px 16px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)', desc: 'High — modals' },
  '5': { value: '0 16px 32px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08)', desc: 'Highest — toasts' },
};

const ShadowsPage = defineComponent({
  name: 'ShadowsPage',
  setup() {
    return () => h('div', { style: 'padding: 24px; max-width: 900px;' }, [
      h('h1', { style: 'font-size: 32px; margin-bottom: 8px; font-family: Manrope, sans-serif;' }, 'Shadows'),
      h('p', { style: 'color: #9ea5c2; margin-bottom: 32px; font-size: 14px;' }, '5-level elevation system for depth and hierarchy.'),
      h('div', { style: 'display: flex; flex-wrap: wrap; gap: 24px;' },
        Object.entries(shadows).map(([level, { value, desc }]) =>
          h('div', {
            style: `width: 200px; height: 140px; background: #11162d; border-radius: 12px;
              box-shadow: ${value}; display: flex; flex-direction: column; align-items: center;
              justify-content: center; border: 1px solid #1a2244;`
          }, [
            h('span', { style: 'font-size: 24px; font-weight: 700; color: #fbbf24;' }, `shadow-${level}`),
            h('span', { style: 'font-size: 12px; color: #9ea5c2; margin-top: 8px; text-align: center; padding: 0 12px;' }, desc),
          ])
        )
      ),
    ]);
  },
});

const meta = {
  title: 'Foundations/Shadows',
  component: ShadowsPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ShadowsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllShadows: Story = {};
