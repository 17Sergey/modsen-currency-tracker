import styled from "styled-components";

import { Z_INDEX_MANAGER } from "@constants/constants";
import { device } from "@styles/breakpoints";

export const StyledSelectWrapper = styled.div`
    position: relative;
`;

export const StyledSelect = styled.div`
    z-index: ${Z_INDEX_MANAGER.MODAL_BOX} + 1;
    @media only screen and (${device.md}) {
        order: -1;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
