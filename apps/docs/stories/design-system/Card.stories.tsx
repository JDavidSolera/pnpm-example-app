import React from "react";
import { Card, CardProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta<CardProps> = {
  title: "Design System/Card",
  component: Card,
  argTypes: {
    children: {
      defaultValue: "Componente Card",
    },
  },
};

const CardStorybook: ComponentStory<typeof Card> = function CardTEmplate({
  ...props
}) {
  return <Card {...props} />;
};

export const CardBase = CardStorybook.bind({});

CardBase.args = {};

export default meta;
