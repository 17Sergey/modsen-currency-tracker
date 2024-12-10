import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: ${({ theme }) => theme.paddings.xl} 0;
`;

export const StyledCurrencyLogo = styled.div`
    width: ${({ theme }) => theme.widths.icons.base};
    height: ${({ theme }) => theme.widths.icons.base};
`;

export const StyledToggle = styled.div`
    @media only screen and (${device.md}) {
        display: none;
    }
`;
