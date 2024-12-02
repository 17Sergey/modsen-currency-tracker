import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 0;
`;

export const StyledToggleContainer = styled.div`
    @media only screen and (${device.md}) {
        display: none;
    }
`;
