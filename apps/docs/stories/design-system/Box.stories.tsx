import React from "react";
import { Box, BoxProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta<BoxProps> = {
  title: "Design System/Box",
  component: Box,
  argTypes: {
    children: {
      defaultValue: "Componente Box",
    },
  },
};

const BoxStorybook: ComponentStory<typeof Box> = function BoxTEmplate({
  ...props
}) {
  return <Box {...props} />;
};

export const BoxBase = BoxStorybook.bind({});

BoxBase.args = {
  bg: "primary",
  color: "white",
  p: 4,
  textAlign: "center",
};

export default meta;
