import styled from "styled-components";
import { layout, space, typography } from "styled-system";
import { ContainerStyledProps } from "./ContainerTypes";

const ContainerStyled = styled.div<ContainerStyledProps>`
  padding: 0 1rem;
  max-width: 768px;
  margin: 0 auto;

  ${space}
  ${layout}
  ${typography}
`;

export default ContainerStyled;
