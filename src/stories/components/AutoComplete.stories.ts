import type { Meta, StoryObj } from '@storybook/vue3';
import AutoComplete from '../../components/AutoComplete/AutoComplete.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
  args: {
    placeholder: 'Search...',
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

export const Default: Story = {
  render: (args) => ({
    components: { AutoComplete },
    setup() {
      const value = ref('');
      const items = ref<string[]>([]);
      const search = (event: any) => {
        items.value = suggestions.filter(s => s.toLowerCase().includes(event.query.toLowerCase()));
      };
      return { args, value, items, search };
    },
    template: '<AutoComplete v-bind="args" v-model="value" :suggestions="items" @complete="search" />',
  }),
};

export const Multiple: Story = {
  render: (args) => ({
    components: { AutoComplete },
    setup() {
      const value = ref([]);
      const items = ref<string[]>([]);
      const search = (event: any) => {
        items.value = suggestions.filter(s => s.toLowerCase().includes(event.query.toLowerCase()));
      };
      return { args, value, items, search };
    },
    template: '<AutoComplete v-bind="args" v-model="value" :suggestions="items" :multiple="true" @complete="search" />',
  }),
};

export const Disabled: Story = {
  args: { isDisabled: true, placeholder: 'Disabled' },
};

export const Loading: Story = {
  args: { isLoading: true, placeholder: 'Loading...' },
};
