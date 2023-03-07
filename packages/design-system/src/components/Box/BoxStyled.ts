import styled from "styled-components";
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  background,
} from "styled-system";
import type { BoxStyledProps } from "./BoxTypes";

const BoxStyled = styled.div<BoxStyledProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${background}
`;
export default BoxStyled;
