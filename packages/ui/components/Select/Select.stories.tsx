import { ComponentStory } from "@storybook/react";

import { Select, SelectItem } from "./Select";

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </Select>
);

Default.args = {
  // placeholder: "Enter some text...",
  // size: "md",
  // disabled: false,
  value: "option1",
  defaultValue: "option1",
  placeholder: "Option 1",
};

const SelectMeta = {
  title: "Foundry UI/Select",
  component: Select,
};

export default SelectMeta;
