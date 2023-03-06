import { useId } from "react";
import { LoadingIndicatorProps } from "react-select";
import { useTheme } from "styled-components";
import { Spinner } from "../Spinner";
import SelectStyled, { getReactSelectStyles } from "./SelectStyled";
import { SelectProps } from "./SelectTypes";

function LoadingIndicator({
  cx,
  ...props
}: LoadingIndicatorProps<any, any> | any) {
  return <Spinner $size="sm" {...props} />;
}

export default function Select({ error, ...props }: SelectProps) {
  const theme = useTheme();

  return (
    <SelectStyled
      instanceId={useId()}
      styles={getReactSelectStyles({ error, theme })}
      components={{ LoadingIndicator }}
      {...props}
    />
  );
}
