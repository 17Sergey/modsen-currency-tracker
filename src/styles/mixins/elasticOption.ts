import { css } from "styled-components";

export const elasticOption = css`
    padding: ${({ theme }) => theme.paddings.sm} ${({ theme }) => theme.paddings.base};

    border: none;
    border-radius: ${({ theme }) => theme.paddings.sm};

    background: none;
    color: ${({ theme }) => theme.colors.textPrimary};

    text-align: left;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.textNeutralTransparent};
    }

    &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    }
`;
