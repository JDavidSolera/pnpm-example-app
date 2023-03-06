import { ButtonHTMLAttributes } from "react";
import { DefaultTheme } from "styled-components";
import {
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type ButtonVariant =
  | "text"
  | "primary"
  | "secondary"
  | "white"
  | "dark-blue"
  | "success"
  | "success-outlined";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonStyledProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  BorderRadiusProps & {
    $size?: ButtonSize;
    $variant?: ButtonVariant;
  };

export type ButtonCommonProps = ButtonStyledProps & {
  as?: any;
  href?: string;
  label: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  isLoading?: boolean;
};

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
