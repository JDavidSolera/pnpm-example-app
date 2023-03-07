import React from "react";
import { Select, SelectProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta<SelectProps> = {
  title: "Design System/Select",
  component: Select,
  argTypes: {},
};

const SelectStorybook: ComponentStory<typeof Select> = function SelectTEmplate({
  ...props
}) {
  return <Select {...props} />;
};

export const SelectBase = SelectStorybook.bind({});

SelectBase.args = {};

export default meta;
