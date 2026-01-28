import type { Meta, StoryObj } from '@storybook/vue3';
import InPlace from '../../components/InPlace/InPlace.vue';
import InputText from '../../components/InputText/InputText.vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/InPlace',
  component: InPlace,
  tags: ['autodocs'],
  argTypes: {
    closable: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    closable: true,
  },
} satisfies Meta<typeof InPlace>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InPlace, InputText },
    setup() {
      const text = ref('Click to edit');
      return { args, text };
    },
    template: `
      <InPlace v-bind="args">
        <template #display>{{ text }}</template>
        <template #content="{ close }">
          <InputText v-model="text" @keydown.enter="close()" />
        </template>
      </InPlace>
    `,
  }),
};

export const NotClosable: Story = {
  render: (args) => ({
    components: { InPlace, InputText },
    setup() {
      const text = ref('Editing mode stays open');
      return { args, text };
    },
    template: `
      <InPlace v-bind="args" :closable="false">
        <template #display>{{ text }}</template>
        <template #content>
          <InputText v-model="text" />
        </template>
      </InPlace>
    `,
  }),
};

export const Disabled: Story = { args: { disabled: true } };
