import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.fonts.main};
        color: ${({ theme }) => theme.colors["secondary-dark"]};
        background: ${({ theme }) => theme.colors["gray-1"]};
    }
`;
