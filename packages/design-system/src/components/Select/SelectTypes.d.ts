// import { Props as ReactSelectProps } from "react-select";
import { AsyncProps as ReactSelectAsyncProps } from "react-select/async";
import { LayoutProps, SpaceProps } from "styled-system";

export type SelectStyledProps = LayoutProps & SpaceProps;

export type SelectBaseProps = {};

export type SelectAsyncProps = SelectBaseProps & {};

export type SelectProps = SelectStyledProps &
  ReactSelectAsyncProps & {
    error?: boolean;
  };
