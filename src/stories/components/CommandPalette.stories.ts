import type { Meta, StoryObj } from '@storybook/vue3';
import CommandPalette from '../../components/CommandPalette/CommandPalette.vue';
import { ref } from 'vue';

const sampleCommands = [
  { id: '1', label: 'Go to Dashboard', shortcut: '⌘D', group: 'Navigation', action: () => {} },
  { id: '2', label: 'Go to Settings', shortcut: '⌘,', group: 'Navigation', action: () => {} },
  { id: '3', label: 'Create New Project', shortcut: '⌘N', group: 'Actions', action: () => {} },
  { id: '4', label: 'Search Users', group: 'Actions', action: () => {} },
  { id: '5', label: 'Toggle Dark Mode', shortcut: '⌘⇧D', group: 'Preferences', action: () => {} },
  { id: '6', label: 'Sign Out', group: 'Account', action: () => {} },
];

const meta = {
  title: 'Components/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
  args: {
    commands: sampleCommands,
    placeholder: 'Type a command or search…',
  },
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { CommandPalette },
    setup() {
      const open = ref(true);
      return { args, open };
    },
    template: '<CommandPalette v-bind="args" v-model:open="open" />',
  }),
};

export const WithTrigger: Story = {
  render: () => ({
    components: { CommandPalette },
    setup() {
      const open = ref(false);
      return { open, commands: sampleCommands };
    },
    template: `
      <div>
        <button @click="open = true" style="padding: 8px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: #fff; cursor: pointer;">
          Open Command Palette (⌘K)
        </button>
        <CommandPalette :commands="commands" v-model:open="open" />
      </div>
    `,
  }),
};
