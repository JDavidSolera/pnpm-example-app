import { Box, Card } from "@phoenix/design-system";
import styled, { css } from "styled-components";

const CardWrapper = styled(Card)<{ isUnbeatable?: boolean }>`
  padding: 0 !important;
  border-radius: 8px;
  overflow: hidden;
`;

const HeadBand = styled(Box)<{ isUnbeatable?: boolean }>`
  color: white;
  text-align: center;
  font-size: 14px;
  text-align: center;
  padding: 9px 0;
  background: ${({ theme, isUnbeatable }) =>
    isUnbeatable ? theme.colors.magenta : theme.colors["secondary-dark"]};
`;

const Body = styled(Box)<{ isUnbeatable?: boolean }>`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.5rem;
  min-height: 364px;

  ${({ isUnbeatable }) =>
    isUnbeatable &&
    css`
      min-height: 345px;
      background-image: url(/images/backgrounds/card-promotion-unbeatable-valentin.svg);
      background-size: cover;
      background-position: center;
    `}
`;

const Photo = styled(Box)`
  height: 250px;
  max-width: 150px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardTerminalStyled = {
  CardWrapper,
  HeadBand,
  Body,
  Photo,
}

export default CardTerminalStyled;
