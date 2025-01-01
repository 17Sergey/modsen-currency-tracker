import { css } from "styled-components";

import { THEMES } from "@constants/constants";

export const button = css`
    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.backgroundNeutral : theme.colors.border};
    padding: ${({ theme }) => theme.paddings.base} ${({ theme }) => theme.paddings.xl};
    border-radius: ${({ theme }) => theme.paddings.sm};
    transition: 0.2s ease all;

    &:hover {
        background-color: ${({ theme }) => theme.colors.textNeutralTransparent};
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
