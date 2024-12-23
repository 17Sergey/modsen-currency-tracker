import { css } from "styled-components";

import { THEMES } from "@constants/constants";
import { device } from "@styles/breakpoints";

export const modalBox = css`
    position: relative;

    width: 50vw;
    max-height: 90vh;

    max-width: 100%;
    min-height: 300px;

    padding: ${({ theme }) => theme.paddings.xl};

    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.modalBox : theme.colors.backgroundNeutral};
    border-radius: ${({ theme }) => theme.paddings.sm};

    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (${device.lg}) {
        width: 90vw;
    }
`;
