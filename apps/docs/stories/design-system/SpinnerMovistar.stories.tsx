import React from "react";
import { SpinnerMovistar, SpinnerMovistarProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta<SpinnerMovistarProps> = {
  title: "Design System/SpinnerMovistar",
  component: SpinnerMovistar,
  argTypes: {},
};

const SpinnerMovistarStorybook: ComponentStory<typeof SpinnerMovistar> =
  function SpinnerMovistarTEmplate({ ...props }) {
    return <SpinnerMovistar {...props} />;
  };

export const SpinnerMovistarBase = SpinnerMovistarStorybook.bind({});

SpinnerMovistarBase.args = {};

export default meta;
