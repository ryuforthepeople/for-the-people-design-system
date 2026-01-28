import type { Meta, StoryObj } from '@storybook/vue3';
import DatePicker from '../../components/DatePicker/DatePicker.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    locale: { control: 'text' },
  },
  args: { placeholder: 'Select a date', disabled: false, locale: 'en-US' },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref<Date | null>(null);
      return { args, date };
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
};

export const WithValue: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref(new Date());
      return { args, date };
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref<Date | null>(null);
      return { args, date };
    },
    template: '<DatePicker v-bind="args" v-model="date" />',
  }),
};
