import { ReactNode } from "react";
import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type BoxStyledProps = LayoutProps &
  TypographyProps &
  ColorProps &
  SpaceProps &
  BorderProps &
  BoxShadowProps &
  FlexboxProps &
  BackgroundProps & {};

export type BoxProps = BoxStyledProps & {
  children: ReactNode;
};
