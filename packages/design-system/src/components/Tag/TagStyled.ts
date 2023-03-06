import styled from "styled-components";
import { layout, space, typography } from "styled-system";
import type { TagStyledProps } from "./TagTypes";

const Wrapper = styled.div<TagStyledProps>`
  display: inline-block;
  padding: 2px 8px;
  background: #e6f5fd;
  border-radius: 20px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;

  ${space}
  ${layout}
  ${typography}
`;

const TagStyled = {
  Wrapper,
};

export default TagStyled;
