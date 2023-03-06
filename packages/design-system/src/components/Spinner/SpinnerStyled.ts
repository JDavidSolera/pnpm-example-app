import { rgba } from "polished";
import styled, { css } from "styled-components";
import { animations } from "../../utils";
import { SpinnerProps, SpinnerSize } from "./SpinnerTypes";

const getSize = (size: SpinnerSize = "md") =>
  ({
    sm: css`
      width: 20px;
      height: 20px;
      border-width: 2px;
    `,
    md: css`
      width: 32px;
      height: 32px;
      border-width: 3px;
    `,
    lg: css`
      width: 48px;
      height: 48px;
      border-width: 4px;
    `,
  }[size]);

const SpinnerStyled = styled.div<SpinnerProps>`
  display: inline-block;
  border-radius: 50%;
  border-style: solid;
  border-color: ${({ theme, $color }) => theme.colors[$color || "primary"]};
  border-left-color: ${rgba("#fff", 0.3)};
  animation: ${animations.spin} 1.1s infinite linear;

  ${({ $size }) => getSize($size)}
`;

export default SpinnerStyled;
