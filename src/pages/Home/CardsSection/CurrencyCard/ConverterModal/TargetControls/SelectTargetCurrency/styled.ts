import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledSelect = styled.div`
    @media only screen and (${device.md}) {
        order: -1;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
