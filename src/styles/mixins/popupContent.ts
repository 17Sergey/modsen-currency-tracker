import { css } from "styled-components";

import { lightTheme } from "@styles/theme";

export const popupContent = css`
    max-width: 100%;
    text-align: center;

    & button {
        width: 100%;

        margin-top: ${({ theme }) => theme.margins.sm};
        padding: ${({ theme }) => theme.paddings.xs} ${({ theme }) => theme.paddings.sm};

        background-color: ${lightTheme.colors.primary};
        color: ${({ theme }) => theme.colors.textPrimary};

        border-radius: ${({ theme }) => theme.paddings.sm};
    }
`;
