import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.h2`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ScreenLoaderStyled = {
  Wrapper,
  Box,
  Text,
};

export default ScreenLoaderStyled;
