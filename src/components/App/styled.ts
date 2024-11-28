import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledLayout = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledMain = styled.main`
    flex-grow: 1;
    padding: 5rem 0;

    @media only screen and (${device.sm}) {
        padding: 2.5rem 0;
    }
`;

export const StyledP = styled.p`
    color: ${({ theme }) => theme.colors.logoGradient.first};
`;
