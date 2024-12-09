import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledSelect = styled.select`
    @media only screen and (${device.sm}) {
        order: -1;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
