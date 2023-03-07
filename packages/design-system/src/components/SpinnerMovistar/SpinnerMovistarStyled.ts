import styled from "styled-components";
import { animations } from "../../utils";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  outline: solid 4px ${({ theme }) => theme.colors["primary-light"]};
  outline-offset: -4px;
`;

const Svg = styled.svg`
  position: relative;
  z-index: 2;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: ${({ theme }) => theme.colors.primary};
`;

const Circle = styled.circle<{ $duration?: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 4px;
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
  animation: ${animations.circleStroke} ${({ $duration }) => $duration}s linear
    infinite;
`;

export default {
  Wrapper,
  Svg,
  Circle,
  Icon,
};
