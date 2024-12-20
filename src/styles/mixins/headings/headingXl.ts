import { css } from "styled-components";

export const headingXl = css`
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-size: ${({ theme }) => theme.fonts.size.xl};
    margin-bottom: ${({ theme }) => theme.margins.md};
`;
