import styled from "styled-components";

import { device } from "@styles/breakpoints";
import { input } from "@styles/mixins/input";

export const StyledInput = styled.input`
    ${input}
`;

export const StyledTargetFields = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    @media only screen and (${device.sm}) {
        gap: 0.5rem;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
