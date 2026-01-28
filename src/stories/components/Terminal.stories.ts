import type { Meta, StoryObj } from '@storybook/vue3';
import Terminal from '../../components/Terminal/Terminal.vue';

const meta = {
  title: 'Components/Terminal',
  component: Terminal,
  tags: ['autodocs'],
  argTypes: {
    prompt: { control: 'text' },
    welcomeMessage: { control: 'text' },
  },
} satisfies Meta<typeof Terminal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Terminal },
    setup() {
      const onCommand = (text: string, callback: (response: string) => void) => {
        if (text === 'help') callback('Available commands: help, date, echo');
        else if (text === 'date') callback(new Date().toLocaleString());
        else if (text.startsWith('echo ')) callback(text.slice(5));
        else callback(`Unknown command: ${text}`);
      };
      return { args, onCommand };
    },
    template: `<Terminal v-bind="args" @command="onCommand" />`,
  }),
};

export const WithWelcome: Story = {
  render: (args) => ({
    components: { Terminal },
    setup() {
      const onCommand = (_text: string, callback: (response: string) => void) => {
        callback('Command executed.');
      };
      return { args, onCommand };
    },
    template: `<Terminal v-bind="args" welcome-message="Welcome to FTP Terminal v1.0. Type 'help' for commands." prompt="ftp>" @command="onCommand" />`,
  }),
};

export const CustomPrompt: Story = {
  render: (args) => ({
    components: { Terminal },
    setup() {
      const onCommand = (_text: string, callback: (response: string) => void) => {
        callback('Done.');
      };
      return { args, onCommand };
    },
    template: `<Terminal v-bind="args" prompt=">>>" @command="onCommand" />`,
  }),
};
