import type { Meta, StoryObj } from '@storybook/vue3';
import InputGroup from '../../components/InputGroup/InputGroup.vue';
import InputGroupAddon from '../../components/InputGroupAddon/InputGroupAddon.vue';
import InputText from '../../components/InputText/InputText.vue';

const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    fluid: { control: 'boolean' },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() { return { args }; },
    template: `
      <InputGroup v-bind="args">
        <InputGroupAddon>$</InputGroupAddon>
        <InputText placeholder="Amount" />
        <InputGroupAddon>.00</InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputText },
    template: `
      <InputGroup>
        <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
        <InputText placeholder="Username" />
      </InputGroup>
    `,
  }),
};

export const Fluid: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputText },
    template: `
      <InputGroup :fluid="true">
        <InputGroupAddon>@</InputGroupAddon>
        <InputText placeholder="Email" />
      </InputGroup>
    `,
  }),
};
