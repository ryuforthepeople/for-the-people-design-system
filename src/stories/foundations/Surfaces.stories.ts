import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

const layers = [
  { level: 0, token: 'surface-canvas', bg: '#0a0e1f', border: 'none', shadow: 'none', usage: 'Page background' },
  { level: 1, token: 'surface-panel', bg: '#11162d', border: 'border-subtle', shadow: 'shadow-xs', usage: 'Cards, sidebars, sections' },
  { level: 2, token: 'surface-elevated', bg: '#1a2244', border: 'border-default', shadow: 'shadow-s', usage: 'Nested cards, form sections' },
  { level: 3, token: 'surface-raised', bg: '#242e5c', border: 'border-strong', shadow: 'shadow-m', usage: 'Dropdowns, popovers, tooltips' },
  { level: 4, token: 'surface-elevated', bg: '#1a2244', border: 'border-strong', shadow: 'shadow-xl', usage: 'Modals, dialogs, command palette' },
];

const sectionTitle = (text: string) =>
  h('h2', { style: 'font-size: 22px; font-weight: 700; margin: 48px 0 16px; font-family: Manrope, sans-serif; color: #fff;' }, text);

const caption = (text: string) =>
  h('p', { style: 'color: #9ea5c2; font-size: 14px; margin-bottom: 24px;' }, text);

const badge = (text: string, color = '#fbbf24') =>
  h('span', {
    style: `display: inline-block; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: ${color}; background: rgba(251,191,36,0.12); margin-bottom: 4px;`,
  }, text);

const SurfacesPage = defineComponent({
  name: 'SurfacesPage',
  setup() {
    return () => h('div', { style: 'padding: 32px; max-width: 1000px; font-family: Manrope, sans-serif; color: #fff;' }, [

      // Title
      h('h1', { style: 'font-size: 32px; margin-bottom: 8px;' }, 'Surface Architecture'),
      caption('5-layer elevation model for surface nesting. Each layer gets progressively lighter with stronger borders and deeper shadows.'),

      // A. Nested layers demo
      sectionTitle('A. Nested Layers'),
      caption('Canvas → Card → Elevated section → Muted input — showing the visual hierarchy.'),
      h('div', {
        style: 'background: var(--surface-canvas, #0a0e1f); padding: 32px; border-radius: 16px;',
      }, [
        h('div', { style: 'color: #9ea5c2; font-size: 12px; margin-bottom: 12px;' }, 'Layer 0 — Canvas'),
        h('div', {
          style: 'background: var(--surface-panel, #11162d); border: 1px solid var(--border-subtle, #1a2244); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-xs);',
        }, [
          h('div', { style: 'color: #9ea5c2; font-size: 12px; margin-bottom: 12px;' }, 'Layer 1 — Card'),
          h('div', {
            style: 'background: var(--surface-elevated, #1a2244); border: 1px solid var(--border-default, #242e5c); border-radius: 10px; padding: 20px; box-shadow: var(--shadow-s);',
          }, [
            h('div', { style: 'color: #9ea5c2; font-size: 12px; margin-bottom: 12px;' }, 'Layer 2 — Elevated section'),
            h('div', {
              style: 'background: var(--surface-muted, #060813); border: 1px solid var(--border-subtle, #1a2244); border-radius: 8px; padding: 12px 16px; color: #9ea5c2; font-size: 14px;',
            }, 'Muted input field (recessed)'),
          ]),
        ]),
      ]),

      // B. Side by side
      sectionTitle('B. All 5 Layers'),
      caption('Each layer shown side by side with its properties.'),
      h('div', { style: 'display: flex; flex-wrap: wrap; gap: 16px;' },
        layers.map(({ level, token, bg, usage }) =>
          h('div', {
            style: `width: 170px; height: 150px; background: var(--${token}, ${bg}); border-radius: 12px;
              border: 1px solid var(--border-${level === 0 ? 'subtle' : level <= 2 ? 'default' : 'strong'}, #1a2244);
              box-shadow: var(--shadow-${['none', 'xs', 's', 'm', 'xl'][level]});
              display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px; text-align: center;`,
          }, [
            h('span', { style: 'font-size: 28px; font-weight: 800; color: #fbbf24;' }, `${level}`),
            h('span', { style: 'font-size: 11px; color: #9ea5c2; margin-top: 6px;' }, `--${token}`),
            h('span', { style: 'font-size: 11px; color: #7680a9; margin-top: 4px;' }, usage),
          ])
        )
      ),

      // C. Rules table
      sectionTitle('C. Elevation Reference'),
      h('table', {
        style: 'width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 32px;',
      }, [
        h('thead', {}, [
          h('tr', { style: 'text-align: left; border-bottom: 2px solid #1a2244;' },
            ['Layer', 'Token', 'Border', 'Shadow', 'Usage'].map(col =>
              h('th', { style: 'padding: 8px 12px; color: #9ea5c2; font-weight: 600;' }, col)
            )
          ),
        ]),
        h('tbody', {},
          layers.map(({ level, token, border, shadow, usage }) =>
            h('tr', { style: 'border-bottom: 1px solid #1a2244;' }, [
              h('td', { style: 'padding: 8px 12px; font-weight: 700; color: #fbbf24;' }, `${level}`),
              h('td', { style: 'padding: 8px 12px; font-family: monospace; color: #fff;' }, `--${token}`),
              h('td', { style: 'padding: 8px 12px; font-family: monospace; color: #9ea5c2;' }, border),
              h('td', { style: 'padding: 8px 12px; font-family: monospace; color: #9ea5c2;' }, shadow),
              h('td', { style: 'padding: 8px 12px; color: #c5c9db;' }, usage),
            ])
          )
        ),
      ]),

      // D. Accent card
      sectionTitle('D. Accent Surface'),
      caption('Highlighted card with vibrant gradient border.'),
      h('div', {
        style: `width: 300px; padding: 24px; border-radius: 12px;
          background: linear-gradient(var(--surface-accent, #78350f), var(--surface-accent, #78350f)) padding-box,
                      linear-gradient(135deg, var(--accent-gradient-start, #f97316), var(--accent-gradient-end, #f59e0b)) border-box;
          border: 2px solid transparent;`,
      }, [
        h('div', { style: 'font-weight: 700; font-size: 16px; margin-bottom: 8px;' }, 'Accent Card'),
        h('div', { style: 'color: #c5c9db; font-size: 14px;' }, 'Used for highlighted or featured content with gradient border.'),
      ]),

      // E. Muted/recessed
      sectionTitle('E. Muted / Recessed Surface'),
      caption('Input inside a card — darker than the parent to create a recessed feel.'),
      h('div', {
        style: 'background: var(--surface-panel, #11162d); border: 1px solid var(--border-subtle, #1a2244); border-radius: 12px; padding: 24px; width: 360px;',
      }, [
        h('label', { style: 'display: block; font-size: 13px; color: #9ea5c2; margin-bottom: 6px;' }, 'Email address'),
        h('div', {
          style: 'background: var(--surface-muted, #060813); border: 1px solid var(--border-subtle, #1a2244); border-radius: 8px; padding: 10px 14px; color: #525d8f; font-size: 14px;',
        }, 'user@example.com'),
        h('label', { style: 'display: block; font-size: 13px; color: #9ea5c2; margin-bottom: 6px; margin-top: 16px;' }, 'Password'),
        h('div', {
          style: 'background: var(--surface-muted, #060813); border: 1px solid var(--border-subtle, #1a2244); border-radius: 8px; padding: 10px 14px; color: #525d8f; font-size: 14px;',
        }, '••••••••'),
      ]),
    ]);
  },
});

const meta = {
  title: 'Foundations/Surfaces',
  component: SurfacesPage,
  tags: ['autodocs'],
} satisfies Meta<typeof SurfacesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
