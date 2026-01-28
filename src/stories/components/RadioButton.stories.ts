import type { Meta, StoryObj } from '@storybook/vue3';
import RadioButton from '../../components/RadioButton/RadioButton.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const selected = ref('option1');
      return { args, selected };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <RadioButton v-bind="args" v-model="selected" value="option1" label="Option 1" name="demo" />
        <RadioButton v-bind="args" v-model="selected" value="option2" label="Option 2" name="demo" />
        <RadioButton v-bind="args" v-model="selected" value="option3" label="Option 3" name="demo" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { RadioButton },
    setup() {
      const selected = ref('a');
      return { selected };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <RadioButton v-model="selected" value="a" label="Disabled checked" name="dis" :isDisabled="true" />
        <RadioButton v-model="selected" value="b" label="Disabled unchecked" name="dis" :isDisabled="true" />
      </div>
    `,
  }),
};

export const Invalid: Story = {
  render: () => ({
    components: { RadioButton },
    setup() {
      const selected = ref(null);
      return { selected };
    },
    template: '<RadioButton v-model="selected" value="x" label="Invalid option" name="inv" :isInvalid="true" />',
  }),
};
