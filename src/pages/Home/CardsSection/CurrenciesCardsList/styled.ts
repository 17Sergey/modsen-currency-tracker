import styled from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledWrapper = styled.div``;
export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media only screen and (${device.xl}) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (${device.md}) {
        grid-template-columns: 1fr;
    }
`;
export const StyledListItem = styled.li``;
