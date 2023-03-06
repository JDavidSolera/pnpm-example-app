import React from "react";
import { Alert, AlertProps } from "@phoenix/design-system";
import { ComponentStory, Meta } from "@storybook/react";

const meta: Meta<AlertProps> = {
  title: "Design System/Alert",
  component: Alert,
  argTypes: {
    children: {
      defaultValue: "Componente alert",
    },
  },
};

const AlertStorybook: ComponentStory<typeof Alert> = function AlertTEmplate({
  ...props
}) {
  return <Alert {...props} />;
};

export const AlertBase = AlertStorybook.bind({});

AlertBase.args = {
  $type: "info",
};

export default meta;
