import styled from "styled-components";

import { Z_INDEX_MANAGER } from "@constants/constants";

export const StyledWrapper = styled.div`
    position: fixed;
    inset: 0;
    z-index: ${Z_INDEX_MANAGER.MODAL_OVERLAY};
    background-color: ${({ theme }) => theme.colors.modalOverlay};

    display: grid;
    place-items: center;

    cursor: pointer;
    overflow-y: auto;
`;

export const StyledModalBox = styled.div`
    cursor: default;
    position: relative;
    z-index: ${Z_INDEX_MANAGER.MODAL_BOX};
`;
