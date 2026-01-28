import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Accordion from '../../components/Accordion/Accordion.vue';
import AccordionTab from '../../components/Accordion/AccordionTab.vue';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleOpen: Story = {
  render: (args) => ({
    components: { Accordion, AccordionTab },
    setup() {
      const active = ref(0);
      return { args, active };
    },
    template: `
      <Accordion v-bind="args" v-model:activeIndex="active">
        <AccordionTab header="Section 1">
          <p style="color: #9ea5c2;">Content for the first section. Only one tab open at a time.</p>
        </AccordionTab>
        <AccordionTab header="Section 2">
          <p style="color: #9ea5c2;">Content for the second section.</p>
        </AccordionTab>
        <AccordionTab header="Section 3">
          <p style="color: #9ea5c2;">Content for the third section.</p>
        </AccordionTab>
      </Accordion>
    `,
  }),
};

export const MultipleOpen: Story = {
  render: (args) => ({
    components: { Accordion, AccordionTab },
    setup() {
      const active = ref([0, 2]);
      return { args, active };
    },
    template: `
      <Accordion v-bind="args" :multiple="true" v-model:activeIndex="active">
        <AccordionTab header="Section A">
          <p style="color: #9ea5c2;">Multiple sections can be open simultaneously.</p>
        </AccordionTab>
        <AccordionTab header="Section B">
          <p style="color: #9ea5c2;">Second section content.</p>
        </AccordionTab>
        <AccordionTab header="Section C">
          <p style="color: #9ea5c2;">Third section content.</p>
        </AccordionTab>
      </Accordion>
    `,
  }),
};
