import { css } from "styled-components";

import { Z_INDEX_MANAGER } from "@constants/constants";

export const modalOverlay = css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${Z_INDEX_MANAGER.UNDER_MAX};

    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.modalOverlay};
`;

export const modalBox = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${Z_INDEX_MANAGER.MAX};
`;
