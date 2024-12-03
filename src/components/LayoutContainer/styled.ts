import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledContainer = styled.div`
    max-width: ${({ theme }) => theme.widths.container};
    width: 80%;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.paddings.container};

    @media only screen and (${device.lg}) {
        width: 95%;
    }

    @media only screen and (${device.md}) {
        width: 100%;
    }
`;
