import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type CardStyledProps = TypographyProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  LayoutProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  BoxShadowProps<DefaultTheme> &
  BorderProps & {
    $elevation?: boolean;
  };

export type CardProps = CardStyledProps & {
  children: ReactNode;
};
