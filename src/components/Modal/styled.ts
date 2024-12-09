import styled from "styled-components";

import { THEMES } from "@constants/constants";

export const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;

    cursor: pointer;

    background-color: ${({ theme }) =>
        theme.name === THEMES.DARK ? theme.colors.backgroundNeutral : theme.colors.modalOverlay};
    opacity: 0.6;
`;

export const StyledModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`;
