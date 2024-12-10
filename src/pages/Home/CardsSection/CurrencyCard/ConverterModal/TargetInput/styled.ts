import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledTargetCurrency = styled.div``;

export const StyledInput = styled.input`
    max-width: 100%;
    margin: ${({ theme }) => theme.margins.xs} 0;
`;

export const StyledTargetFields = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media only screen and (${device.sm}) {
        gap: 0.5rem;
        margin: ${({ theme }) => theme.margins.sm} 0;
    }
`;
