import styled from "styled-components";

import { Z_INDEX_MANAGER } from "@constants/constants";
import { device } from "@styles/breakpoints";

export const StyledSelectWrapper = styled.div`
    position: relative;
    /* width: 10rem; */
`;

export const StyledSelect = styled.div`
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */

    z-index: ${Z_INDEX_MANAGER.MAX} + 1;
    @media only screen and (${device.md}) {
        order: -1;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
