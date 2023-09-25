import { ComponentStory } from "@storybook/react";

import { Slider } from "./Slider";

export const Default: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args} />
);

Default.args = {
  // placeholder: "Enter some text...",
  // size: "md",
  // disabled: false,
  // value: [3],
  defaultValue: [3],
  min: 0,
  max: 5,
};

const SliderMeta = {
  title: "Foundry UI/Slider",
  component: Slider,
};

export default SliderMeta;
