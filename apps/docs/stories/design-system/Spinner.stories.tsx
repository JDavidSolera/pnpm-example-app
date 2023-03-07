import React from "react";
import { Box, Spinner, SpinnerProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";
import colorList from "../utils/colors";

const meta: Meta<SpinnerProps> = {
  title: "Design System/Spinner",
  component: Spinner,
  argTypes: {
    $color: {
      options: colorList,
      control: {
        type: "select",
      },
    },
    $size: {
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      control: {
        type: "radio",
      },
    },
  },
};

const SpinnerStorybook: ComponentStory<typeof Spinner> =
  function SpinnerTemplate({ ...props }) {
    return <Spinner {...props} />;
  };

const SpinnerWithBackgroundStorybook: ComponentStory<typeof Spinner> =
  function SpinnerTemplate({ ...props }) {
    return (
      <Box bg="secondary" maxWidth={150} p={3} textAlign="center">
        <Spinner {...props} />
      </Box>
    );
  };
export const SpinnerBase = SpinnerStorybook.bind({});

SpinnerBase.args = {};

export const SpinnerWithBackground = SpinnerWithBackgroundStorybook.bind({});

export default meta;
