import styled, { keyframes } from "styled-components";

import { device } from "@styles/breakpoints";

export const StyledSection = styled.section`
    padding: ${({ theme }) => theme.paddings.lg} 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;

    @media only screen and (${device.sm}) {
        gap: 1rem;
    }
`;
export const StyledPulse = styled.div`
    width: ${({ theme }) => theme.widths.icons.base};
    height: ${({ theme }) => theme.widths.icons.base};
    position: relative;
    flex-shrink: 0;
`;

const StyledCircle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
`;

const pulseAnimation = keyframes`
  30%, 100% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.125);
  }
`;

export const StyledCircleOut = styled(StyledCircle)`
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.updatedAtPulses.outer};
    animation: ${pulseAnimation} 3s infinite;
`;

export const StyledCircleMiddle = styled(StyledCircle)`
    z-index: 20;
    transform: scale(0.65);
    background-color: ${({ theme }) => theme.colors.updatedAtPulses.middle};
`;

export const StyledCircleInner = styled(StyledCircle)`
    z-index: 30;
    transform: scale(0.3);
    background-color: ${({ theme }) => theme.colors.updatedAtPulses.inner};
`;

export const StyledCaption = styled.div`
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    font-size: ${({ theme }) => theme.fonts.size.md};
`;

export const StyledLoading = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const StyledError = styled.strong`
    color: ${({ theme }) => theme.colors.error};
`;
