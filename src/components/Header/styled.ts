import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 0;
`;

export const StyledCurrencyLogo = styled.div`
    width: 2.5rem;
    height: 2.5rem;
`;

export const StyledToggle = styled.div`
    @media only screen and (${device.md}) {
        display: none;
    }
`;
