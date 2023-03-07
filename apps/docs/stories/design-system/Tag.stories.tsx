import React from "react";
import { Tag, TagProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta<TagProps> = {
  title: "Design System/Tag",
  component: Tag,
  argTypes: {
    children: { defaultValue: "Componente Tag" },
  },
};

const TagStorybook: ComponentStory<typeof Tag> = function TagTEmplate({
  ...props
}) {
  return <Tag {...props} />;
};

export const TagBase = TagStorybook.bind({});

TagBase.args = {};

export default meta;
