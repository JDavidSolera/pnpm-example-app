import { SpaceProps } from "styled-system";
import { ColorsKeys } from "../../types";

export type SpinnerSize = "sm" | "md" | "lg";

export type SpinnerProps = SpaceProps & {
  $size?: SpinnerSize;
  $color?: ColorsKeys;
};
