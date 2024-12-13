import { css } from "styled-components";

import { THEMES } from "@constants/constants";

export const input = css`
    max-width: 100%;
    margin: ${({ theme }) => theme.margins.xs} 0;

    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.backgroundNeutral : theme.colors.border};
    padding: ${({ theme }) => theme.paddings.m} ${({ theme }) => theme.paddings.base};
    border-radius: ${({ theme }) => theme.paddings.sm};
    border: none;

    font-size: ${({ theme }) => theme.fonts.size.md};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    color: ${({ theme }) => theme.colors.textPrimary};
`;
